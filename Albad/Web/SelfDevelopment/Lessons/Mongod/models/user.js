const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	favColors: [String]
}, {
	versionKey: false
})

const User = mongoose.model('User', userSchema)

module.exports = User