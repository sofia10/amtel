var swiper = new Swiper('.main-swiper', {
    spaceBetween: 0,
    centeredSlides: true,
    speed:1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

var swiper = new Swiper('.services-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed:800,
    navigation: {
        nextEl: '.services .swiper-button-next',
        prevEl: '.services .swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});

var swiper = new Swiper('.doctors-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed:800,
    navigation: {
        nextEl: '.doctors-slider .swiper-button-next',
        prevEl: '.doctors-slider .swiper-button-prev',
    },
});



