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
