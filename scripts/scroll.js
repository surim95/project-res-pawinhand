//main bnr 스크롤
const mainBnr = new Swiper('.main_bnr_swiper',{
    autoplay:{delay:3000},
    loop:true,
    pagination:{
        el:'.main_bnr_swiper .swiper-pagination',
        type: 'bullets',
    },
});
const magazineScroll = new Swiper('.magazine_scroll',{
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation:{
        nextEl:'.magazine_swiper_wrap > .swiper-button-next',
        prevEl:'.magazine_swiper_wrap > .swiper-button-prev',
    },
    autoplay:{delay:3000},
})
const introduceScroll = new Swiper('.intro_pic',{
    navigation:{
        nextEl:'.intro_pic > .swiper-button-next',
        prevEl:'.intro_pic > .swiper-button-prev',
    }, loop:true,
    autoplay:{delay:3000},
})