// Выбрать соответствующий элемент, кнопку
const choiseElement = elems => {
	try {
		const elements = document.querySelectorAll(elems)

		elements.forEach(elem => {
			elem.addEventListener('click', e => {
				elements.forEach(el => el.classList.remove('active'))

				if (e.target.closest(elems)) {
					elem.classList.add('active')
				}
			})
		})
	} catch (e) {
		console.error(e)
	}
}
choiseElement('.profile_li')
choiseElement('.profile__elem')

// ------>

// Редактирование пароля
const editedPassword = (btn, elem) => {
	try {
		const btnEdit = document.querySelector(btn)
		const elemEdited = document.querySelector(elem)
		const btnSave = elemEdited.querySelector('[data-save]')

		btnEdit.addEventListener('click', () => {
			elemEdited.classList.add('active')
			btnEdit.classList.add('edited')
		})

		btnSave.addEventListener('click', () => {
			elemEdited.classList.remove('active')
			btnEdit.classList.remove('edited')
		})
	} catch (e) {
		console.log(e)
	}
}

editedPassword('#edit_pass', '#edited_pass')

// ------>

// Редактирование ника
const editedNick = (btn, elem) => {
	try {
		const btnEdit = document.querySelector(btn)
		const elemEdited = document.querySelector(elem)
		const btnSave = elemEdited.querySelector('[data-save]')
		const btnClose = elemEdited.querySelector('[data-close]')
		const input = elemEdited.querySelector('input')

		input.addEventListener('input', e => {
			const nick = e.target.value
			elemEdited.querySelector('.profile__data').textContent = nick
		})

		btnEdit.addEventListener('click', () => {
			elemEdited.classList.add('active')
			btnClose.classList.add('edited')
		})

		btnSave.addEventListener('click', () => {
			elemEdited.classList.remove('active')
		})

		btnClose.addEventListener('click', () => {
			elemEdited.classList.remove('active')
		})
	} catch (e) {
		console.log(e)
	}
}
editedNick('#edit_nik', '#edited_nik')

// ------>

// Модальное окно
const modal = (open, modalContent) => {
	try {
		const btn = document.querySelector(open)
		const modal = document.querySelector(modalContent)

		if (!btn || !modal) {
			return
		}

		btn.addEventListener('click', e => {
			e.preventDefault()
			modal.classList.add('_active')
		})

		modal.addEventListener('click', e => {
			if (e.target && e.target === modal) {
				modal.classList.remove('_active')
			}
		})
	} catch (e) {
		console.log(e)
	}
}

// ------>

// Проверка email
const EMAIL_REGEXP =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
const NAME_REGEXP = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/
const PASS_REGEXP = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/

const checkInput = (data, ckecking) => {
	try {
		const inputs = document.querySelectorAll(data)

		inputs.forEach(input => {
			input.addEventListener('input', () => {
				if (ckecking.test(input.value)) {
					input.parentElement.querySelector('.modal__success').style.opacity =
						'1'
					input.parentElement.querySelector('.modal__error').style.opacity = '0'
				} else {
					input.parentElement.querySelector('.modal__error').style.opacity = '1'
					input.parentElement.querySelector('.modal__success').style.opacity =
						'0'
				}
			})
		})
	} catch (e) {
		console.log(e)
	}
}
checkInput('.modal__email', EMAIL_REGEXP)
checkInput('.modal__username', NAME_REGEXP)
checkInput('.modal__pass', PASS_REGEXP)

// ------>

// Скрыть / Показать пароль
function show_hide_password(target, pass) {
	try {
		var input = document.getElementById(pass)
		if (input.getAttribute('type') == 'password') {
			target.classList.add('view')
			input.setAttribute('type', 'text')
		} else {
			target.classList.remove('view')
			input.setAttribute('type', 'password')
		}
		return false
	} catch (e) {
		console.log(e)
	}
}
document.querySelectorAll('.modal__view').forEach(elem => {
	elem.addEventListener('click', e =>
		show_hide_password(e.target, 'password-input')
	)
})
document.querySelectorAll('.modal__view').forEach(elem => {
	elem.addEventListener('click', e =>
		show_hide_password(e.target, 'password-confirm')
	)
})

// ------>

// Чат -> Скроли снизу-вверх
try {
	document.getElementById('messages').scrollTop = messages.scrollHeight
} catch (e) {
	console.log(e)
}

// For FRL
const modalPages = (open, modalContent) => {
	try {
		const btn = document.querySelector(open),
			modal = document.querySelector(modalContent),
			close = document.querySelector('[data-close]')

		btn.addEventListener('click', e => {
			e.preventDefault()
			modal.classList.add('_active')
		})

		close.addEventListener('click', e => {
			modal.classList.remove('_active')
		})

		modal.addEventListener('click', e => {
			if (e.target && e.target === modal) {
				modal.classList.remove('_active')
			}
		})
	} catch (e) {
		console.log(e)
	}
}
modalPages('.btn-pages', '.pages')
modal('.btn-sign-in', '#sign-in')
modal('.btn-forgot', '#forgot')
modal('.btn-forgor-two', '#forgor-two')
modal('.btn-reg', '#reg')
modal('.btn-send', '#send')
modal('.create-one', '#create-one')
modal('.create-two', '#create-two')
