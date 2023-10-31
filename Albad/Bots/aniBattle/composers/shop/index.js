const { Composer, Markup, Extra } = require('telegraf')
const bot = new Composer()
const throttle = require('../../utils/throttle.js')
const User = require('../../models/user.model.js')

// ⛩ Таверна
const shop = async (ctx) => {
	try {
		const uuid = ctx.from.id
		let action = 'reply'

		if (ctx.updateType === 'callback_query') {
			const data = ctx.match[1]
			if (data.indexOf(uuid) === -1) return
			action = "editMessageText"
		  ctx.answerCbQuery('⛩ Таверна', { cache_time: 3 })
		} 

		if (await User.findOne({uuid}) == null) return

		await ctx[action](
			ctx.i18n.t('⛩ Таверна'),
			Extra.markup(
				Markup.inlineKeyboard([
					[
						Markup.callbackButton('🔮 Аʍуᴧᴇᴛы', `amulets_${uuid}`),
						Markup.callbackButton('📚 Бибᴧиᴏᴛᴇᴋᴀ', `books_${uuid}`)
					],
					[
					  Markup.callbackButton('🃏 Кᴀᴩᴛы', `cards_${uuid}`),
						Markup.callbackButton('♻️ Обʍᴇн', `swap_card_${uuid}`),
					],
					[
						Markup.callbackButton('🏰 Лᴀʙᴋᴀ', `clShop_${uuid}`),
						Markup.callbackButton('🪙 Мᴏнᴇᴛы', `clMoney_${uuid}`)
					],
					[
						Markup.callbackButton(
							'🏦 Чᴇᴩный ᴩынᴏᴋ',
							`black_marketplace_${uuid}`
						),
						Markup.callbackButton('〽️ Биᴩжᴀ', `market_${uuid}`),
					],
					[Markup.callbackButton('⭐️ VIP', `vip_${uuid}`)],
					[Markup.callbackButton('⬅️ Нᴀɜᴀд', `world_${uuid}`)],
				])
			).HTML()
		)
	} catch (e) {
		console.error(e)
	}
}

// Троттлинг
let throttleShop = throttle(shop, 700)

// Messages
bot.hears([new RegExp('таверна', 'i')], ctx => throttleShop(ctx))

// Actions
bot.action(new RegExp('shop_(.+)'), ctx => throttleShop(ctx))

module.exports = bot
