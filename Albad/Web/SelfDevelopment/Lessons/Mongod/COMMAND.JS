db.users.insertOne({
	name: 'Dima',
	age: 15,
	birthday: new Date('1096-11-27'),
})

db.users.insertMany([
	{
		name: 'Father',
		age: 45,
		birthday: new Date('1096-11-27'),
	},
	{
		name: 'Sister',
		age: 12,
		birthday: new Date('1096-11-27'),
	},
	{
		name: 'Brother',
		age: 21,
		birthday: new Date('1096-11-27'),
	},
])

db.users.find()

db.users.find({}, { _id: 0 }).limit(2)

db.users.find({}, { _id: 0 }).sort({ age: 1 }) // -1

db.users.find({ age: 23, password: 'asdsada' }, { _id: 0 })

db.users.find({ $or: [{ age: 22 }, { password: 'asdsada' }] }, { _id: 0 })

db.users
	.find({ $or: [{ age: 22 }, { password: 'asdsada' }] }, { _id: 0 })
	.limit(2)
	.sort({ age: 1 })

db.users
	.find({ $or: [{ age: { $lt: 17 } }, { password: 'asdsada' }] }, { _id: 0 })
	.sort({ age: 1 }) // gt / gte / lte / eq === / ne != /

db.users.find({ name: { $in: ['Dima', 'Artoym'] } }, { _id: 0 }) // nin соответствие

db.users.find({ child: { $exists: false } }, { _id: 0 }) // выводим этим обекты, у которых есть обект child

db.users.find({ favColors: { $size: 1 } }, { _id: 0 }) // поиск размер самого масива и так далее
db.users.find({ 'favColors.0': 'Red' }, { _id: 0 }) // вывод конкретного эелмента в масиве и так далее
db.users.find({ favColors: { $elemMatch: { $lte: 1 } } }, { _id: 0 }) // Поиск меньше или ровно значение по масивам

// Update
db.users.updateOne({ age: 22 }, { $set: { age: 16 } })
db.users.updateMany({ age: 16 }, { $set: { course: 122 } })

// Replace
db.users.replaceOne(
	{ age: 45 },
	{ course: false, name: 'user', password: '1111' }
)

// Delete
db.users.deleteOne({ name: 'Mama' })

//
db.users.bulkWrite([
	{
		insertOne: {
			document: { name: 'Violetta', age: 16 },
		},
	},
	{
		deleteOne: {
			filter: { age: 12 },
		},
	},
	{
		updateOne: {
			filter: { name: 'Artoym' },
			update: { $set: { course: 4 } },
		},
	},
	{
		replaceOne: {
			filter: { _id: 2 },
			replacement: { name: 'Kassy' },
		},
	},
])

// iteration ++
db.users.updateOne({ age: 16 }, { $inc: { course: 5 } })

// pull извлекает из массива какие-то данные, другими словами удаляет
db.users.updateOne({ age: 16 }, { $pull: { favColors: 'yellow' } })
// push добавляет в массива какие-то данные, другими словами добавляет
db.users.updateOne({ age: 16 }, { $push: { favColors: 'yellow' } })
db.users.updateOne(
	{ age: 16 },
	{ $push: { favColors: { $each: ['Pink', 'Orange'] } } }
) // добавляет несколько цветов

db.articles.insertMany([
	{
		title: 'Саске учиха родился в деревне',
		anime: 'Naruto',
		BM: 12330,
		HP: 24000,
	},
	{
		title: 'Наруто учиха родился в деревне',
		anime: 'Naruto',
		BM: 130,
		HP: 2400,
	},
	{
		title: 'Сакура учиха родился в деревне',
		anime: 'Naruto',
		BM: 123230,
		HP: 200,
	},
])

// Create index search for text
db.articles.createIndex({ title: 'text', anime: 'text' })
db.articles.find({ $text: { $search: 'Саске' } })

// Подсчитывем количество обьектов по определнному фильтру
db.users.count({ age: 16 }) // countDocuments
db.users.count() // countDocuments

db.users.distinct('age')

// Объеденить данные
db.users.aggregate([
	{ $match: {} },
	{ $group: { _id: '$age', age: { $sum: '$age' } } },
])

// Найти только одно, только objectId
db.users.findOne({ _id: ObjectId('6503b9ab8cbd0dd030ddfda7') })

// Анлогичен поиску по первому уровню вложени
db.users.find({ favColors: 'Red' })
//С точным выбором, строгий поиск
db.users.find({ favColors: ['Green', 'Red', 'Black'] })
// Здесь не важен порядок, который мы указали
db.users.find({ favColors: { $all: ['Red', 'Green', 'Black'] } })

// method slice
db.users.find({}, { $slice: 1 })
