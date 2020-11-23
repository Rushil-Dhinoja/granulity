const next = document.getElementById('next-ad')
const prev = document.getElementById('prev-ad')
const slides = document.getElementById('slides')

    slides.scroll({left:slides.scrollLeft+230,top:0, behavior: 'auto'})

const onClick = (dir) => {
    if(dir === 'next'){
        slides.scroll({left: slides.scrollLeft+230,top:0, behavior:"smooth"})
    }
    if(dir ==='prev'){
        slides.scroll({left:slides.scrollLeft-230,top:0,behavior:"smooth"})
    }
}
console.log(next)
next.addEventListener('click', ()=> onClick('next'))
prev.addEventListener('click', () => onClick('prev'))