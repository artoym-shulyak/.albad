const { Composer, Markup, Extra } = require('telegraf')
const fs = require('fs')
const bot = new Composer()
const Clan = require('../../models/clan.model.js')
const User = require('../../models/user.model.js')
const { download } = require('./downloadImage.js')
const throttle = require('../../utils/throttle.js')
const sleep = require('../../utils/sleep.js')

// '🏰 Гильдия'
const clan = async (ctx) => {
	try {
		const uuid = String(ctx[0].from.id) // ID user
  let data

		if (ctx[0].updateType === 'callback_query') {
			data = ctx[0].match[1]
			if (data.indexOf(uuid) === -1) return
		 ctx[0].answerCbQuery('🏰', { cache_time: 3 })
		} 

		switch (ctx[1]) {
		 case 'гильдия':
				await User.findOne({ uuid }).then(async user => {
					if (user == null) return
					if (user.clan.clan === true) {
					if (user.clan.leader === true) {
						await Clan.findOne({ name: user.clan.name }).then(async clan => {
						// Проверка на выполение задание
				 	if (clan.quest.todayCompleted === clan.quest.count || clan.quest.todayCompleted >= clan.quest.count) {
					  await Clan.updateOne({"leader.uuid": uuid }, { 
					  	$set: { "quest.completed": true, "quest.todayCompleted": user.quest.count } 
					  })
				  } 	

							await ctx[0].replyWithPhoto(
								{ source: fs.createReadStream(`./composers/clan/images/${clan.image}`)  },
								{
									caption: ctx[0].i18n.t('cl_info_player', {
										surname: clan.name,
										countEmployees: clan.employees.length,
										glory: clan.glory,
										money: clan.money,
										structure: clan.structure,
										date: clan.updated.toLocaleString('ru-RU'),
										description: clan.description
									}),
									parse_mode: 'HTML',
									...Extra.markup(
										Markup.inlineKeyboard([
											[
												Markup.urlButton(
													'✉️ Гᴧᴀʙᴀ',
													`https://t.me/${clan.leader.username}`
												),
												Markup.callbackButton(
													'👥 Сᴏᴄᴛᴀʙ',
													`employees_${user.clan.name}_${uuid}`
												),
											],
											[
												Markup.urlButton('✉️ Бᴇᴄᴇдᴀ', `${clan.chat}`),
												Markup.callbackButton('📜 Зᴀдᴀниᴇ', `cl_q_${uuid}`)],
											[
												Markup.urlButton(
													'🆘 Кᴏʍᴀнды',
													'https://telegra.ph/Komandy-Gildii-10-29'
												),
												Markup.callbackButton(
													'🪙 Мᴏя ᴧᴀʙᴋᴀ',
													`my_bench_${uuid}`
												)
											],
											[
												Markup.callbackButton(
													'🚪 Рᴀᴄᴨуᴄᴛиᴛь ᴦиᴧьдию',
													`cl_dessolve_${user.clan.name}_${uuid}`
												)
											],
										])
									),
								}
							)
						})
					} else {
						await Clan.findOne({ name: user.clan.name }).then(async clan => {
							await ctx[0].replyWithPhoto(
								{ source: `./composers/clan/images/${clan.image}` },
								{
									caption: ctx[0].i18n.t('cl_info', {
										surname: clan.name,
										countEmployees: clan.employees.length,
										glory: clan.glory,
										date: clan.updated.toLocaleString('ru-RU'),
										description: clan.description
									}),
									parse_mode: 'HTML',
									...Extra.markup(
										Markup.inlineKeyboard([
											[
												Markup.urlButton(
													'✉️ Гᴧᴀʙᴀ',
													`https://t.me/${clan.leader.username}`
												),
												Markup.urlButton('✉️ Беседа', `${clan.chat}`)],
											[
												Markup.callbackButton(
													'👥 Сᴏᴄᴛᴀʙ',
													`employees_${user.clan.name}_${uuid}`
												)
											],
											[
												Markup.callbackButton(
													'🚪 Пᴏᴋинуᴛь ᴦиᴧьдию',
													`cl_leave_${user.clan.name}_${uuid}`
												)
												]
										])
									),
								}
							)
						})
					}
					} else {
						await ctx[0].editMessageText(
							ctx[0].i18n.t('clan'),
							Extra.markup(
								Markup.inlineKeyboard([
									[
										Markup.callbackButton('⬅️ Нᴀɜᴀд', `world_${uuid}`),
										Markup.urlButton(
											'🆘 Кᴏʍᴀнды',
											'https://telegra.ph/Komandy-Gildii-10-29'
										)
									],
								])
							).HTML()
						)
					}
				})
		 	break
		 case 'создание':
				if (!ctx[0].message.caption) return
				const fileId = ctx[0].message.photo.pop().file_id
			 if (ctx[0].message.caption.toLowerCase().indexOf('создать гильдию') === -1) return
			 let surnameClan = ctx[0].message.caption.replace(/создать гильдию /i, '')

				if (surnameClan.length < 2 || surnameClan.length > 50) {
					ctx.replyWithHTML('⚒ Название Гильдии должен содержать: <i>мин. 2 - макс 50 символов</i>.')
					return
				} 

				// Проверка на одинаковое имя
				await Clan.find().then(async clans => {
					await clans.forEach(clan => {
						if (clan.name == surnameClan) {
							ctx[0].reply('🧑‍💻 Эᴛᴏ иʍя Гиᴧьдии ужᴇ ɜᴀняᴛᴏ.')
							throw new Error('Это имя уже занято')
						}
					})
				})

				await User.findOne({ uuid }).then(async user => {
					if (user == null) return
					if (user.clan.clan) return
					if (user.vipCard.vip === 0) return

					await download(
						fileId,
						surnameClan,
						async () =>
							await new Clan({
								name: surnameClan,
								'leader.uuid': user.uuid,
								image: `./${surnameClan}.jpg`,
								employees: user.uuid,
								"leader.username": user.username
							}).save()
					)

				await User.updateOne(
					{ uuid },
					{
						$set: {
							'clan.clan': true,
							'clan.leader': true,
							'clan.name': surnameClan,
						},
					}
				)

					await ctx[0].reply(`⛺️ Сᴏɜдᴀнᴀ ᴦиᴧьдия ${surnameClan}`)
				})
		 	break
		 case 'состав':
				let surnameStructureClan = ctx[0].match[0]
					.replace(/employees_/, '')
					.replace(`_${uuid}`, '')
				let listStructure = ''

				await Clan.findOne({ name: surnameStructureClan }).then(async clan => {
					for (let i = 0; i < clan.employees.length; i++) {
						await User.findOne({ uuid: clan.employees[i] }).then(user => {
							let leader = user.clan.leader ? '➠ 🤴' : ''
							let assistant = user.clan.assistant ? '➠ 🎩' : ''

							listStructure += `${i + 1}.<a href="https://t.me/${user.username}">${
								user.name
							}</a> ${assistant}${leader}\n   <strong>↳</strong>💥 ${
								user.stats.bm
							} | ❤️ ${user.stats.hp}\n`
						})
					}
					await ctx[0].replyWithHTML(ctx[0].i18n.t('cl_employees', { listStructure, clan }), {
						disable_web_page_preview: true,
					})
				})
		 	break
		 case 'инфа гильдии':
				surnameSearchClan = ctx[0].message.text.replace(/инфа гильдии /, '')

				await Clan.findOne({ name: surnameSearchClan }).then(async clan => {
					await ctx[0].replyWithPhoto(
						{ source: fs.createReadStream(`./composers/clan/images/${clan.image}`) },
						{
							caption: ctx[0].i18n.t('cl_info', {
								surname: clan.name,
								countEmployees: clan.employees.length,
								glory: clan.glory,
								date: clan.updated.toLocaleString('ru-RU'),
								description: clan.description
							}),
							parse_mode: 'HTML',
							...Extra.markup(
								Markup.inlineKeyboard([
									[
										Markup.urlButton(
											'✉️ Гᴧᴀʙᴀ',
											`https://t.me/${clan.leader.username}`
										),
										Markup.callbackButton(
											'👥 Сᴏᴄᴛᴀʙ',
											`employees_${surnameSearchClan}_${uuid}`
										),
									],
								])
							),
						}
					)
				})
		 	break
  	case 'добавление':
  		let uuidAddEmp = ctx[0].message.text.toLowerCase().replace(/добавить в лавку/, '').trim()
		  await Clan.findOne({"leader.uuid": uuid})
		  .then(async clan => {
		  	if (!clan.employees.includes(uuidAddEmp)) return // Провека есть ли такой игрок в Гильдии
		  	if (clan.benchEmployees.includes(uuidAddEmp)) return // Провека есть ли такой игрок в Лавке Гильдии 
		  	await Clan.updateOne({"leader.uuid": uuid}, { $push: { "benchEmployees": +uuidAddEmp } })
		   .then(async () => {
		   	await ctx[0].replyWithHTML('⛺️ Дᴏбᴀʙᴧᴇн ʙ Лᴀʙᴋу.')
		   	await sleep(10000)
		   	await ctx[0].telegram.sendMessage(uuidAddEmp, '⛺️ Тᴇбя дᴏбᴀʙиᴧи ʙ Лᴀʙᴋу Гиᴧьдии!')
		   })
		  })
 		 break
  	case 'исключение':
    uuidRemoveEmp = ctx[0].message.text.toLowerCase().replace(/исключить из лавки/, '').trim()
		  await Clan.findOne({"leader.uuid": uuid})
		  .then(async clan => {
		  	if (!clan.employees.includes(uuidRemoveEmp)) return // Провека есть ли такой игрок в Гильдии
		  	if (!clan.benchEmployees.includes(uuidRemoveEmp)) return // Провека есть ли такой игрок в Лавке Гильдии 
		  	await Clan.updateOne({"leader.uuid": uuid}, { $pull: { "benchEmployees": +uuidRemoveEmp } })
		   .then(async () => {
		   	await ctx[0].replyWithHTML('⛺️ Иᴄᴧючᴇн иɜ Лᴀʙᴋи.')
		   	await sleep(10000)
		   	await ctx[0].telegram.sendMessage(uuidRemoveEmp, '⛺️ Тᴇбя иᴄᴋᴧючиᴧи иɜ Лᴀʙᴋи Гиᴧьдии!')
		   })
		  })
		  break
		 case 'моя лавка':
				let listBench = ''
		  await Clan.findOne({"leader.uuid":uuid})
		  .then(async clan => {
		  	for (let i = 0; i < clan.benchEmployees.length; i++) {
		  		await User.findOne({"uuid":clan.benchEmployees[i]})
		  		.then(async user => {
		  			listBench += `${i+1}. <a href="https://t.me/${user.username}">${user.name}</a>\n`
		  		})
		  	}
		  	await ctx[0].replyWithHTML(ctx[0].i18n.t('Моя_Лавка_Ги', {listBench}), {
		  		disable_web_page_preview: true,
		  	})
		  })
				break
			case 'монеты':
				data = ctx[0].match[0] // Information btn
				if (data.indexOf(uuid) === -1) return // Проверка чужокого нажатия на кнопку
				await ctx[0].editMessageText(
					ctx[0].i18n.t('cl_shop_money'),
					Extra.markup(
						Markup.inlineKeyboard([
							[Markup.callbackButton('💰 Пᴏᴨᴏᴧниᴛь', `сl_donat_${uuid}`)],
							[Markup.callbackButton('⬅️ Нᴀɜᴀд', `shop_${uuid}`)],
						])
					).HTML()
				)
				ctx[0].answerCbQuery('🪙 Мᴏнᴇᴛы ᴦиᴧьдии', { cache_time: 3 })
			 break
			case 'приглашение':
				uuidInviteEmp = ctx[0].message.text
					.replace(/пригласить в гильдию /i, '')
					.trim()
				await User.findOne({ uuid }).then(async user => {
					// Если игрок является Лидером или Замом, то идем дальше..
					if (user.clan.leader === true || user.clan.assistant === true) {
						await Clan.findOne({ name: user.clan.name }).then(async clan => {
							if (clan.employees.includes(uuidInviteEmp)) return // Если такого игрока есть в списке, то останавливаем
							if (clan.employees.length === clan.structure) return

							await ctx[0].reply('⛺️ Оᴛᴨᴩᴀʙᴧᴇнᴏ ᴨᴩиᴦᴧᴀɯᴇниᴇ.')
						 await sleep(10000)
							await ctx[0].telegram.sendMessage(
								uuidInviteEmp,
								`⛺️ Тᴇбя ᴨᴩиᴦᴧᴀɯᴀюᴛ ʙ ᴦиᴧьдию ${clan.name}.`,
								{
									...Extra.markup(
										Markup.inlineKeyboard([
											[
												Markup.callbackButton(
													'✅ Пᴩиняᴛь',
													`cl_success_${clan.name}_${uuidInviteEmp}`
												),
												Markup.callbackButton(
													'❌ Оᴛᴋᴧᴏниᴛь',
													`cl_error_${clan.name}_${uuidInviteEmp}`
												),
											],
										])
									).HTML(),
								}
							)
						})
					}
				})
			case 'исключение':
				playerUuid = ctx[0].message.text
					.replace(/исключить из гильдии /i, '')
					.trim()

				await User.findOne({ uuid }).then(async user => {
					// Если игрок является Лидером или Замом, то идем дальше...
					if (user.clan.leader === true || user.clan.assistant === true) {
						await Clan.findOne({ name: user.clan.name }).then(async clan => {
							if (!clan.employees.includes(playerUuid)) return // Если такого игрока нету в списке, то останавливаем

							// Если игрок явялется замом, то не сможет исключить других замов или лидера
							if (user.clan.assistant === true) {
								await User.findOne({ uuid: playerUuid }).then(async user => {
									if (user.clan.leader === true || user.clan.assistant === true) {
										throw new Error('Он заместитель или лидер Гильдии')
									}
								})
							}

							await Clan.updateOne(
								{ name: clan.name },
								{ $pull: { employees: playerUuid } }
							).then(async () => {
								await User.updateOne(
									{ uuid: playerUuid },
									{
										$set: {
											'clan.clan': false,
											'clan.name': 'null',
											'clan.assistant': false,
										},
									}
								).then(async () => {
									await ctx[0].reply('⛺️ Иᴄᴋᴧючᴇн иɜ ᴦиᴧьдии.')
									await sleep(10000)
									await ctx[0].telegram.sendMessage(
										playerUuid,
										`⛺️ Тᴇбя иᴄᴋᴧючиᴧи иɜ ᴦиᴧьдии ${clan.name}.`
									)
								})
							})
						})
					}
				})
			case 'понижение':
				uuidDownEmp = ctx[0].message.text.replace(/понизить гильдия /i, '').trim()

				await User.findOne({ uuid }).then(async user => {
					// Если игрок является Лидером, то идем дальше...
					if (user.clan.leader === true) {
						await Clan.findOne({ name: user.clan.name }).then(async clan => {
							if (!clan.employees.includes(uuidDownEmp)) return // Если такого игрока нету в списке, то останавливаем

							await User.findOne({ uuid: uuidDownEmp }).then(async player => {
								if (player.clan.name !== clan.name) return // Если имена Гильдии не равны, останавливаем.
								if (player.clan.assistant === false) return // Если он не заместители, то останавливаем

								await User.updateOne(
									{ uuid: uuidDownEmp },
									{ $set: { 'clan.assistant': false } }
								).then(async () => {
									await ctx[0].reply('⛺️ Пᴏнижᴇн дᴏ ɜᴀʍᴇᴄᴛиᴛᴇᴧя.')
									await sleep(5000)
									await ctx[0].telegram.sendMessage(
										uuidDownEmp,
										'⛺️ Тᴇбя ᴨᴏниɜиᴧи дᴏ ɜᴀʍᴇᴄᴛиᴛᴇᴧя.'
									)
								})
							})
						})
					}
				})
				break
			case 'повышение':
				uuidUpEmp = ctx[0].message.text.replace(/повысить гильдия /i, '').trim()

				await User.findOne({ uuid }).then(async user => {
					// Если игрок является Лидером, то идем дальше...
					if (user.clan.leader === true) {
						await Clan.findOne({ name: user.clan.name }).then(async clan => {
							if (!clan.employees.includes(uuidUpEmp)) return // Если такого игрока нету в списке, то останавливаем

							await User.findOne({ uuid: uuidUpEmp }).then(async player => {
								if (player.clan.name !== clan.name) return // Если имена Гильдии не равны, останавливаем.

								await User.updateOne(
									{ uuid: uuidUpEmp },
									{ $set: { 'clan.assistant': true } }
								).then(async () => {
									await ctx[0].reply('⛺️ Пᴏʙыɯᴇн дᴏ ɜᴀʍᴇᴄᴛиᴛᴇᴧя.')
									await sleep(5000)
									await ctx[0].telegram.sendMessage(
										uuidUpEmp,
										'⛺️ Тᴇбя ᴨᴏʙыᴄиᴧи дᴏ ɜᴀʍᴇᴄᴛиᴛᴇᴧя.'
									)
								})
							})
						})
					}
				})
				break
			case 'владение':
				uuidLeaderEmp = ctx[0].message.text.replace(/передать главу /i, '').trim()

				await User.findOne({ uuid }).then(async user => {
					// Если игрок является Лидером, то идем дальше...
					if (user.clan.leader === true) {
						await Clan.findOne({ name: user.clan.name }).then(async clan => {
							if (!clan.employees.includes(uuidLeaderEmp)) return // Если такого игрока нету в списке, то останавливаем

							await User.findOne({ uuid: uuidLeaderEmp }).then(async player => {
								if (player.clan.name !== clan.name) return // Если имена Гильдии не равны, останавливаем.

								await User.bulkWrite([
									{
										updateOne: {
											filter: { uuid },
											update: {
												$set: { 'clan.leader': false, 'clan.assistant': false },
											},
										},
									},
									{
										updateOne: {
											filter: { uuid: uuidLeaderEmp },
											update: {
												$set: { 'clan.leader': true, 'clan.assistant': false },
											},
										},
									},
								])

								await Clan.updateOne(
									{ name: clan.name },
									{ $set: { 'leader.uuid': player.uuid, 'leader.username': player.username } }
								).then(async () => {
									await ctx[0].reply(`⛺️ Пᴇᴩᴇдᴀᴧи ᴦᴧᴀʙу ${player.name}.`)
									await sleep(5000)
									await ctx[0].telegram.sendMessage(
										uuidLeaderEmp,
										`⛺️ Тᴇбя ᴨᴏʙыᴄиᴧи дᴏ Гᴧᴀʙы Гиᴧьдии, ᴛᴇᴨᴇᴩь ᴛы ʙᴧᴀдᴇᴇɯь ᴦиᴧьдии "${clan.name}".`
									)
								})
							})
						})
					}
				})
				break
			case 'покинуть':
				nameLeaveClan = data.replace('cl_leave_', '').replace(`_${uuid}`, '')

				await ctx[0].deleteMessage()
				await sleep(3000)

				await User.updateOne(
					{ uuid },
					{
						$set: {
							'clan.clan': false,
							'clan.leader': false,
							'clan.assistant': false,
							'clan.name': 'null',
						},
					}
				).then(async () => {
					await Clan.updateOne({ name: nameLeaveClan }, { $pull: { employees: uuid } }).then(
						async () => {
							await ctx[0].reply('🚪 Ты ᴨᴏᴋинуᴧ ᴦиᴧьдию.')
						}
					)
				})

				await sleep(10000)

				await Clan.findOne({ name: nameLeaveClan }).then(async clan => {
					await ctx[0].telegram.sendMessage(
						clan.leader.uuid,
						`👤🏰 Один иɜ ᴛʙᴏих учᴀᴄᴛниᴋᴏʙ ᴨᴏᴋинуᴧ ᴦиᴧьдию.`
					)
				})
				break
			case 'распустить':
				nameRemoveClan = await data.replace('cl_dessolve_', '').replace(`_${uuid}`, '')

				await ctx[0].deleteMessage()

				await sleep(3000)

				await User.updateMany(
					{ 'clan.name': nameRemoveClan },
					{
						$set: {
							'clan.clan': false,
							'clan.leader': false,
							'clan.assistant': false,
							'clan.name': 'null',
						},
					}
				).then(async () => {
					await Clan.deleteOne({ name: nameRemoveClan }).then(async res => {
						await ctx[0].reply('🚪 Ты ᴩᴀᴄᴨуᴄᴛиᴧ ᴦиᴧьдию.')
					})
				})
				break
			case 'описание':
				const descr = ctx[0].message.text.replace(/сменить описание /i, '')

				if (descr.length < 1 || descr.length > 255) {
					await ctx[0].replyWithHTML('⚒ Оᴨиᴄᴀниᴇ дᴏᴧжнᴏ ᴄᴏдᴇᴩжᴀᴛь: <i>ʍин. 2 - ʍᴀᴋᴄ 255 ᴄиʍʙᴏᴧᴏʙ</i>.')
					return
				}

				await Clan.updateOne({"leader.uuid":uuid}, {$set: {"description": descr}})
				.then(async () => {
					await User.findOne({uuid}).then(async user => {
						if (user.clan.leader === false) return
						await ctx[0].reply('💭 Оᴨиᴄᴀниᴇ ʙ Гиᴧьдии иɜʍᴇнᴇнᴏ.')
					})
					
				})
				break
			case 'беседа':
				const linkChat = ctx.message.text.replace(/сменить беседу /i, '').trim() // TEXT user
				if (!linkChat.includes('https://t.me/+')) return

				await Clan.updateOne({"leader.uuid":uuid}, {$set: {"chat": linkChat}})
			 .then(async () => {
				await ctx.reply('✉️ Уᴄᴨᴇɯнᴏ ᴄʍᴇниᴧи бᴇᴄᴇду ✅')
			 })
			 break
			case 'принять':
				const success = data.replace('cl_success_', '').replace(`_${uuid}`, '')

			 ctx[0].deleteMessage()

			 await Clan.findOne({ name: success }).then(async clan => {
			 	if (clan.employees.includes(uuid)) return
			 })

				await Clan.updateOne({ name: success }, { $push: { employees: uuid } }).then(
					async () => {
						await User.updateOne(
							{ uuid },
							{ $set: { 'clan.clan': true, 'clan.name': success } }
						)
					}
				)
				break
			case 'отклонить':
				ctx[0].deleteMessage()
				break
			case 'задание':
				await Clan.findOne({"leader.uuid":uuid})
				.then(async clan => {

					if (clan.quest.stateReward) {
						await ctx[0].replyWithHTML(
							ctx[0].i18n.t('clan_quest', {
								todayCompleted: await clan.quest.todayCompleted, // Сегодняшний прогресс приглашенных рефералов
								count: await clan.quest.count, // Для выполенения задачи нужно...
								reward: await clan.quest.reward, // Награда
								completed: '✅', // Состояние задачи
								stateReward: '✅', // Состояние, забрал ли игрок свою награду,
							})
						)
						return
					}

					if (clan.quest.completed) {
						await ctx[0].replyWithHTML(
							ctx[0].i18n.t('clan_quest', {
								todayCompleted: await clan.quest.todayCompleted, // Сегодняшний прогресс приглашенных рефералов
								count: await clan.quest.count, // Для выполенения задачи нужно...
								reward: await clan.quest.reward, // Награда
								completed: (await clan.quest.completed) ? '✅' : '❌', // Состояние задачи
								stateReward: '❌', // Состояние, забрал ли игрок свою награду,
							}),
							Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('🎁 Забрать', `cl_award_${uuid}`)])).HTML()
						)
					} else {
						await ctx[0].replyWithHTML(
							ctx[0].i18n.t('clan_quest', {
								todayCompleted: await clan.quest.todayCompleted, // Сегодняшний прогресс приглашенных рефералов
								count: await clan.quest.count, // Для выполенения задачи нужно...
								reward: await clan.quest.reward, // Награда
								completed: '❌', // Состояние задачи
								stateReward: '❌', // Состояние, забрал ли игрок свою награду,
							})
						)
					}

				})
				break
			case 'награда':
				await Clan.findOne({"leader.uuid":uuid})
				.then(async clan => {
					if (uuid !== clan.leader.uuid) return
					if (clan.quest.stateReward) return
					if (clan.quest.completed === true) {
						await Clan.updateOne({"leader.uuid":uuid}, { $set: { 'quest.stateReward': true }})
						await User.updateMany({"clan.name": clan.name}, {$inc: { 'resources.recrute': clan.quest.reward}})
						await ctx.editMessageText()
						await sleep(5000)
						await ctx[0].reply('✅ Вᴄᴇ ᴛʙᴏи ᴄᴏᴋᴧᴀнᴏʙцы ʙᴋᴧючᴀя ᴛᴇбя ᴨᴏᴧучиᴧи нᴀᴦᴩᴀду ɜᴀ 🏰 Зᴀдᴀниᴇ.')
					}
				})
				break
		 default:
		 	console.log('This command or text does not exist. (fn: clan)')
		}
	} catch (e) {
		console.error(e)
	}
}

// ТРОТТЛИНГ ----->
let throttleClan = throttle(clan, 1500)

// '🏰 Гильдия'
// 'Messages'
bot.hears([new RegExp('моя гильдия', 'i'), new RegExp('моя ги', 'i')], ctx => throttleClan([ctx, 'гильдия']))
bot.hears(/\добавить в лавку(.+)/i, ctx => throttleClan([ctx, 'добавление']))
bot.hears(/\исключить из лавки(.+)/i, ctx => throttleClan([ctx, 'исключение']))
bot.hears(new RegExp('моя лавка', 'i'), ctx => throttleClan([ctx, 'моя лавка']))
bot.hears(new RegExp('пригласить в гильдию', 'i'), ctx => throttleClan([ctx, 'приглашение']))
bot.hears(new RegExp('исключить из гильдии', 'i'), ctx => throttleClan([ctx, 'исключение']))
bot.hears(new RegExp('повысить гильдия', 'i'), ctx => throttleClan([ctx, 'повышение']))
bot.hears(new RegExp('понизить гильдия', 'i'), ctx => throttleClan([ctx, 'понижение']))
bot.hears(new RegExp('передать главу', 'i'), ctx => throttleClan([ctx, 'владение']))
bot.hears(new RegExp('инфа гильдии', 'i'), ctx => throttleClan([ctx, 'инфа гильдии']))
bot.hears(new RegExp('сменить описание', 'i'), ctx => throttleClan([ctx, 'описание']))
bot.hears(new RegExp('сменить беседу', 'i'), ctx => throttleClan([ctx, 'беседа']))
// Actions
bot.action(new RegExp('clan_(.+)'), ctx => throttleClan([ctx, 'гильдия']))
bot.action(new RegExp('employees_(.+)'), ctx => throttleClan([ctx, 'состав']))
bot.action(new RegExp('clMoney_(.+)'), ctx => throttleClan([ctx, 'монеты']))
bot.action(new RegExp('my_bench_(.+)'), ctx => throttleClan([ctx, 'моя лавка']))
bot.action(new RegExp('cl_leave_(.+)'), ctx => throttleClan([ctx, 'покинуть']))
bot.action(new RegExp('cl_dessolve_(.+)'), ctx => throttleClan([ctx, 'распустить']))
bot.on('photo', ctx => throttleClan([ctx, 'создание']))
bot.action(new RegExp('cl_success_(.+)'), ctx => throttleClan([ctx, 'принять']))
bot.action(new RegExp('cl_error_(.+)'), ctx => throttleClan([ctx, 'отклонить']))
bot.action(new RegExp('cl_q_(.+)'), ctx => throttleClan([ctx, 'задание']))
bot.action(new RegExp('cl_award_(.+)'), ctx => throttleClan([ctx, 'награда']))

module.exports = bot
