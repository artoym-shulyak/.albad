const brendSwiper = new Swiper('.brend__swiper', {
	slidesPerView: 4,
	loop: false,
	speed: 500,
	spaceBetween: 20,
	pagination: {
		el: '.brend__pagination',
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		374.98: {
			slidesPerView: 2,
		},
		767.98: {
			slidesPerView: 3,
		},
		1139.98: {
			slidesPerView: 3,
		},
		1240.98: {
			slidesPerView: 4,
		},
	},
})

const clothesSwiper = new Swiper('.clothes__swiper', {
	slidesPerView: 'auto',
	loop: false,
	allowTouchMove: true,
	speed: 500,
	mousewheel: {
		eventsTarget: '.clothes__swiper',
	},

	breakpoints: {
		320: {
			spaceBetween: 20,
		},
		576.98: {
			spaceBetween: 30,
		},
	},
})

const headSwiperCurrent = new Swiper('.current__swiper', {
	loop: false,
	speed: 800,
	slidesPerView: 1,

	pagination: {
		el: '.current__pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return (
				"<span class='" +
				currentClass +
				"'></span>" +
				"<span class='current__or'>/</span>" +
				"<span class='" +
				totalClass +
				"'></span>"
			)
		},
	},

	navigation: {
		nextEl: '.current__next',
		prevEl: '.current__prev',
	},

	breakpoints: {
		320: {
			allowTouchMove: false,
		},
		991.98: {
			allowTouchMove: true,
		},
	},
})

const discountSwiper = new Swiper('.discount__swiper', {
	slidesPerView: 'auto',
	loop: false,
	speed: 800,
	spaceBetween: 30,
	allowTouchMove: true,
	pagination: {
		el: '.discount .products__pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.products__next',
		prevEl: '.products__prev',
	},
	breakpoints: {
		320: {
			spaceBetween: 20,
		},
		576.98: {
			spaceBetween: 30,
		},
	},
})

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp'
		document.documentElement.classList.add(className)
	})
}
isWebp()

const headSwiper = new Swiper('.head__swiper', {
	loop: false,
	speed: 800,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.head__next',
		prevEl: '.head__prev',
	},

	breakpoints: {
		576.98: {
			pagination: {
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return (
						"<span class='" +
						currentClass +
						"'></span>" +
						"<span class='head__or'>/</span>" +
						"<span class='" +
						totalClass +
						"'></span>"
					)
				},
			},
			slidesPerView: 1,
		},
	},
})

const tabs = (
	headerSelector,
	tabSelector,
	contentSelector,
	activeClass,
	display = 'block'
) => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector)

	document.body.addEventListener('scroll', () => {
		hideTabContent()
	})

	function showTabContent(i = 0) {
		tab[i].classList.toggle(activeClass)
		content[i].classList.toggle(activeClass)
	}

	function hideTabContent() {
		tab.forEach(item => {
			item.classList.remove(activeClass)
		})
		content.forEach(item => {
			item.classList.remove(activeClass)
		})
	}

	hideTabContent()
	// showTabContent();

	header.addEventListener('click', e => {
		const target = e.target

		if (!target.classList.contains('active')) {
			hideTabContent()
		} else {
		}
		if (
			target &&
			(target.classList.contains(tabSelector.replace(/\./, '')) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
		) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					//
					showTabContent(i)
				}
			})
		}
	})
}

const tabsShow = (
	headerSelector,
	tabSelector,
	contentSelector,
	activeClass,
	display = 'block'
) => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector)

	function showTabContent(i = 0) {
		tab[i].classList.toggle(activeClass)
		content[i].classList.toggle(activeClass)
	}

	function hideTabContent() {
		tab.forEach(item => {
			item.classList.remove(activeClass)
		})
		content.forEach(item => {
			item.classList.remove(activeClass)
		})
	}

	hideTabContent()
	showTabContent()

	header.addEventListener('click', e => {
		const target = e.target
		if (
			target &&
			(target.classList.contains(tabSelector.replace(/\./, '')) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
		) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})
}

try {
	tabs('.header', '.header__li', '.header__wraps', 'active')
} catch (e) {}
try {
	tabsShow('.card', '.card__image', '.card__body-content', 'active')
} catch (e) {}

try {
	tabs('.menu', '.menu__li', '.menu__content', 'active')
} catch (e) {}

const modalBurger = (open, modalWindow) => {
	const btnOpen = document.querySelector(open)
	const modal = document.querySelector(modalWindow)
	const btnClose = modal.querySelector('[data-back]')

	btnOpen.addEventListener('click', () => {
		modal.classList.add('active')
	})

	btnClose.addEventListener('click', () => {
		modal.classList.remove('active')
	})

	modal.addEventListener('click', e => {
		const target = e.target
		if (target && target === modal) {
			modal.classList.remove('active')
		}
	})
}
try {
	modalBurger('#burger', '#modal-menu')
} catch (e) {}
try {
	modalBurger('#btn-search', '#modal-menu')
} catch (e) {}

const menuSearch = () => {
	const elemMain = document.querySelector('#main')
	const elemMore = document.querySelector('#more')
	const modal = document.querySelector('#modal-menu')
	const btnClose = modal.querySelector('[data-back]')
	const btnBacking = modal.querySelector('[data-backing]')

	btnBacking.style.display = 'none'

	console.log(btnClose)

	const inputSearch = document.querySelector('#search-mob')

	inputSearch.addEventListener('input', e => {
		const target = e.target.value
		elemMore.classList.add('active')
		btnClose.style.display = 'none'
		btnBacking.style.display = 'flex'
		
		if (target.length === 0) {
			console.log('leave')
			btnClose.style.display = 'flex'
			btnBacking.style.display = 'none'
			elemMore.classList.remove('active')
		}
	})

	modal.addEventListener('click', e => {
		const target = e.target
		if (target && target === modal) {
			elemMore.classList.remove('active')
		}
	})

	btnBacking.addEventListener('click', () => {
		btnClose.style.display = 'flex'
		btnBacking.style.display = 'none'
		elemMore.classList.remove('active')
	})
}
try {
	menuSearch()
} catch (e) {}

const modal = (open, modalWindow) => {
	const btnOpen = document.querySelector(open)
	const modal = document.querySelector(modalWindow)
	const btnClose = modal.querySelector('[data-close]')

	btnOpen.addEventListener('click', () => {
		modal.classList.add('active')
	})

	btnClose.addEventListener('click', () => {
		modal.classList.remove('active')
	})

	modal.addEventListener('click', e => {
		const target = e.target
		if (target && target === modal) {
			modal.classList.remove('active')
		}
	})
}

try {
	modal('#btn-sign', '#modal-sign')
} catch (e) {}
try {
	modal('#btn-arrange', '#modal-arrange')
} catch (e) {}
try {
	modal('#btn-register', '#modal-register')
} catch (e) {}
try {
	modal('#btn-save', '#modal-save')
} catch (e) {}

function modalItem(open, modalWindow, surname) {
	const btnOpen = document.querySelector(open)
	const modal = document.querySelector(modalWindow)
	const btnClose = modal.querySelector('[data-close]')

	btnOpen.addEventListener('click', () => {
		modal.classList.toggle('active')
	})

	btnClose.addEventListener('click', () => {
		modal.classList.remove('active')
	})

	modal.addEventListener('click', e => {
		const target = e.target
		if (target && target === modal) {
			modal.classList.remove('active')
		}
	})

	document.body.addEventListener('scroll', () => {
		modal.classList.remove('active')
	})

	if (surname === 'sort') {
		document.addEventListener('click', e => {
			const target = e.target
			if (!target.closest('.catalog__sort')) {
				modal.classList.remove('active')
			}
		})
	}
}

const newsSwiper = new Swiper('.news__swiper', {
	slidesPerView: 3,
	loop: false,
	speed: 500,
	spaceBetween: 20,
	pagination: {
		el: '.news .swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576.98: {
			slidesPerView: 2,
		},
		767.98: {
			slidesPerView: 3,
		},
	},
})

const operation = items => {
	const elems = document.querySelectorAll(items)

	elems.forEach(elem => {
		elem.addEventListener('click', e => {
			const value = elem.querySelector('[data-count]')
			const btnAdd = elem.querySelector('[data-add]')
			const btnMinus = elem.querySelector('[data-minus]')
			const target = e.target
			if (target && target === btnAdd) {
				value.textContent++
			}
			if (target && target === btnMinus && value.textContent > 0) {
				value.textContent--
			}
		})
	})
}
operation('.card__count')
operation('.basket__count')

const pageIndexMV = () => {
	const body = document.querySelector('.brend__body')
	const head = document.querySelector('.brend__head')
	const prev = document.querySelector('.brend__prev')
	const pl_small = window.matchMedia('(max-width: 991.98px)').matches

	if (pl_small) {
		prev.before(head)
	} else {
		body.prepend(head)
	}
}
try {
	pageIndexMV()
} catch (e) {}

window.addEventListener('resize', () => {
	try {
		pageIndexMV()
	} catch (e) {}
})

const popularSwiper = new Swiper('.popular__swiper', {
	slidesPerView: 'auto',
	loop: false,
	speed: 800,
	spaceBetween: 30,
	allowTouchMove: true,
	pagination: {
		el: '.popular .products__pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.products__next',
		prevEl: '.products__prev',
	},
	breakpoints: {
		320: {
			spaceBetween: 20,
		},
		576.98: {
			spaceBetween: 30,
		},
	},
})

const rangeInput = document.querySelectorAll('.filter__range-input input'),
	priceInput = document.querySelectorAll('.filter__price-input input'),
	range = document.querySelector('.filter__progress')
let priceGap = 1000

priceInput.forEach(input => {
	input.addEventListener('input', e => {
		let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value)

		if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
			if (e.target.className === 'input-min') {
				rangeInput[0].value = minPrice
				range.style.left = (minPrice / rangeInput[0].max) * 100 + '%'
			} else {
				rangeInput[1].value = maxPrice
				range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%'
			}
		}
	})
})

rangeInput.forEach(input => {
	input.addEventListener('input', e => {
		let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value)

		if (maxVal - minVal < priceGap) {
			if (e.target.className === 'range-min') {
				rangeInput[0].value = maxVal - priceGap
			} else {
				rangeInput[1].value = minVal + priceGap
			}
		} else {
			priceInput[0].value = minVal
			priceInput[1].value = maxVal
			range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
			range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
			console.log('asds')
		}
	})
})

// - Функция -  Раскрывающий список
function hundleSelect(boxesSelect, boxSelect) {
	const nameItems = document.querySelectorAll(boxesSelect),
		body = document.querySelector('body')

	nameItems.forEach(item => {
		const select = item,
			selectItem = item.querySelector(boxSelect)

		//	Функционал раскрытия/сворачивания выпадающих списокв
		selectItem.addEventListener('click', e => {
			if (!select.classList.contains('open')) {
				nameItems.forEach(box => {
					box.classList.remove('open')
					box.querySelector(boxSelect).classList.remove('open')
				})
				select.classList.add('open')
				selectItem.classList.add('open')
			} else {
				select.classList.remove('open')
				selectItem.classList.remove('open')
			}
		})

		// Отслеживаем клик по элементам
		select.addEventListener('click', e => {
			const target = e.target
			if (
				target &&
				target.tagName === 'LI' &&
				!target.classList.contains('active')
			) {
				const value = target.querySelector('span:first-child').innerText
				try {
					select.querySelector('li.active').classList.remove('active')
				} catch (e) {}
				target.classList.add('active')
				selectItem.innerText = value
				select.classList.remove('open')
				selectItem.classList.remove('open')
			}
		})

		body.addEventListener('click', e => {
			const target = e.target
			const targetBody = e.currentTarget
			if (target !== selectItem) {
				select.classList.remove('open')
				selectItem.classList.remove('open')
			} else {
			}
		})
	})
}
// Игнорируем ошибки на других страницах
try {
	hundleSelect('.card__box', '.card__value')
} catch (e) {}

// // - Функция -  Раскрывающий список
// function hundleSelect(boxesSelect, boxSelect) {
// 	const nameItems = document.querySelectorAll(boxesSelect),
// 		body = document.querySelector('body')

// 	nameItems.forEach(item => {
// 		const select = item,
// 			selectItem = item.querySelector(boxSelect)

// 		//	Функционал раскрытия/сворачивания выпадающих списокв
// 		selectItem.addEventListener('click', e => {
// 			if (!select.classList.contains('open')) {
// 				nameItems.forEach(box => {
// 					box.classList.remove('open')
// 					box.querySelector(boxSelect).classList.remove('open')
// 				})
// 				select.classList.add('open')
// 				selectItem.classList.add('open')
// 			} else {
// 				select.classList.remove('open')
// 				selectItem.classList.remove('open')
// 			}
// 		})

// 		// Отслеживаем клик по элементам
// 		select.addEventListener('click', e => {
// 			const target = e.target
// 			if (
// 				target &&
// 				target.tagName === 'LI' &&
// 				!target.classList.contains('active')
// 			) {
// 				const value = target.querySelector('span:first-child').innerText
// 				try {
// 					select.querySelector('li.active').classList.remove('active')
// 				} catch (e) {}
// 				target.classList.add('active')
// 				selectItem.innerText = value
// 				select.classList.remove('open')
// 				selectItem.classList.remove('open')
// 			}
// 		})

// 		body.addEventListener('click', e => {
// 			const target = e.target
// 			const targetBody = e.currentTarget
// 			if (target !== selectItem) {
// 				select.classList.remove('open')
// 				selectItem.classList.remove('open')
// 			} else {
// 			}
// 		})
// 	})
// }
// // Игнорируем ошибки на других страницах
// try {
// 	hundleSelect('.card__box', '.card__value')
// } catch (e) {}

const sendForm = () => {
	const container = document.querySelector('#subcribe')
	const sucPK = document.querySelector('.subcribe__suc')
	const formBlock = document.querySelector('#subcribeForm')
	const btnSendForm = formBlock.querySelector('button')
	const sendEmail = formBlock.querySelector('input')
	const success = document.querySelector('#subcribeSuccess')
	const title = document.querySelector('#subcribeTitle')

	const pl_small = window.matchMedia('(max-width: 991.98px)').matches

	const _EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

	btnSendForm.addEventListener('click', e => {
		e.preventDefault()

		if (_EMAIL_REGEXP.test(sendEmail.value)) {
			if (pl_small) {
				formBlock.remove()
				title.classList.add('success')
				success.classList.add('success')
				sendEmail.value = ''
			} else {
				container.remove()
				sucPK.classList.add('show')
			}
		}
	})
}
try {
	sendForm()
} catch (e) {}

const accordeon = (body, head) => {
	const wrapper = document.querySelector(body)
	const headers = document.querySelectorAll(head)

	wrapper.addEventListener('click', e => {
		const target = e.target

		if (target.closest(`${head}.active`)) {
			target.classList.remove('active')
		} else {
			target.classList.add('active')
		}
	})
}

const accordeonAllShow = (body, head) => {
	const wrapper = document.querySelector(body)
	const headers = document.querySelectorAll(head)

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
try {
	accordeon('.user__body', '.user__name')
} catch (e) {}
try {
	accordeon('.shop__body', '.shop__text')
} catch (e) {}
try {
	accordeon('.footer__items', '.footer__name')
} catch (e) {}
try {
	accordeon('.filter__body', '.filter__head')
} catch (e) {}
try {
	accordeon('.card__items', '.card__header')
} catch (e) {}

try {
	accordeonAllShow('.shop__info', '.shop__top')
} catch (e) {}

const images = document.querySelectorAll('.good__img')

images.forEach((item, i) => {
	item.addEventListener('mouseover', () => {
		const dots = item.querySelectorAll('.good__dot')

		dots.forEach(dot => {
			dot.addEventListener('mouseover', e => {
				e.preventDefault()
				dots.forEach(dot => dot.classList.remove('active'))
				const itemImg = e.target
				const img = itemImg.getAttribute('href')
				images[i].querySelector('img').setAttribute('src', img)
				const itemImgParent = e.target.parentElement
				itemImgParent.classList.add('active')
			})
			dot.addEventListener('mouseout', e => {
				const itemImgParent = e.target.parentElement
				const itemImg = e.target
				const img = dots[0].querySelector('div').getAttribute('href')
				images[i].querySelector('img').setAttribute('src', img)
				dots.forEach(dot => dot.classList.remove('active'))
				dots[0].classList.add('active')
			})
		})
	})
})

const swiperAll = (item, items, prev, next, prevSmall, nextSmall) => {
	var swiperCards = new Swiper(items, {
		spaceBetween: 20,
		slidesPerView: 6,
		freeMode: true,
		speed: 800,
		navigation: {
			nextEl: nextSmall,
			prevEl: prevSmall,
		},
		breakpoints: {
			320: {
				slidesPerView: 6,
				spaceBetween: 10,
			},
			767.98: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
			991.98: {
				slidesPerView: 6,
				direction: 'vertical',
				spaceBetween: 20,
			},
		},
	})
	var swiperCard = new Swiper(item, {
		spaceBetween: 10,
		speed: 800,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
		thumbs: {
			swiper: swiperCards,
		},
	})
}
try {
	swiperAll(
		'.card__swiper-card',
		'.card__swiper-cards',
		'.card__swiper-card .card__prev',
		'.card__swiper-card .card__next',
		'.card__prev-small',
		'.card__next-small'
	)
} catch (e) {}

try {
	swiperAll(
		'.card__swiper-card1',
		'.card__swiper-cards1',
		'.card__swiper-card1 .card__prev',
		'.card__swiper-card1 .card__next',
		'.card__prev-small--1',
		'.card__next-small--1'
	)
} catch (e) {}

try {
	swiperAll(
		'.card__swiper-card2',
		'.card__swiper-cards2',
		'.card__swiper-card2 .card__prev',
		'.card__swiper-card2 .card__next',
		'.card__prev-small--2',
		'.card__next-small--2'
	)
} catch (e) {}

const search = () => {
	const openSearch = document.querySelector('#btn-search')
	const search = document.querySelector('#search')
	const inputSearch = search.querySelector('input')
	const blockSearch = document.querySelector('#block-search')
	const closeSearch = search.querySelector('.header__close')

	openSearch.addEventListener('click', () => {
		search.classList.add('show')
	})

	closeSearch.addEventListener('click', () => {
		search.classList.remove('show')
		search.querySelector('input').value = ''
	})

	inputSearch.addEventListener('input', e => {
		blockSearch.style.display = 'block'
	})

	document.body.addEventListener('scroll', () => {
		blockSearch.style.display = 'none'
	})

	document.addEventListener('click', e => {
		const target = e.target
		if (!target.closest('#block-search')) {
			blockSearch.style.display = 'none'
		}
	})
}

search()

try {
	modalItem('#open-filter', '#modal-filter', 'filter')
} catch (e) {}
try {
	modalItem('#open-sort', '#modal-sort', 'sort')
} catch (e) {}
