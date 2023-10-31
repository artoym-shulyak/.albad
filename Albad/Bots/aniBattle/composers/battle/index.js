const { Composer, Markup, Extra } = require('telegraf')
const bot = new Composer()
const User = require('../../models/user.model.js')
const throttle = require('../../utils/throttle.js')

// -> Other functions from files
bot.use(require('./playerSearch.js')) // Поиск игрока
bot.use(require('./changeInfo.js')) // Сменить что-то...

const battle = async (ctx) => {
	try {
		const uuid = ctx[0].from.id // ID user
		let action = 'reply'

		if (ctx[0].updateType === 'callback_query') {
			const data = ctx[0].match[1]
			if (data.indexOf(uuid) === -1) return
			action = "editMessageText"
		 ctx[0].answerCbQuery('⚔️ Сражение', { cache_time: 3 })
		} 

		switch (ctx[1]) {
		 case 'Главная':
		 		if (await User.findOne({uuid}) === null) return
				await ctx[0][action](
					ctx[0].i18n.t('battle'),
					Extra.markup(
						Markup.inlineKeyboard([
							[Markup.callbackButton('🎯 Бᴀᴛᴛᴧ', `fight_players_${uuid}`)],
							[Markup.callbackButton('🧩 Бᴀᴛᴛᴧ', `fight_characters_${uuid}`)],
							[
								Markup.callbackButton(
									'🧩 PVP 3 vs 3',
									`fight_team_chars_${uuid}`
								),
							],
							[
								Markup.callbackButton('⬅️ Нᴀɜᴀд', `studia_${uuid}`),
								Markup.urlButton(
									'🆘 Сᴨᴩᴀʙᴋᴀ',
									'https://telegra.ph/Srazhenie-10-29'
								),
							],
						])
					).HTML()
				)
		 	break
		 case '🎯 баттл':
				await User.findOne({ uuid }).then(async user => {
					await ctx[0].editMessageText(
						ctx[0].i18n.t('🎯 Баттл', { user }),
						Extra.markup(
							Markup.inlineKeyboard([
								[
									Markup.callbackButton(
										'🔎 Пᴏиᴄᴋ и ᴀᴛᴀᴋᴏʙᴀᴛь...',
										`fp_fight_${uuid}`
									),
								],
								[Markup.callbackButton('⬅️ Нᴀɜᴀд', `battle_${uuid}`)],
							])
						).HTML()
					)
				})
		 	break
		 case '🧩 баттл':
				await User.findOne({ uuid }).then(async user => {
							await ctx[0].editMessageText(
								ctx[0].i18n.t('🧩 Баттл', { char: await user.battle.char }),
								Extra.markup(
									Markup.inlineKeyboard([
										[
											Markup.callbackButton(
												'🔎 Пᴏиᴄᴋ и ᴀᴛᴀᴋᴏʙᴀᴛь...',
												`fp_char_fight_${uuid}`
											),
										],
										[
											Markup.callbackButton(
												'🧩 Сʍᴇниᴛь ᴨᴇᴩᴄᴏнᴀжᴀ',
												`change_character_${uuid}`
											),
										],
										[Markup.callbackButton('⬅️ Нᴀɜᴀд', `battle_${uuid}`)],
									])
								).HTML()
							)
						})
		 	break
		 case '🧩 pvp команда':
				await User.findOne({ uuid }).then(async user => {
						await ctx[0].editMessageText(
							ctx[0].i18n.t('🧩 PVP Команда', {
								char_1: await user.battle.teamCharacters.first,
								char_2: await user.battle.teamCharacters.second,
								char_3: await user.battle.teamCharacters.third,
							}),
							Extra.markup(
								Markup.inlineKeyboard([
									[Markup.callbackButton('🔎 Пᴏиᴄᴋ и ᴀᴛᴀᴋᴏʙᴀᴛь', `fс_team_${uuid}`)],
									[
										Markup.callbackButton(
											'🧩 Сʍᴇниᴛь ᴨᴇᴩᴄᴏнᴀжᴇй',
											`change_team_character_${uuid}`
										),
									],
									[Markup.callbackButton('⬅️ Назад', `battle_${uuid}`)],
								])
							).HTML()
						)
					})
		 	break
		 default: 
		 	console.log('This so component. (fn:battle)')
		}
	} catch (e) {
		console.error(e)
	}
}

// Троттлинг ----->
let throttleBattle = throttle(battle, 1500)

// Messages
bot.hears([new RegExp('сражение', 'i'), new RegExp('битва', 'i')], ctx => throttleBattle([ctx, 'Главная']))

// Actions
bot.action(new RegExp('battle_(.+)'), ctx => throttleBattle([ctx, 'Главная']))
bot.action(new RegExp('fight_players_(.+)'), ctx => throttleBattle([ctx, '🎯 баттл']))
bot.action(new RegExp('fight_characters_(.+)'), ctx => throttleBattle([ctx, '🧩 баттл']))
bot.action(new RegExp('fight_team_chars_(.+)'), ctx => throttleBattle([ctx, '🧩 pvp команда']))

module.exports = bot
