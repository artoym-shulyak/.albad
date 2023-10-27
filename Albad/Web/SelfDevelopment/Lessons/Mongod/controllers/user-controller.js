const User = require('../models/user')

// Fatal error
const handleError = (res, error) => {
	res.status(500).json({ error })
}

// Get all the "Users"
const getUsers = (req, res) => {
	User
		.find()
		.sort({ age: -1 })
		.then((users) => {
			res
				.status(200)
				.json(users)
		})
		.catch((err) => handleError(res, err))
}

// Delete the "User"
const getUser = (req, res) => {
	User
		.findByIdAndDelete(req.params.id)
		.then(result => {
			res.status(200).json(result)
		})
		.catch((err) => handleError(res, err))
}

// Delete the "User"
const deleteUser = (req, res) => {
	User
		.findByIdAndDelete(req.params.id)
		.then(result => {
			res.status(200).json(result)
		})
		.catch((err) => handleError(res, err))
}

// Create 'User'
const createUser = (req, res) => {
	const user = new User(req.body)

	user
		.save()
		.then(result => {
			res.status(200).json(result)
		})
		.catch((err) => handleError(res, err))
}

// Update 'User'
const updateUser = (req, res) => {
	User
		.findByIdAndUpdate(req.params.id, req.body)
		.then(user => {
			res.status(200).json(user)
		})
		.catch((err) => handleError(res, err))
}


module.exports = {
	getUsers,
	getUser,
	deleteUser,
	createUser,
	updateUser
}