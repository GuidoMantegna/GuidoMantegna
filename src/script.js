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

})
