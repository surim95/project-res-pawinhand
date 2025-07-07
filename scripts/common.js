document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(e) {
        if (a.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

/* 헤더 광고 닫기 버튼 */
const closeAdBtn = document.querySelector('.ad_close_btn');
const headerAd = document.querySelector('.ad');
/* 헤더 border-bottom */
const header = document.querySelector('header');
//console.log(closeAdBtn, headerAd, header)
closeAdBtn.addEventListener('click',()=>{
    headerAd.style.display = 'none';
    header.style.borderBottom = '1px solid #f5f5f5'
});

/* lnb img */
const titles = document.querySelectorAll('.lnb_title');

titles.forEach(title => {
    const img = title.querySelector('a img'); // .lnb_title 안의 img 요소
    title.addEventListener('mouseover', () => {
    img.src = './images/icon_arrow_more_act.png'; // 마우스 오버 시 이미지 변경
    });
    title.addEventListener('mouseout', () => {
    img.src = './images/icon_next_arrow.png'; // 마우스 아웃 시 원래 이미지로 복귀
    });
});

/* menu gnb, lnb */
const menuBtn = document.querySelector('#main_header > a');
const menuBg = document.querySelector('.menu_container');
let menuBtnAct = false;
console.log(menuBtn, menuBg);
menuBtn.addEventListener('click',()=>{
    if (menuBtnAct) {
        menuBtnAct = false;
        menuBg.style.display = 'none';
    } else {
        menuBg.style.display = 'block';
        menuBtnAct = true;
    }
    
})
function menuSize(){
    const width = window.innerWidth;
    if (width > 1200) {
        menuBg.style.display = 'none';
        menuBtnAct = false;
    }
}
window.addEventListener('resize', menuSize);
menuSize();



/* 장바구니, 검색, 마이페이지 활성화 */
const searchIcon = document.querySelector('.search img');
const cartIcon = document.querySelector('.cart img');
const myIcon = document.querySelector('.mypage img');
//console.log(searchIcon, cartIcon, myIcon);
const mouseEvent = [searchIcon, cartIcon, myIcon];
//console.log(mouseEvent);

mouseEvent.forEach(function(icon) {
    icon.addEventListener('mouseover',()=>{
        if (icon.closest('.search')){
            icon.src = './images/icon_search_act.png';
        } else if (icon.closest('.cart')) {
            icon.src = './images/icon_cart_act.png';
        } else if (icon.closest('.mypage')) {
            icon.src = './images/icon_mypage_act.png';
        }
    })
    icon.addEventListener('mouseout',()=>{
        if (icon.closest('.search')){
            icon.src = './images/icon_search.png';
        } else if (icon.closest('.cart')) {
            icon.src = './images/icon_cart_emp.png';
        } else if (icon.closest('.mypage')) {
            icon.src = './images/icon_mypage.png';
        }
    })
})

const cartPlusBtn = document.querySelectorAll('.cart_btn');
//console.log(cartPlusBtn);
let cartAct = false;
cartPlusBtn.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if (cartAct) {
            btn.children[0].src = './images/icon_cart.png';
            cartAct = false;
        } else {
            btn.children[0].src = './images/icon_cart_plus.png';
            cartAct = true;
        }
        e.preventDefault();
    })
})