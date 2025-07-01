/* 헤더 광고 닫기 버튼 */
const closeAdBtn = document.querySelector('.ad_close_btn');
const headerAd = document.querySelector('.ad');
console.log(closeAdBtn, headerAd)
closeAdBtn.addEventListener('click',(e)=>{
    headerAd.style.display = 'none';
    e.preventDefault();//태그의 기본이벤트 막기
});

/* 더보기 버튼 복사/붙여넣기 */
const moreBtn = document.querySelector('.pet_sup .more_b_btn');
const reviewMore = document.querySelector('.review_container .review_wrap');
const moreBtnClone = moreBtn.cloneNode(true);
console.log(moreBtn, reviewMore, moreBtnClone);
reviewMore.appendChild(moreBtnClone);

/* 장바구니, 검색, 마이페이지 활성화 */
const searchIcon = document.querySelector('.search img');
const cartIcon = document.querySelector('.cart img');
const myIcon = document.querySelector('.mypage img');
console.log(searchIcon, cartIcon, myIcon);
const mouseEvent = [searchIcon, cartIcon, myIcon];
console.log(mouseEvent);

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
console.log(cartPlusBtn);
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


const magazineBtn = document.querySelector('.magazine_contents .more_info_btn');
magazineBtn.addEventListener('mouseover',()=>{
    magazineBtn.children[0].src = './images/icon_arrow_more_act.png'
})
magazineBtn.addEventListener('mouseout',()=>{
    magazineBtn.children[0].src = './images/icon_arrow_more.png'
})

const infoBtn = document.querySelector('.more_brand_btn');
infoBtn.addEventListener('mouseover',()=>{
    infoBtn.children[0].src = './images/icon_arrow_more_act.png'
})
infoBtn.addEventListener('mouseout',()=>{
    infoBtn.children[0].src = './images/icon_arrow_more.png'
})

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