// window.addEventListener("loadstart", console.log('loading'))

// ON LOAD EVENTS
const sectionsP = document.querySelectorAll('.section-name > p');
      leftSidebar = document.querySelector('.left-sidebar'),
      rightSidebar = document.querySelector('.right-sidebar'),
      contactIcons = document.querySelectorAll('.footer-links > a'),
      navContact = document.querySelector('.nav-contact'),
      navContactIcon = document.querySelector('.nav-contact > i'),
      instructions = document.querySelector('.instructions'),

window.addEventListener("load", function(e) {

    leftSidebar.style.transform = "translateY(0)";
    rightSidebar.style.transform = "translateY(0)";
    navContact.style.transform = "translate(0)";
    navContactIcon.style.color = "var(--p-color)";

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

    this.setTimeout(() => {
        instructions.style.opacity = "1"
    }, 8000)
    this.setTimeout(() => {
        instructions.style.opacity = "0"
    }, 12000)

  });

// HOME SECTION OPENER

const sections = document.querySelectorAll('.section'),
      sectionName = Array.from(document.querySelectorAll('.section-name')),
      briefs = document.querySelectorAll('.brief');

sectionName.forEach(section => section.addEventListener('click', e => {

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

const burguerBtn = document.querySelector('.burguer-btn'),
      burguerMenu = document.querySelector('.burguer-menu'),
      burguerLines = document.querySelectorAll('.burguer-line'),
      burguerLinks = document.querySelectorAll('.burguer-link');

burguerClose = true;

const closeMenu = () => {
    if(burguerClose) {
        burguerLines[0].style.transform = "translateY(10px)";
        burguerLines[2].style.transform = "translateY(-10px)";
        burguerMenu.style.transform = "translateX(0)";
        burguerMenu.style.top = `${nav.clientHeight}px`;
        if(window.innerWidth < 768 && window.innerHeight > 500) {
            burguerMenu.style.bottom = `${footer.clientHeight}px`;
        } else {
            burguerMenu.style.bottom = `0`;
        }
        
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
        burguerMenu.style.transform = "translateX(130%)"

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

// HIDE/SHOW NAVBAR & FOOTER & SECTION TITLES

const nav = document.querySelector('nav'),
      navLinks = document.querySelector('.nav-links'),
      footer = document.querySelector('footer'),
      sectionTitle = document.querySelectorAll('.section-header > h2');      

let scrollPosition = 0;

window.addEventListener('scroll', e => {
    
    let currentScroll = e.target.scrollingElement.scrollTop;
    let totalVH = e.target.scrollingElement.offsetHeight;
    let onBottom = totalVH - currentScroll - window.innerHeight;

    if(scrollPosition < currentScroll) {
        nav.style.transform = 'translateY(-100%)';
        if(onBottom > footer.clientHeight && window.innerWidth < 768) {
            footer.style.transform = 'translateY(100%)';
        } else {
            footer.style.transform = 'translateY(0)';
        }
    } else {
        nav.style.transform = 'translateY(0)';
        footer.style.transform = 'translateY(0)';
    }

    if(window.innerWidth >= 992 && window.scrollY > window.innerHeight) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }

    scrollPosition = e.target.scrollingElement.scrollTop;

    // SECTION TITLES

    const sectionsPosition = {
        about: sectionTitle[0].getBoundingClientRect().top,
        work: sectionTitle[1].getBoundingClientRect().top,
        skills: sectionTitle[2].getBoundingClientRect().top,
        others: sectionTitle[3].getBoundingClientRect().top,
      };
    
    const {about, work, skills, others} = sectionsPosition;

    let aboutOnScreen = about < window.innerHeight && about > 0;
    let workOnScreen = work < window.innerHeight && work > 0;
    let skillsOnScreen = skills < window.innerHeight && skills > 0;
    let othersOnScreen = others < window.innerHeight && others > 0;

    switch (true) {
        case aboutOnScreen:
            sectionTitle[0].style.transform = 'translateX(0)'
            break;
        case workOnScreen:
            sectionTitle[1].style.transform = 'translateX(0)'
            break;
        case skillsOnScreen:
            sectionTitle[2].style.transform = 'translateX(0)'
            break;
        case othersOnScreen:
            sectionTitle[3].style.transform = 'translateX(0)'
            break;
        default:
            sectionTitle[0].style.transform = 'translateX(100%)';
            sectionTitle[1].style.transform = 'translateX(100%)';
            sectionTitle[2].style.transform = 'translateX(100%)';
            sectionTitle[3].style.transform = 'translateX(100%)';
            break;
    }

});


window.addEventListener('orientationchange', () => {
    if(window.innerHeight < 992) {
        navLinks.style.display = "none";
    }
})

// SPREAD EDUCATION 
const titles = Array.from(document.querySelectorAll('.education-title'));

titles.forEach(title => title.addEventListener('click', e => {
    const brief = title.nextElementSibling;
    const height = title.nextElementSibling.clientHeight;
    const spread = e.target.previousElementSibling.firstElementChild;

    if(e.target != title) {
        if (height == 0) {
            brief.style.height = '100%'
            brief.style.opacity = '1'
            spread.innerText = 'v'
        } else {
            brief.style.height = '0';
            brief.style.opacity = '0'
            spread.innerText = '>'
        }
    }
}))

// WORK SLIDE

const workBtn = document.querySelectorAll('.work-main-container > label')
const slidePosition = Array.from(document.querySelectorAll('.slide-position > div'))
const work = document.querySelectorAll('.work-item-container')
let slideNum = 0;

const chooseWork = (num, action) => {

    const setClassFwd = num => {
        switch (num) {
            case 0:
                work[1].classList.remove('work-item-next');
                work[1].classList.add('current-item');
    
                work[4].classList.remove('work-item-prev');
                work[4].classList.add('work-item-next');
    
                break;
            case 1:
                work[2].classList.remove('work-item-next');
                work[2].classList.add('current-item');
    
                work[0].classList.remove('work-item-prev');
                work[0].classList.add('work-item-next');
    
                break;
            case 2:
                work[3].classList.remove('work-item-next');
                work[3].classList.add('current-item');
    
                work[1].classList.remove('work-item-prev');
                work[1].classList.add('work-item-next');
    
                break;
            case 3:
                work[4].classList.remove('work-item-next');
                work[4].classList.add('current-item');
    
                work[2].classList.remove('work-item-prev');
                work[2].classList.add('work-item-next');
    
                break;
            case 4:
                work[0].classList.remove('work-item-next');
                work[0].classList.add('current-item');
    
                work[3].classList.remove('work-item-prev');
                work[3].classList.add('work-item-next');
    
                break;
        }
    }

    const setClassRew = num => {
        switch (num) {
            case 0:
                work[4].classList.remove('work-item-prev');
                work[4].classList.add('current-item');

                work[3].classList.remove('work-item-next');
                work[3].classList.add('work-item-prev');
    
                break;
            case 4:
                work[3].classList.remove('work-item-prev');
                work[3].classList.add('current-item');

                work[2].classList.remove('work-item-next');
                work[2].classList.add('work-item-prev');
    
                break;
            case 3:
                work[2].classList.remove('work-item-prev');
                work[2].classList.add('current-item');

                work[1].classList.remove('work-item-next');
                work[1].classList.add('work-item-prev');
    
                break;
            case 2:
                work[1].classList.remove('work-item-prev');
                work[1].classList.add('current-item');

                work[0].classList.remove('work-item-next');
                work[0].classList.add('work-item-prev');
    
                break;
            case 1:
                work[0].classList.remove('work-item-prev');
                work[0].classList.add('current-item');

                work[4].classList.remove('work-item-next');
                work[4].classList.add('work-item-prev');
    
                break;
        }
    }

    if(action === "fwd") {
        work[num].classList.remove('current-item');
        work[num].classList.add('work-item-prev');
        setClassFwd(num)
    } 
    else {
        work[num].classList.remove('current-item');
        work[num].classList.add('work-item-next');
        setClassRew(num)
    }
    
}

const setSlidePosition = (num) => {
    for (let index = 0; index < slidePosition.length; index++) {
        index === num ? 
        slidePosition[index].style.background = "var(--text-color)":
        slidePosition[index].style.background = "var(--text-color-dark)"
    }
}

workBtn.forEach(btn => btn.addEventListener('click', e => {
    const action = e.target.dataset.action;

    const setSlideNum = () => {
        if(action === "fwd") {
            if(slideNum < 4) {
                slideNum += 1
            } else {
                slideNum = 0
            }
        } else {
            if (slideNum > 0) {
                slideNum -=1
            } else {
                slideNum = 4
            }
        }
    }
    
    chooseWork(slideNum, action)

    setSlideNum()

    setSlidePosition(slideNum)

}));


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