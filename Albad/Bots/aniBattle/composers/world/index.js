const { Composer, Markup, Extra } = require('telegraf')
const bot = new Composer()
const User = require('../../models/user.model.js')
const throttle = require('../../utils/throttle.js')

// Мир
const world = async (ctx) => {
	try {
		const uuid = ctx.from.id // ID user
		let action = 'reply'
		
		if (ctx.updateType === 'callback_query') {
			const data = ctx.match[1]
			if (data.indexOf(uuid) === -1) return
			action = "editMessageText"
		 ctx.answerCbQuery('Мир', { cache_time: 3 })
		} 

		await User.findOne({ uuid }).then(async user => {
			if (user == null) return
			await ctx[action](
				ctx.i18n.t('world', {
					name: await user.name,
					characters: await user.characters.length,
					isVipCard: (await user.settings.visibility.vipCard)
						? '<tg-spoiler>−</tg-spoiler>'
						: user.vipCard.vip,
					isCrio: (await user.settings.visibility.crio)
						? '<tg-spoiler>−</tg-spoiler>'
						: user.resources.crio,
					isCountCard: (await user.settings.visibility.card)
						? '<tg-spoiler>−</tg-spoiler>'
						: user.resources.recrute,
					id: await user.uuid,
				}),
				Extra.markup(
					Markup.inlineKeyboard([
						[
							Markup.callbackButton('⛩ Тᴀʙᴇᴩнᴀ', `shop_${uuid}`),
							Markup.callbackButton('🏰 Гиᴧьдия', `clan_${uuid}`)
						],
						[
							Markup.callbackButton('🍀 Бᴏнуᴄ', `bonus_${uuid}`),
							Markup.callbackButton('🃏 Нᴀйʍ', `get_char_${uuid}`)
						],
						[Markup.callbackButton('🏆 Иʙᴇнᴛы AniGame 🏆', `events_${uuid}`)],
						[Markup.callbackButton('⬅️ Нᴀɜᴀд', `studia_${uuid}`)],
					])
				).HTML()
			)
		})
	} catch (e) {
		console.error(e)
	}
}

// ТРОТТЛИНГ ----->
let throttleWorld = throttle(world, 700)

// Messages
bot.hears([new RegExp('мир', 'i')], ctx => throttleWorld(ctx))

// Actions
bot.action(new RegExp('world_(.+)'), ctx => throttleWorld(ctx))

module.exports = bot
