export const moreContent = (btn, content) => {
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
