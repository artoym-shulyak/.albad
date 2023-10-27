// Media query for all adaptation
const media_query = {
	mq_less_991: window.matchMedia('(max-width: 991.98px)').matches,
	mq_more_991: window.matchMedia('(min-width: 991.98px)').matches,
	mq_less_1079: window.matchMedia('(max-width: 1079.98px)').matches,
	mq_more_1079: window.matchMedia('(min-width: 1079.98px)').matches,
}

// Main menu for header
const menu = (btn, menu) => {
	const open = document.querySelector(btn)
	const modal = document.querySelector(menu)
	const body = document.querySelector('body')

	if (!open || !modal) {
		return
	}

	open.addEventListener('click', () => {
		modal.classList.toggle('_active')
		body.classList.toggle('lock')
	})

	document.addEventListener('click', e => {
		if (
			e.target.classList.contains('header__menu') ||
			e.target.classList.contains('header__burger') ||
			e.target.classList.contains('active') ||
			e.target.closest('.header__more-links a')
		) {
		} else {
			modal.classList.remove('_active')
			body.classList.remove('lock')
		}
	})
}

// Clicked open more contents
const moreContent = (btn, content) => {
	const wrapper = document.querySelector(content)
	const open = document.querySelector(btn)

	if (!open || !wrapper) {
		return
	}

	open.addEventListener('click', e => {
		e.preventDefault()
		wrapper.classList.add('active')
		open.remove()
	})
}
// Sub-menu list
const subMenu = () => {
	const items = document.querySelectorAll('.header__more-links a')

	const remCls = () => items.forEach(item => item.classList.remove('active'))

	items.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			if (media_query.mq_less_1079) {
				e.target.classList.toggle('active')
				console.log(e.target)
			} else {
				remCls()
				console.log('2')
				e.target.classList.add('active')
			}
		})
		if (media_query.mq_more_1079) {
			document.addEventListener('click', e => {
				!e.target.classList.contains('active') ? remCls() : null
			})
		}
	})

	document.addEventListener('scroll', remCls)
}

menu('#burger', '#menu')
subMenu()
moreContent('.thank__more', '.thank__items')
