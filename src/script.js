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

const fwd = document.querySelector('.fwd')
const rew = document.querySelector('.rew')
const workItem = document.querySelectorAll('.work-item')
const workMainContainer = document.querySelector('.work-main-container')
const workBtn = document.querySelectorAll('.work-item > label')

// workMainContainer.addEventListener('click', e => console.log(e))

workBtn.forEach(btn => btn.addEventListener('click', e => {
    const action = e.target.dataset.action;
    const width = workMainContainer.offsetWidth;
    const actualScroll = workMainContainer.scrollLeft;
    const totalScroll = workMainContainer.scrollWidth;

    if(action === "fwd") {
        // workItem.forEach(item => item.style.transform = `translateX(-${width}px)`)
        workMainContainer.scrollLeft += width

        // if((actualScroll + width*2) === totalScroll) {
        //     btn.style.display = "none"
        // }
        
    } else {
        // workItem.forEach(item => item.style.transform = `translateX(${width}px)`)
        workMainContainer.scrollLeft -= width
    }

    if ((actualScroll + width*2) === totalScroll) {
        workBtn.forEach(item => {
            if(action === 'fwd') {
                item.style.display = "none"
            }
            console.log(item.dataset)
        })
    }

    if (actualScroll === width) {
        workBtn.forEach(item => {
            if(item.dataset === 'rwd') {
                item.style.display = "none"
            }
        })
    }

    // console.log(width)
    // console.log(actualScroll)
    
}))

// fwd.addEventListener('click', e => {
//     workItem.forEach(item => item.style.transform = 'translateX(-100%)')

//     workBtn.forEach(btn => btn.addEventListener('click', e => {
//         const action = e.target.dataset.action

//         action === "fwd" ? workItem.style.transform = 'translateX(-100%)' : workItem.style.transform = 'translateX(100%)'

//     }))
// })