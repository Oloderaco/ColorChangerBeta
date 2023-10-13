// nes elements
let selectedElement = null;
let pickColorBox = document.querySelector('.box');
let pickColorBg = document.querySelector('.backG');
let colorBlock = document.querySelector('.main__color-block');
let bgColorBlock = document.querySelector('.main__back-block');
let getBgVars = document.querySelectorAll('.main__back-block-item');
let setBg = document.querySelector('.main');
let getItems = document.querySelectorAll('.main__container-block');
let tagTimer = document.querySelector('.help__tag');
let cancelButton = document.querySelector('.cancel');
let Oleg = '';

// tag
setTimeout(() => tagTimer.style.display = 'none', 3000);

//colors
let getRed = document.querySelector('.a-var'),
    getBlue = document.querySelector('.b-var'),
    getYellow = document.querySelector('.c-var'),
    getGreen = document.querySelector('.d-var');

// 1
pickColorBox.addEventListener('click', () => {
    if (colorBlock.classList.contains('active')) {
        colorBlock.classList.remove('active')
    } else {
        colorBlock.classList.add('active')
    }
})

// 2
pickColorBg.addEventListener('click', () => {
    if (bgColorBlock.classList.contains('active')) {
        bgColorBlock.classList.remove('active')
    } else {
        bgColorBlock.classList.add('active')
    }
})

// target
function handleClick(event) {
    selectedElement = event.target;
    // console.log('Выбранный элемент:', selectedElement);
}
document.addEventListener('click', handleClick);
//


// Coloring boxes
function changer() {
    getBgnItem()
    getRed.addEventListener('click', () => {
        if (selectedElement.classList.contains('main__container-block')) {
            selectedElement.style.background = 'red';
            if (selectedElement.style.background == setBg.style.background) {
                selectedElement.style.background = 'grey'
            }
        }
    })
    getYellow.addEventListener('click', () => {
        if (selectedElement.classList.contains('main__container-block')) {
            selectedElement.style.background = 'yellow';
            if (selectedElement.style.background == setBg.style.background) {
                selectedElement.style.background = 'grey'
            }
        }
    })
    getBlue.addEventListener('click', () => {
        if (selectedElement.classList.contains('main__container-block')) {
            selectedElement.style.background = 'blue'
            if (selectedElement.style.background == setBg.style.background) {
                selectedElement.style.background = 'grey'
            }
        }
    })
    getGreen.addEventListener('click', () => {
        if (selectedElement.classList.contains('main__container-block')) {
            selectedElement.style.background = 'green'
            if (selectedElement.style.background == setBg.style.background) {
                selectedElement.style.background = 'grey'
            }
        }
    })
}



function getBgnItem() {
    getBgVars.forEach(function(item) { // bg vars
        getItems.forEach(function(el) { // box vars
            el.style.background = 'green';
            item.addEventListener('click', () => {
                if (item.innerHTML == 'red') {
                    setBg.style.background = 'red';
                    if (el.style.background == setBg.style.background) {
                        el.style.background = 'grey';
                    }
                } else if (item.innerHTML == 'blue') {
                    setBg.style.background = 'blue';
                    if (el.style.background == setBg.style.background) {
                        el.style.background = 'grey'
                    }
                } else if (item.innerHTML == 'yellow') {
                    setBg.style.background = 'yellow';
                    if (el.style.background == setBg.style.background) {
                        el.style.background = 'grey'
                    }
                } else if (item.innerHTML == 'green') {
                    setBg.style.background = 'green';
                    if (el.style.background == setBg.style.background) {
                        el.style.background = 'grey'
                    }
                }
            })
            cancelButton.addEventListener('click', () => {
                el.style.background = 'green';
                setBg.style.background = 'white';
            })
        })
    })
}
// getItems.forEach((item, index) => {
//     if (item.style.background == setBg.style.background) {
//         alert('oleg')
//     }
//     console.log(setBg.style.background);
// })
changer()