import Swiper from "swiper";
import { Navigation } from 'swiper/modules';

export let swiperUsTrust = new Swiper('.us-trust__slider',{
    modules: [ Navigation ],
    speed: 400,
    autoplay:true,
    spaceBetween: 10,
    loop:false,
    createElements:false,
    navigation: {
        nextEl: '.us-trust .swiper-button-next',
        prevEl: '.us-trust   .swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20,

        }
    }
})

