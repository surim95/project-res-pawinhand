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