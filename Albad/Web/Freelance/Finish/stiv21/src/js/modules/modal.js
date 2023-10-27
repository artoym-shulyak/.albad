export const modal = (open, modalContent) => {
	const btn = document.querySelector(open)
	const modal = document.querySelector(modalContent)
	const close = modal.querySelector('[data-close]')

	if (!btn || !modal || !close) {
		return
	}

	btn.addEventListener('click', e => {
		e.preventDefault()
		modal.classList.add('_active')
	})

	close.addEventListener('click', e => {
		e.preventDefault()
		modal.classList.remove('_active')
	})

	modal.addEventListener('click', e => {
		if (e.target && e.target === modal) {
			modal.classList.remove('_active')
		}
	})
}
