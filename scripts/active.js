/* 더보기 버튼 복사/붙여넣기 */
const moreBtn = document.querySelector('.pet_sup .more_b_btn');
const reviewMore = document.querySelector('.review_container .review_wrap');
const moreBtnClone = moreBtn.cloneNode(true);
//console.log(moreBtn, reviewMore, moreBtnClone);
reviewMore.appendChild(moreBtnClone);


/* 요소 개별 background 변경 */
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
