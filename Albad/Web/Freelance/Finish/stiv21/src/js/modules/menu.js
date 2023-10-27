export const menu = (btn, menu) => {
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
