/* delprice */
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

/* 정렬 버튼 */
const alignFour = document.querySelector('.list_show4');
const alignOne = document.querySelector('.list_show1');

alignFour.addEventListener('click',()=>{
    alignFour.children[0].src = './images/sub/icon_align4_btn_act.png';
    alignOne.children[0].src = './images/sub/icon_align1_btn.png';
});
alignOne.addEventListener('click',()=>{
    alignFour.children[0].src = './images/sub/icon_align4_btn.png';
    alignOne.children[0].src = './images/sub/icon_align1_btn_act.png';
});