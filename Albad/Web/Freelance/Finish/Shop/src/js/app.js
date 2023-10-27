import * as flsFunctions from "./modules/functions.js";
import headSiwper from "./modules/head-swiper.js";
import clothesSwiper from "./modules/clothes-swiper.js";
import brendSwiper from "./modules/brend-swiper.js";
import popularSwiper from "./modules/popular-swiper.js";
import currentSwiper from "./modules/current-swiper.js";
import discountSwiper from "./modules/discount-swiper.js";
import showDotsImages from "./modules/showDotsImages.js";
import search from "./modules/search.js";
import shopAccordeon from "./modules/shopAccordeon.js";
import headerTabs from "./modules/headerTabs.js";
import newsSwiper from "./modules/newsSwiper.js";
import * as modal from "./modules/modal.js";
import pageIndexMV from "./modules/pageIndexMV.js";
import sendForm from "./modules/sendForm.js";
import priceInput from "./modules/priceRange.js";
import select from "./modules/select.js";
import cardSwiper from "./modules/swiperCard.js";
import menu from "./modules/menu.js";
import operation from "./modules/operation.js";
import hundleSelect from './modules/select.js';
try {modal.modalItem("#open-filter", "#modal-filter", "filter");} catch (e) {}
try {modal.modalItem("#open-sort", "#modal-sort", "sort");} catch (e) {}
flsFunctions.isWebp();

function toggleActiveColorFilter(box) {
	const itemsCheckboxes = document.querySelector(box)

	itemsCheckboxes.addEventListener('click', e => {
		const target = e.target
		if (target && target.closest('label')) {
			target.parentNode.classList.toggle('_active')
		}
	})
}
try {toggleActiveColorFilter('.filter__info-color')} catch (e){}

// Игнорируем ошибки на других страницах
try {
	hundleSelect('.card__box', '.card__value')
} catch (e) {}
