const express = require('express')
const { getUsers, getUser, deleteUser, createUser, updateUser } = require('../controllers/user-controller')

const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.delete('/users/:id', deleteUser)
router.post('/users', createUser)
router.patch('/users/:id', updateUser)

module.exports = router