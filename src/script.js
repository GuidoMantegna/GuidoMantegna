const titles = document.querySelectorAll('.education-title');

titles.forEach(title => title.addEventListener('click', e => {
    const brief = e.path[2].childNodes[5];
    const height = e.path[2].childNodes[5].clientHeight;
    const spread = e.path[1].childNodes[1].childNodes[1];

    if(e.target != title) {
        if (height == 0) {
            brief.style.height = '100%'
            spread.innerText = 'v'
        } else {
            brief.style.height = '0';
            spread.innerText = '>'
        }
    }
}))


const workBtn = document.querySelectorAll('.work-main-container > label')
const slide = document.querySelector('.work-slide')
const slidePosition = document.querySelectorAll('.slide-position > div')
const width = slide.offsetWidth;

workBtn.forEach(btn => btn.addEventListener('click', e => {
    const action = e.target.dataset.action;
    
    action === "fwd" ? slide.scrollLeft += width : slide.scrollLeft -= width;    
}))

slide.addEventListener('scroll', e => {
    const totalScroll = slide.scrollWidth;
    let actualScroll = e.target.scrollLeft;

    actualScroll > 0 ? workBtn[0].style.display = 'block' : workBtn[0].style.display = 'none';
    actualScroll + width < totalScroll ? workBtn[1].style.display = 'block' : workBtn[1].style.display = 'none';

    const setSlidePosition = (num) => {
        for (let index = 0; index < slidePosition.length; index++) {
            index === num ? 
            slidePosition[index].style.background = "rgba(255, 248, 220, .8)":
            slidePosition[index].style.background = "rgba(255, 248, 220, .3)"
        }
    }

    switch (actualScroll) {
        case 0:
            setSlidePosition(0)
            break;
        case width:
            setSlidePosition(1)
            break;
        case width*2:
            setSlidePosition(2)
            break;
        case width*3:
            setSlidePosition(3)
            break;
    }

})

// document.addEventListener('onload', () => {
//     console.log('the page has loaded')
// })