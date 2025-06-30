/* 헤더 광고 닫기 버튼 */
const closeAdBtn = document.querySelector('.ad_close_btn');
const headerAd = document.querySelector('.ad');
let adif = false;
console.log(closeAdBtn, headerAd)
closeAdBtn.addEventListener('click',()=>{
    if (adif == false) {
        headerAd.style.display = 'none';
        adif = true;
    } else {
        /* headerAd.style.display = 'block'; */
        adif = false;
    }
});

/* 더보기 버튼 복사/붙여넣기 */
const moreBtn = document.querySelector('.pet_sup .more_b_btn');
const reviewMore = document.querySelector('.review_container .review_wrap');
const moreBtnClone = moreBtn.cloneNode(true);
console.log(moreBtn, reviewMore, moreBtnClone);
reviewMore.appendChild(moreBtnClone);