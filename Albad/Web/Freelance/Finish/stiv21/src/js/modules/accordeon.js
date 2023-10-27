export const accordeon = (body, head) => {
	const wrapper = document.querySelector(body)
	const headers = document.querySelectorAll(head)

	if (!wrapper || !headers) {
		return
	}

	wrapper.addEventListener('click', e => {
		const target = e.target

		if (target.closest(`${head}.active`)) {
			target.classList.remove('active')
		} else {
			headers.forEach(el => {
				el.classList.remove('active')
			})
			target.classList.add('active')
		}
	})
}
