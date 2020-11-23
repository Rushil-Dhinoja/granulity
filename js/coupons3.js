const cp1 = document.getElementById('cp1');
const cp2 = document.getElementById('cp2');
const cp3 = document.getElementById('cp3');
const cp4 = document.getElementById('cp4');
const cp5 = document.getElementById('cp5');
const cp6 = document.getElementById('cp6');
const leftScroll = document.getElementById('left-scroll')
const rightScroll = document.getElementById('right-scroll')
const miniCarousel = document.querySelector('.mini-carousel');
const nextCoupon = document.getElementById('next-coupon')
const prevCoupon = document.getElementById('prev-coupon')


const arrowClick = (e, dir) =>{
if(dir === 'right'){
    miniCarousel.scroll({left:miniCarousel.scrollLeft+370,top:0, behavior: "smooth"})
}
if(dir==='left'){
    miniCarousel.scroll({left:miniCarousel.scrollLeft-370,top: 0, behavior: 'smooth'})
    
}
}


leftScroll.addEventListener('click', (e) => arrowClick(e, 'left'))
rightScroll.addEventListener('click', (e) => arrowClick(e, 'right'))



const onClick = (e, element) => {
    cp1.classList.remove('active')
    cp2.classList.remove('active')
    cp3.classList.remove('active')
    cp4.classList.remove('active')
    cp5.classList.remove('active')
    cp6.classList.remove('active')

    element.classList.add('active')
} 

const changeCoupon = (dir) =>{
    
    if(dir === 'next'){
        if(cp1.classList.contains('active')){
            cp1.classList.remove('active')
            cp2.classList.add('active')
        }
        else if(cp2.classList.contains('active')){
            cp2.classList.remove('active')
            cp3.classList.add('active')
        }
        else if(cp3.classList.contains('active')){
            cp3.classList.remove('active')
            cp4.classList.add('active')
            miniCarousel.scroll({left: miniCarousel.scrollLeft + 370, top: 0, behavior:'smooth'})
        }
        else if(cp4.classList.contains('active')){
            cp4.classList.remove('active')
            cp5.classList.add('active')
        }
        else if(cp5.classList.contains('active')){
            cp5.classList.remove('active')
            cp6.classList.add('active')
        }
    }

    if(dir === 'prev'){
        if(cp6.classList.contains('active')){
            cp6.classList.remove('active')
            cp5.classList.add('active')
        }
        else if(cp5.classList.contains('active')){
            cp5.classList.remove('active')
            cp4.classList.add('active')
        }
        else if(cp4.classList.contains('active')){
            cp4.classList.remove('active')
            cp3.classList.add('active')
            miniCarousel.scroll({left: miniCarousel.scrollLeft - 370, top: 0, behavior:'smooth'})
        }
        else if(cp3.classList.contains('active')){
            cp3.classList.remove('active')
            cp2.classList.add('active')
        }
        else if(cp2.classList.contains('active')){
            cp2.classList.remove('active')
            cp1.classList.add('active')
        }
    }

}

cp1.addEventListener('click',(e)=> onClick(e, cp1))
cp2.addEventListener('click',(e)=> onClick(e, cp2))
cp3.addEventListener('click',(e)=> onClick(e, cp3))
cp4.addEventListener('click',(e)=> onClick(e, cp4))
cp5.addEventListener('click', (e)=>onClick(e, cp5))
cp6.addEventListener('click',(e)=> onClick(e, cp6))
nextCoupon.addEventListener('click', () => changeCoupon('next'))
prevCoupon.addEventListener('click', () => changeCoupon('prev'))