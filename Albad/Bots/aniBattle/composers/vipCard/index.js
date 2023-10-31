const { Composer, Markup, Extra } = require('telegraf')
const bot = new Composer()
const User = require('../../models/user.model.js')
const throttle = require('../../utils/throttle.js')

// ⭐️ VIP
const vip = async (ctx) => {
	try {
		const uuid = ctx[0].from.id // ID user
		const data = ctx[0].match[0] // Information btn
		if (data.indexOf(uuid) === -1) return // Проверка чужокого нажатия на кнопку

		switch (ctx[1]) {
		 case 'главная':
				await ctx[0].editMessageText(
					ctx[0].i18n.t('vip'),
					Extra.markup(
						Markup.inlineKeyboard([
							[
								Markup.callbackButton('⭐️ 1', `vip1_${uuid}`),
								Markup.callbackButton('⭐️ 2', `vip2_${uuid}`),
								Markup.callbackButton('⭐️ 3', `vip3_${uuid}`),
								Markup.callbackButton('⭐️ 4', `vip4_${uuid}`),
								Markup.callbackButton('⭐️ 5', `vip5_${uuid}`),
							],
							[
								Markup.callbackButton('⬅️ Назад', `shop_${uuid}`),
								Markup.urlButton(
									'📝 Сᴨᴩᴀʙᴋᴀ',
									'https://telegra.ph/VIP-10-29-5'
								),
							],
						])
					).HTML()
				)

				ctx[0].answerCbQuery('⭐️ VIP', { cache_time: 3 })
		 	break
	  case 'vip 1':
					await User.findOne({ uuid }).then(async user => {
						if (user.vipCard.vip1) {
							await ctx[0].editMessageText(
								ctx[0].i18n.t('vip1_success', { count: await user.resources.gems }),
								Extra.markup(
									Markup.inlineKeyboard([
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`),
									])
								).HTML()
							)
						} else {
							if (user.resources.gems < 49) {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip1', { count: user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('💰 Пᴏᴨᴏᴧниᴛь', `v_donat_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							} else {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip1', { count: await user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('Аᴋᴛиʙиᴩᴏʙᴀᴛь', `v_ok_1_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							}
						}
					})

					ctx[0].answerCbQuery('⭐️ VIP 1', { cache_time: 3 })
	    break;
	  case 'vip 2':
					await User.findOne({ uuid }).then(async user => {
						if (user.vipCard.vip2) {
							await ctx[0].editMessageText(
								ctx[0].i18n.t('vip2_success', { count: await user.resources.gems }),
								Extra.markup(
									Markup.inlineKeyboard([
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`),
									])
								).HTML()
							)
						} else {
							if (user.resources.gems < 244) {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip2', { count: await user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('💰 Пᴏᴨᴏᴧниᴛь', `v_donat_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							} else {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip2', { count: await user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('Аᴋᴛиʙиᴩᴏʙᴀᴛь', `v_ok_2_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							}
						}
					})

					ctx[0].answerCbQuery('⭐️ VIP 2', { cache_time: 3 })
	    break;
	  case 'vip 3':
					await User.findOne({ uuid }).then(async user => {
						if (user.vipCard.vip3) {
							await ctx[0].editMessageText(
								ctx[0].i18n.t('vip3_success', { count: await user.resources.gems }),
								Extra.markup(
									Markup.inlineKeyboard([
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`),
									])
								).HTML()
							)
						} else {
							if (user.resources.gems < 1109) {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip3', { count: await user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('💰 Пᴏᴨᴏᴧниᴛь', `v_donat_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							} else {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip3', { count: await user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('Аᴋᴛиʙиᴩᴏʙᴀᴛь', `v_ok_3_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							}
						}
					})

					ctx[0].answerCbQuery('⭐️ VIP 3', { cache_time: 3 })
	    break;
	  case 'vip 4':
					await User.findOne({ uuid }).then(async user => {
						if (user.vipCard.vip4) {
							await ctx[0].editMessageText(
								ctx[0].i18n.t('vip4_success', { count: await user.resources.gems }),
								Extra.markup(
									Markup.inlineKeyboard([
										Markup.callbackButton('⬅️ Назад', `vip_${uuid}`),
									])
								).HTML()
							)
						} else {
							if (user.resources.gems < 3129) {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip4', { count: user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('💰 Пᴏᴨᴏᴧниᴛь', `v_donat_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							} else {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip4', { count: await user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('Аᴋᴛиʙиᴩᴏʙᴀᴛь', `v_ok_4_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							}
						}
					})

					ctx[0].answerCbQuery('⭐️ VIP 4', { cache_time: 3 })
	    break;
	  case 'vip 5':
					await User.findOne({ uuid }).then(async user => {
						if (user.vipCard.vip5) {
							await ctx[0].editMessageText(
								ctx[0].i18n.t('vip5_success', { count: user.resources.gems }),
								Extra.markup(
									Markup.inlineKeyboard([
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`),
									])
								).HTML()
							)
						} else {
							if (user.resources.gems < 5289) {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip5', { count: user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('💰 Пᴏᴨᴏᴧниᴛь', `v_donat_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							} else {
								await ctx[0].editMessageText(
									ctx[0].i18n.t('vip5', { count: user.resources.gems }),
									Extra.markup(
										Markup.inlineKeyboard([
											[Markup.callbackButton('Аᴋᴛиʙиᴩᴏʙᴀᴛь', `v_ok_5_${uuid}`)],
											[Markup.callbackButton('⬅️ Нᴀɜᴀд', `vip_${uuid}`)],
										])
									).HTML()
								)
							}
						}
					})

					ctx[0].answerCbQuery('⭐️ VIP 5', { cache_time: 3 })
	    break;
	  case 1:
					await User.updateOne(
						{ uuid },
						{ 
							$set: { 
								'vipCard.vip1': true, 
							 'vipCard.vip': 1,
							 'deadlines.bonus.term': 7, // Таймер БОНУСА
							 'deadlines.battle.term': 7 //🎯 Таймер БАТТЛ
						},
							$inc: { "resources.recrute": 25 }
						}
					).then(async () => {
						await ctx[0].editMessageText(
							ctx[0].i18n.t('vip'),
							Extra.markup(
								Markup.inlineKeyboard([
									[
										Markup.callbackButton('⭐️ 1', `vip1_${uuid}`),
										Markup.callbackButton('⭐️ 2', `vip2_${uuid}`),
										Markup.callbackButton('⭐️ 3', `vip3_${uuid}`),
										Markup.callbackButton('⭐️ 4', `vip4_${uuid}`),
										Markup.callbackButton('⭐️ 5', `vip5_${uuid}`),
									],
									[
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `world_${uuid}`),
										Markup.urlButton(
											'📝 Сᴨᴩᴀʙᴋᴀ',
											'https://telegra.ph/Aniversecard-Sila-vseh-mificheskih-kart-07-16'
										),
									],
								])
							).HTML()
						)
					})

					ctx[0].answerCbQuery('Активирована ⭐️ 1', { cache_time: 3 })
	    break;
	  case 2:
					await User.updateOne(
						{ uuid },
						{ 
							$set: { 
								'vipCard.vip2': true, 
							 'vipCard.vip': 2,
							 'deadlines.bonus.term': 6, // Таймер БОНУСА
							 'deadlines.battle.term': 6, // 🎯 Таймер БАТТЛ
							 'deadlines.battleChar.term': 7, // 🧩 Таймер БАТТЛ
							 'deadlines.battleTeamCharacters.term': 7, // 🧩 Таймер PVP Команда
							 'deadlines.getChar.term': 4 // 🧩 Таймер Найма
						},
							$inc: { 
								"resources.recrute": 25, // КАРТЫ
								"resources.crio": 256 // КРИОНИТЫ
							}
						}
					).then(async () => {
						await ctx[0].editMessageText(
							ctx[0].i18n.t('vip'),
							Extra.markup(
								Markup.inlineKeyboard([
									[
										Markup.callbackButton('⭐️ 1', `vip1_${uuid}`),
										Markup.callbackButton('⭐️ 2', `vip2_${uuid}`),
										Markup.callbackButton('⭐️ 3', `vip3_${uuid}`),
										Markup.callbackButton('⭐️ 4', `vip4_${uuid}`),
										Markup.callbackButton('⭐️ 5', `vip5_${uuid}`),
									],
									[
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `world_${uuid}`),
										Markup.urlButton(
											'📝 Сᴨᴩᴀʙᴋᴀ',
											'https://telegra.ph/Aniversecard-Sila-vseh-mificheskih-kart-07-16'
										),
									],
								])
							).HTML()
						)
					})

					ctx[0].answerCbQuery('Активирована ⭐️ 2', { cache_time: 3 })
	    break;
	  case 3:
					await User.updateOne(
						{ uuid },
						{
							$set: { 
								'vipCard.vip3': true, 
							 'vipCard.vip': 3,
							 'deadlines.bonus.term': 5, // Таймер БОНУСА
							 'deadlines.battle.term': 5, // 🎯 Таймер БАТТЛ
							 'deadlines.battleChar.term': 6, // 🧩 Таймер БАТТЛ
							 'deadlines.battleTeamCharacters.term': 6, // 🧩 Таймер PVP Команда
							 'deadlines.getChar.term': 3 // 🧩 Таймер Найма
						},
							$inc: { 
								"resources.crio": 1200 // КРИОНИТЫ
							}
						}
					).then(async () => {
						await ctx[0].editMessageText(
							ctx[0].i18n.t('vip'),
							Extra.markup(
								Markup.inlineKeyboard([
									[
										Markup.callbackButton('⭐️ 1', `vip1_${uuid}`),
										Markup.callbackButton('⭐️ 2', `vip2_${uuid}`),
										Markup.callbackButton('⭐️ 3', `vip3_${uuid}`),
										Markup.callbackButton('⭐️ 4', `vip4_${uuid}`),
										Markup.callbackButton('⭐️ 5', `vip5_${uuid}`),
									],
									[
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `world_${uuid}`),
										Markup.urlButton(
											'📝 Сᴨᴩᴀʙᴋᴀ',
											'https://telegra.ph/Aniversecard-Sila-vseh-mificheskih-kart-07-16'
										),
									],
								])
							).HTML()
						)
					})

					ctx[0].answerCbQuery('Активирована ⭐️ 3', { cache_time: 3 })
	    break;
	  case 4:
					await User.updateOne(
						{ uuid },
						{ 
							$set: { 
								'vipCard.vip4': true, 
							 'vipCard.vip': 4,
							 'deadlines.bonus.term': 5, // Таймер БОНУСА
							 'deadlines.battle.term': 4, // 🎯 Таймер БАТТЛ
							 'deadlines.battleChar.term': 4, // 🧩 Таймер БАТТЛ
							 'deadlines.battleTeamCharacters.term': 4 // 🧩 Таймер PVP Команда
						},
							$inc: { 
								"resources.recrute": 325, // КАРТЫ
								"resources.crio": 4750 // КРИОНИТЫ
							}
						}
					).then(async () => {
						await ctx[0].editMessageText(
							ctx[0].i18n.t('vip'),
							Extra.markup(
								Markup.inlineKeyboard([
									[
										Markup.callbackButton('⭐️ 1', `vip1_${uuid}`),
										Markup.callbackButton('⭐️ 2', `vip2_${uuid}`),
										Markup.callbackButton('⭐️ 3', `vip3_${uuid}`),
										Markup.callbackButton('⭐️ 4', `vip4_${uuid}`),
										Markup.callbackButton('⭐️ 5', `vip5_${uuid}`),
									],
									[
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `world_${uuid}`),
										Markup.urlButton(
											'📝 Сᴨᴩᴀʙᴋᴀ',
											'https://telegra.ph/Aniversecard-Sila-vseh-mificheskih-kart-07-16'
										),
									],
								])
							).HTML()
						)
					})

					ctx[0].answerCbQuery('Активирована ⭐️ 4', { cache_time: 3 })
	    break;
	  case 5:
					await User.updateOne(
						{ uuid },
						{ 
							$set: { 
								'vipCard.vip5': true, 
							 'vipCard.vip': 5,
							 'deadlines.bonus.term': 4, // Таймер БОНУСА
							 'deadlines.battle.term': 2, // 🎯 Таймер БАТТЛ
							 'deadlines.battleChar.term': 2, // 🧩 Таймер БАТТЛ
							 'deadlines.battleTeamCharacters.term': 2, // 🧩 Таймер PVP Команда
							 'deadlines.getChar.term': 2 // 🧩 Таймер Найма
						},
							$inc: { 
								"resources.recrute": 576, // КАРТЫ
								"resources.crio": 15000 // КРИОНИТЫ
							}
						}
					).then(async () => {
						await ctx[0].editMessageText(
							ctx[0].i18n.t('vip'),
							Extra.markup(
								Markup.inlineKeyboard([
									[
										Markup.callbackButton('⭐️ 1', `vip1_${uuid}`),
										Markup.callbackButton('⭐️ 2', `vip2_${uuid}`),
										Markup.callbackButton('⭐️ 3', `vip3_${uuid}`),
										Markup.callbackButton('⭐️ 4', `vip4_${uuid}`),
										Markup.callbackButton('⭐️ 5', `vip5_${uuid}`),
									],
									[
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `world_${uuid}`),
										Markup.urlButton(
											'📝 Сᴨᴩᴀʙᴋᴀ',
											'https://telegra.ph/Aniversecard-Sila-vseh-mificheskih-kart-07-16'
										),
									],
								])
							).HTML()
						)
					})

					ctx[0].answerCbQuery('Активирована ⭐️ 5', { cache_time: 3 })
	    break
		 default: 
		 	console.log('This component doesn"t not exist.')
		}
	} catch (e) {
		console.error(e)
	}
}

// Троттлинг
let throttleVip = throttle(vip, 1500)

// Actions
bot.action(new RegExp('vip_(.+)'), ctx => throttleVip([ctx, 'главная']))
bot.action(new RegExp('vip1_(.+)'), ctx => throttleVip([ctx, 'vip 1']))
bot.action(new RegExp('vip2_(.+)'), ctx => throttleVip([ctx, 'vip 2']))
bot.action(new RegExp('vip3_(.+)'), ctx => throttleVip([ctx, 'vip 3']))
bot.action(new RegExp('vip4_(.+)'), ctx => throttleVip([ctx, 'vip 4']))
bot.action(new RegExp('vip5_(.+)'), ctx => throttleVip([ctx, 'vip 5']))
bot.action(new RegExp('v_ok_1_(.+)'), ctx => throttleVip([ctx, 1]))
bot.action(new RegExp('v_ok_2_(.+)'), ctx => throttleVip([ctx, 2]))
bot.action(new RegExp('v_ok_3_(.+)'), ctx => throttleVip([ctx, 3]))
bot.action(new RegExp('v_ok_4_(.+)'), ctx => throttleVip([ctx, 4]))
bot.action(new RegExp('v_ok_5_(.+)'), ctx => throttleVip([ctx, 5]))

module.exports = bot
