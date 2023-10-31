const { Composer, Markup, Extra } = require('telegraf')
const bot = new Composer()
const User = require('../../models/user.model.js')
const getChar = require('./getChar.js')
const throttle = require('../../utils/throttle.js')

bot.use(require('./searchChar.js')) // Поиск персонажа по имени
bot.use(require('./swapChar.js')) // Поиск персонажа по имени

// Получение персонажа
const getCharacter = async (ctx) => {
		try {
				const uuid = ctx.from.id

				await getChar(uuid, ctx)
		} catch (e) {
				console.error(e)
		}
}

const timerGetCharacter = async (ctx) => {
	try {
		const uuid = ctx.from.id
		const data = ctx.match[0]
		if (data.indexOf(uuid) === -1) return

		await User.findOne({uuid})
		.then(async user => {
				if (new Date() < user.deadlines.getChar.deadline) {
					await ctx.replyWithHTML(
					`🃏 Нᴀняᴛь бᴇᴄᴨᴧᴀᴛнᴏ ᴨᴇᴩᴄᴏнᴀжᴀ ᴄʍᴏжᴇɯь ʙ <strong>${user.deadlines.getChar.deadline
							.toLocaleString('ru-RU')
							.split(',')[1]
							.trim()}</strong> (МСК).`
					)
						ctx.answerCbQuery('🗡 Время еще не вышло...', { cache_time: 3 })
				} else {
						await User.updateOne(
								{ uuid },
								{
										$set: {
												'deadlines.getChar.deadline': await new Date(
														Date.parse(new Date()) +
																await user.deadlines.getChar.term *
																		60 *
																		60 *
																		1000
												),
										},
								}
						)
					await getChar(uuid, ctx)
					ctx.answerCbQuery('🃏', { cache_time: 3 })
				}
		})
	} catch (e) {
		console.error(e)
	}
}

// Троттлинг
let throttleGetChar = throttle(getCharacter, 1200)
let throttleTimerGetCharacter = throttle(timerGetCharacter, 1200)

// Messages
bot.hears([new RegExp('найм', 'i'),new RegExp('нанять персонажа', 'i')], ctx => throttleGetChar(ctx))

// Actions
bot.action(new RegExp('get_char_(.+)'), ctx => throttleTimerGetCharacter(ctx))

module.exports = bot

