//main bnr 스크롤
const mainBnr = new Swiper('.main_bnr_swiper',{
    autoplay:{delay:3000},
    loop:true,
    pagination:{
        el:'.main_bnr_swiper .swiper-pagination',
        type: 'bullets',
    },
});