const next = document.getElementById('next-ad')
const prev = document.getElementById('prev-ad')
const slides = document.getElementById('slides')
const slideOne = document.getElementById('slide-1')
const slideTwo = document.getElementById('slide-2')
const slideThree = document.getElementById('slide-3')

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