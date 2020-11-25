const next = document.getElementById('next-ad')
const prev = document.getElementById('prev-ad')
const slides = document.getElementById('slides')
const slideOne = document.getElementById('slide-1')
const slideTwo = document.getElementById('slide-2')
const slideThree = document.getElementById('slide-3')

const qr11 = document.getElementById('qr11');
const qr12 = document.getElementById('qr12');
const qr13 = document.getElementById('qr13');
const qr14 = document.getElementById('qr14');

const qr21 = document.getElementById('qr21');
const qr22 = document.getElementById('qr22');
const qr23 = document.getElementById('qr23');
const qr24 = document.getElementById('qr24');

const qr31 = document.getElementById('qr31');
const qr32 = document.getElementById('qr32');
const qr33 = document.getElementById('qr33');
const qr34 = document.getElementById('qr34');


const onChange = (element, count ) =>{
    if(count === 1){
        
    qr11.parentElement.classList.remove('active')
    qr12.parentElement.classList.remove('active')
    qr13.parentElement.classList.remove('active')
    qr14.parentElement.classList.remove('active')


   element.parentElement.classList.add('active')
    }else if(count === 2){
        qr21.parentElement.classList.remove('active')
        qr22.parentElement.classList.remove('active')
        qr23.parentElement.classList.remove('active')
        qr24.parentElement.classList.remove('active')
    
    
       element.parentElement.classList.add('active')
            
    }else if(count === 3){
        qr31.parentElement.classList.remove('active')
    qr32.parentElement.classList.remove('active')
    qr33.parentElement.classList.remove('active')
    qr34.parentElement.classList.remove('active')


   element.parentElement.classList.add('active')
    
    }

}

qr11.addEventListener('change', () => onChange(qr11,1))
qr12.addEventListener('change', () => onChange(qr12,1))
qr13.addEventListener('change', () => onChange(qr13,1))
qr14.addEventListener('change', () => onChange(qr14,1))

qr21.addEventListener('change', () => onChange(qr21,2))
qr22.addEventListener('change', () => onChange(qr22,2))
qr23.addEventListener('change', () => onChange(qr23,2))
qr24.addEventListener('change', () => onChange(qr24,2))

qr31.addEventListener('change', () => onChange(qr31,3))
qr32.addEventListener('change', () => onChange(qr32,3))
qr33.addEventListener('change', () => onChange(qr33,3))
qr34.addEventListener('change', () => onChange(qr34,3))



    slides.scroll({left: slides.scrollWidth/3.3,top:0, behavior: 'auto'})

    const onScroll = (e) =>{
        if(slides.scrollLeft < 150){
            slideOne.classList.add('active')
            slideTwo.classList.remove('active')
            slideThree.classList.remove('active')
        }else if(slides.scrollLeft > 150 && slides.scrollLeft < 450){
            slideOne.classList.remove('active')
            slideTwo.classList.add('active')
            slideThree.classList.remove('active')
        }else if(slides.scrollLeft > 450){
            slideOne.classList.remove('active')
            slideTwo.classList.remove('active')
            slideThree.classList.add('active')
        }
    }

    // const onSlideClick = (element) => {
    //     slideOne.classList.remove('active')
    //     slideTwo.classList.remove('active')
    //     slideTwo.classList.remove('active')
    //     element.classList.add('active')
    // }


const onClick = (dir) => {
    console.log(slides.scrollWidth)
    if(dir === 'next'){
        slides.scroll({left: slides.scrollLeft + slides.scrollWidth/3.3,top:0, behavior:"smooth"})
        // if(slideOne.classList.contains('active')){
        //     slideOne.classList.remove('active')
        //     slideTwo.classList.add('active')
        // }else if(slideTwo.classList.contains('active')){
        //     slideTwo.classList.remove('active')
        //     slideThree.classList.add('active')
        // }
    }
    if(dir ==='prev'){
        slides.scroll({left: slides.scrollLeft- slides.scrollWidth/3.3,top:0,behavior:"smooth"})
        // if(slideThree.classList.contains('active')){
        //     slideThree.classList.remove('active')
        //     slideTwo.classList.add('active')
        // }else if(slideTwo.classList.contains('active')){
        //     slideTwo.classList.remove('active')
        //     slideOne.classList.add('active')
        // }
    }
}
console.log(next)
next.addEventListener('click', ()=> onClick('next'))
prev.addEventListener('click', () => onClick('prev'))
slides.addEventListener('scroll', (e) => onScroll(e))

// slideOne.addEventListener('click', () => onSlideClick(slideOne))
// slideTwo.addEventListener('click', () => onSlideClick(slideTwo))
// slideThree.addEventListener('click', () => onSlideClick(slideThree))