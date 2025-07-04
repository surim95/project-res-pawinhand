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
console.log(closeAdBtn, headerAd)
closeAdBtn.addEventListener('click',()=>{
    headerAd.style.display = 'none';
});
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

/* sub */
const priceSale = document.querySelectorAll('.product_info p');

priceSale.forEach(filter => {
    const sale = filter.querySelector('.sale');
    const price = filter.querySelector('.price');

    if (sale && price) {
        price.classList.add('del_price');
    } /* else {
        console.log('없음');
    } */
})

const filterAct = document.querySelectorAll('.filter_list');

filterAct.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        filterAct.forEach(btn => {
            if(btn.id === 'filter_active') {
                btn.removeAttribute('id');
            }
        });
        filterBtn.id = 'filter_active';
    });
});

const page = document.querySelectorAll('.page');

page.forEach(pageBtn => {
    pageBtn.addEventListener('click', () => {
        page.forEach(btn => {
            if(btn.id === 'page_active') {
                btn.removeAttribute('id');
            }
        });
        pageBtn.id = 'page_active';
    });
});

const alignFour = document.querySelector('.list_show4');
const alignOne = document.querySelector('.list_show1');

alignFour.addEventListener('click',()=>{
    alignFour.children[0].src = '../images/sub/icon_align4_btn_act.png';
    alignOne.children[0].src = '../images/sub/icon_align1_btn.png';
});
alignOne.addEventListener('click',()=>{
    alignFour.children[0].src = '../images/sub/icon_align4_btn.png';
    alignOne.children[0].src = '../images/sub/icon_align1_btn_act.png';
});

/* ul 복사 붙여넣기 */
const productWrap = document.querySelector('.product_wrap');
const productList = document.querySelector('.product_list');
const productListClone = productList.cloneNode(true);
for (let i = 1; i<3; i++){
    productWrap.appendChild(productListClone);
}