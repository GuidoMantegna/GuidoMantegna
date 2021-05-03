const burguerBtn = document.querySelector('.burguer-btn');
const burguerMenu = document.querySelector('.burguer-menu');
const burguerLines = document.querySelectorAll('.burguer-line');
const burguerLinks = document.querySelectorAll('.burguer-link');

burguerClose = true;

const closeMenu = () => {
    if(burguerClose) {
        burguerLines[0].style.transform = "translateY(10px)";
        burguerLines[2].style.transform = "translateY(-10px)";
        burguerMenu.style.transform = "translateX(0)"
        
        setTimeout(() => {
            burguerLines[0].style.display = "none";
            burguerLines[1].style.width = "100%";
            burguerLines[1].style.transform = "rotate(45deg)";
            burguerLines[2].style.display = "none";
            burguerLines[3].style.width = "60%";
            burguerLines[3].style.transform = "rotate(-45deg)";
        }, 300);

        burguerClose = !burguerClose
    } else {
        burguerLines[1].style.transform = "rotate(0deg)";
        burguerLines[3].style.transform = "rotate(0deg)";
        burguerMenu.style.transform = "translateX(100%)"

        setTimeout(() => {
            burguerLines[0].style.display = "block";
            burguerLines[2].style.display = "block";
            burguerLines[3].style.width = "0";
        }, 300)

        setTimeout(() => {
            burguerLines[0].style.transform = "translateY(0)";
            burguerLines[1].style.width = "80%";
            burguerLines[2].style.transform = "translateY(0)";
        }, 400);

        burguerClose = !burguerClose
    }
}

burguerBtn.addEventListener('click', closeMenu);
burguerLinks.forEach(link => link.addEventListener('click', closeMenu))

const header = document.querySelector('header')

let scrollPosition = 0;

window.addEventListener('scroll', e => {

    let currentScroll = e.target.scrollingElement.scrollTop;

    scrollPosition < currentScroll ?
    header.style.height = '0':
    header.style.height = '10vh';

    scrollPosition = e.target.scrollingElement.scrollTop;

})

const titles = Array.from(document.querySelectorAll('.education-title'));

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

const otherTags = document.querySelectorAll('.others-tags > label');
const othersImg = document.querySelectorAll('.others-img');
const hobbyBrief = document.querySelectorAll('.hobby-brief');
let selectedLabel = 'photography';

otherTags.forEach(tag => tag.addEventListener('click', (e) => {
    const labelName = e.target.attributes[1].value;

    const selectHobby = num => {
        for (let index = 0; index < otherTags.length; index++) {
            if(index !== num) {
                otherTags[index].classList.remove('selected-tag');
                otherTags[index].classList.add('no-selected-tag');

                othersImg[index].classList.remove('selected-img');
                othersImg[index].classList.add('no-selected-img');

                hobbyBrief[index].classList.remove('selected-brief');
                hobbyBrief[index].classList.add('no-selected-brief');
            } else {
                otherTags[num].classList.toggle('selected-tag');
                otherTags[num].classList.toggle('no-selected-tag');
                othersImg[num].classList.toggle('selected-img');
                othersImg[num].classList.toggle('no-selected-img');
                hobbyBrief[num].classList.toggle('selected-brief');
                hobbyBrief[num].classList.toggle('no-selected-brief');
            }     
        }
    }

    if(selectedLabel !== labelName) {
        switch (labelName) {
        case 'photography':
            selectHobby(0)           
            break;
        case 'woodwork': 
            selectHobby(1)
            break;
        case 'music':
            selectHobby(2)
            break;
        case 'sports': 
            selectHobby(3)
            break;
        }
    }

    selectedLabel = labelName;    
}))