const { Composer, Markup, Extra } = require('telegraf')
const bot = new Composer()
const User = require('../../models/user.model.js')
const throttle = require('../../utils/throttle.js')
const roundNum = require('../../utils/roundNumber.js')

// 'Студия'
const componentAttelier = async (ctx) => {
	try {
		const uuid = ctx.from.id
		let action = 'reply'

		if (ctx.updateType === 'callback_query') {
			const data = ctx.match[1]
			if (data.indexOf(uuid) === -1) return
			action = "editMessageText"
		 ctx.answerCbQuery('Студия', { cache_time: 3 })
		} 

		await User.findOne({ uuid }).then(async user => {
			if (user == null) return
			await ctx[action](
				ctx.i18n.t('studia', {
					name: await user.name,
					characters: await user.characters.length,
					isVipCard: (await user.settings.visibility.vipCard)
						? '<tg-spoiler>−</tg-spoiler>'
						: await user.vipCard.vip,
					bm: await roundNum(user.stats.bm),
					hp: await roundNum(user.stats.hp),
					glory: await user.glory,
					clan: await user.clan.name !== 'null' ? await user.clan.name : '-',
					id: await user.uuid,
				}),
				Extra.markup(
					Markup.inlineKeyboard([
						[
							Markup.callbackButton('⚔️ Сᴩᴀжᴇниᴇ', `battle_${uuid}`),
							Markup.callbackButton('🏞 Миᴩ', `world_${uuid}`),
						],
						[
							Markup.callbackButton('👑 Рᴇйᴛинᴦ', `rating_${uuid}`),
							Markup.callbackButton('🎒 Рюᴋɜᴀᴋ', `backpack_${uuid}`),
						],
						[
							Markup.callbackButton('📜 Ежᴇднᴇʙнᴏ', `quest_${uuid}`),
							Markup.callbackButton('⚙️ Нᴀᴄᴛᴩᴏйᴋи', `settings_${uuid}`),
						],
					])
				).HTML()
			)
		})
	} catch (e) {
		console.error(e)
	}
}

// ТРОТТЛИНГ ----->
let atelier = throttle(componentAttelier, 700)

// 'Студия'
// Messages
bot.hears(['/studia', new RegExp('студия', 'i')], ctx => atelier(ctx))
// Actions
bot.action(new RegExp('studia_(.+)'), ctx => atelier(ctx))

module.exports = bot
