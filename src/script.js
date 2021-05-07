const mainLoader = document.querySelector('.main-loader');
const body = document.querySelector('body');
// window.addEventListener("loadstart", console.log('loading'))

// SECTION NAME ANIMATION

const sectionsP = document.querySelectorAll('.section-name > p');
const social = document.querySelector('.social');
const presentation = document.querySelector('.presentation');
// const avatar = document.querySelector('.avatar-main');
const contactIcons = document.querySelectorAll('.contact-links > a');
const navContact = document.querySelector('.nav-contact');
const navContactLink = document.querySelector('.nav-contact > a');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

window.addEventListener("load", function(e) {
    console.log(e)

    social.style.transform = "translateY(0)";
    presentation.style.transform = "translateY(0)";
    navContact.style.transform = "translate(0, 0)";
    navContactLink.style.color = "var(--p-color)";

    // setTimeout(() => {avatar.style.transform = "translateX(0)"}, 2000);

    let interval = 100;

    function randTime (min, max) {
        return Math.random() * (max - min) + min;
    }   

    for (let index = 0; index < sectionsP.length; index++) {

        setTimeout(() => {
            sectionsP[index].style.display = 'block'
        }, interval)

        interval += randTime(100, 400)        
    }

    let iconInterval = 1000;

    for (let index = 0; index < contactIcons.length; index++) {

        setTimeout(() => {
            contactIcons[index].style.transform = 'translateY(0)';
        }, iconInterval);

        iconInterval += 1000;
        
    }
  });

// SECTION NAME OPENER

const sections = document.querySelectorAll('.section');
const sectionName = Array.from(document.querySelectorAll('.section-name'));
const briefs = document.querySelectorAll('.brief');

briefs.forEach(brief => brief.addEventListener('click', e => console.log(brief.lastElementChild)))

sectionName.forEach(section => section.addEventListener('click', e => {
    // if(viewportWidth < 768) {
    //     avatar.style.transform = "translateX(150%)";
    //     setTimeout(() => {
    //         presentation.style.transform = "translateY(100%)"
    //     }, 1000)
    // }

    let sectionIndex = sectionName.indexOf(section);

    const openSection = num => {
        for (let index = 0; index < sections.length; index++) {
            if(index === num) {
                sectionName[index].style.display = 'none';
                sections[index].style.flexGrow = '6'; 
                briefs[index].style.opacity = '1';
                setTimeout(() => {
                    briefs[index].firstElementChild.style.transform = "translateY(0)";
                    briefs[index].childNodes[3].style.transform = "translateY(0)";
                    briefs[index].lastElementChild.style.opacity = "1";
                }, 1000);
            } else {
                briefs[index].style.opacity = '0';
                briefs[index].firstElementChild.style.transform = "translateY(-100vh)";
                briefs[index].childNodes[3].style.transform = "translateY(100vh)";
                briefs[index].lastElementChild.style.opacity = "0";
                sectionName[index].style.display = 'flex';
                sections[index].style.flexGrow = '1'; 
            }
        }
    }


    switch (sectionIndex) {
        case 0:
            openSection(0);
            break;
        case 1:
            openSection(1);
            break;
        case 2:
            openSection(2);
            break;
        case 3:
            openSection(3);
            break;

    }

}))

// BURGUER MENU

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

// HIDE NAVBAR & FOOTER / RIGHT SIDEBAR ON SMALL DEVICES

const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const footer = document.querySelector('.contact');

let scrollPosition = 0;

window.addEventListener('scroll', e => {
    console.log(window.scrollY)
    // console.log(viewportWidth)

    let currentScroll = e.target.scrollingElement.scrollTop;

    if(scrollPosition < currentScroll && viewportWidth <= 992) {
        nav.style.height = '0';
        if(viewportWidth < 576) {
            footer.style.height = '0';
        }

    } else {
        nav.style.height = '10vh';
        if(viewportWidth < 576) {
            footer.style.height = '10vh';
        }

    }

    if(viewportWidth >= 992 && window.scrollY > viewportHeight) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }

    scrollPosition = e.target.scrollingElement.scrollTop;

})

// MAIN
// const sections = document.querySelectorAll('.section-name');
// let position = section.getBoundingClientRect();
// console.log(position.top)
// console.log(position.bottom)


// sections.forEach(section => section.addEventListener('touchstart', e => {
//     section.style.transform = "scale(1.2)"
// }))
// sections.forEach(section => section.addEventListener('touchend', e => {
//     section.style.transform = "scale(1)"
// }))


// SPREAD EDUCATION 
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

// WORK SLIDE

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


// OTHERS SELECTOR

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