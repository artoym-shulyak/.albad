import * as flsFunctions from './modules/functions.js'
import * as modal from './modules/modal.js'

try {
	modal.modalItem('#open-filter', '#modal-filter', 'filter')
} catch (e) {}
try {
	modal.modalItem('#open-sort', '#modal-sort', 'sort')
} catch (e) {}

flsFunctions.isWebp()

function pageModal() {
	const modal = document.querySelector('#data-base-modal')
	const open = document.querySelectorAll('.data-base')
	const close = modal.querySelector('button')

	open.forEach(btn => {
		btn.addEventListener('click', () => {
			modal.style.display = 'block'
		})
	})

	close.addEventListener('click', () => {
		modal.style.display = 'none'
	})

	modal.addEventListener('click', e => {
		const target = e.target
		if (target === modal) {
			modal.style.display = 'none'
		}
	})
}
pageModal()
