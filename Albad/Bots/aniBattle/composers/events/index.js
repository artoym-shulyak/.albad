const { Composer, Markup, Extra } = require('telegraf')
const bot = new Composer()
const User = require('../../models/user.model.js')
const Rating = require('../../models/rating.model.js')
const throttle = require('../../utils/throttle.js')

// COMPONENTS ---->
// 🏆 Ивенты AniGame 🏆
const events = async (ctx) => {
	try {
		const uuid = ctx.from.id // ID user
		const data = ctx.match[0] // Information btn
		if (data.indexOf(uuid) === -1) return // Проверка чужокого нажатия на кнопку

		await ctx.editMessageText(
			ctx.i18n.t('events'),
			Extra.markup(
				Markup.inlineKeyboard([
					[
						Markup.urlButton(
							'🧩 Нᴀйʍ 🎁',
							'https://telegra.ph/Najm-10-17'
						),
						Markup.callbackButton(
							'🏆 Рᴇйᴛинᴦ',
							`eRCRating_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'💥 Вɜᴧёᴛ ᴨᴏ БМ',
							`null_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'🎯 Бᴀᴛᴛᴧ',
							`null_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'🧩 Бᴀᴛᴛᴧ',
							`null_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'🏰 Биᴛʙᴀ Гиᴧьдии ⚔️',
							`null_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'🐲 Миᴩᴏʙᴏй Бᴏᴄᴄ',
							`null_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'🧩 PVP Кᴏʍᴀндᴀ',
							`null_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'💰 Пᴏᴨᴏᴧнᴇния',
							`null_${uuid}`
						),
					],
					[
						Markup.callbackButton(
							'🏰 Биᴛʙᴀ ɜᴀ Сᴧᴀʙу 🏆',
							`null_${uuid}`
						),
					],
					[Markup.callbackButton('⬅️ Назад', `world_${uuid}`)],
				])
			).HTML()
		)

		ctx.answerCbQuery('🏆 Эвенты AniGame 🏆', { cache_time: 3 })
	} catch (e) {
		console.error(e)
	}
}

const waitingUpdateEvent = async (ctx) => {
	try {
		const uuid = ctx[0].from.id // ID user
		const data = ctx[0].match[0] // Information btn
		if (data.indexOf(uuid) === -1) return // Проверка чужокого нажатия на кнопку

		switch (ctx[1]) {
		 case 'ожидание ивента':
			ctx[0].answerCbQuery('🕒 В ожидиания объявления ивента 🕒', {cache_time: 3,})
		 	break
		 default: 
		 	console.log('This btn doesn"t not exist...')
		} 



	} catch (e) {
		console.error(e)
	}
}

// Троттлинг ----->
let eventsPlayer = throttle(events, 700)
let waitingUpdateEventPlayer = throttle(waitingUpdateEvent, 700)

// Actions ----->
// 🏆 Ивенты AniGame 🏆
bot.action(new RegExp('events_(.+)'), ctx => eventsPlayer(ctx))

// '🕒 В ожидиания объявления ивента 🕒'
bot.action(new RegExp('null_(.+)'), ctx => waitingUpdateEventPlayer([ctx, 'ожидание ивента']))

module.exports = bot
