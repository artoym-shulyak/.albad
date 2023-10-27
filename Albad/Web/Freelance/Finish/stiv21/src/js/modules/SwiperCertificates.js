export const swiperCertificates = Swiper => {
	try {
		new Swiper('.certificates__swiper .swiper', {
			loop: true,
			allowTouchMove: true,
			slideToClickedSlide: true,
			speed: 900,
			slidesPerView: 3,
			spaceBetween: 40,
			// initialSlide: 1,
			centeredSlides: true,

			navigation: {
				nextEl: '.certificates__next',
				prevEl: '.certificates__prev',
			},
			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 1,
				},
				991.98: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				1199.98: {
					spaceBetween: 40,
					slidesPerView: 3,
				},
			},
		})
	} catch (err) {
		console.log(err)
	}
}

export const swiperClients = Swiper => {
	try {
		new Swiper('.client__swiper .swiper', {
			loop: false,
			allowTouchMove: true,
			slideToClickedSlide: true,
			speed: 900,
			slidesPerView: 'auto',
			spaceBetween: 40,
			mousewheel: {
				eventsTarget: '.client__swiper',
			},
		})
	} catch (err) {
		console.log(err)
	}
}
