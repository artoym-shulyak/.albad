import Swiper from 'swiper/bundle'
import {
	swiperCertificates,
	swiperClients,
} from './modules/SwiperCertificates.js'
import { accordeon } from './modules/accordeon.js'
import { isWebp } from './modules/functions.js'
import { media_query } from './modules/mediaQuery.js'
import { modal } from './modules/modal.js'

swiperCertificates(Swiper)
media_query.mq_more_991 ? swiperClients(Swiper) : null
accordeon('.questions__container', '.questions__head')
modal('.btn-feedback', '#modal-feedback')
modal('.head__link', '#modal-feedback')
modal('.footer__link', '#modal-feedback')
isWebp()
