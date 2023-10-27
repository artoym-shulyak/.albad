const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (requset, response) => {
	response.render('index')
})

app.get('/about', (requset, response) => {
	response.render('about')
})

app.post('/check-user', (requset, response) => {
	let username = requset.body.username
	if (username == '') {
		return response.redirect('/')
	} else {
		return response.redirect('/user/' + username)
	}
})

app.get('/user/:username', (requset, response) => {
	let data = {
		username: requset.params.username,
		hobbies: ['footbal', 'Skate', 'Programming'],
	}
	response.render('user', data)
})

app.listen(3000, () => {
	console.log('Server started!!!')
})
