//NAVIGATION BAR//

const navClicker = document.getElementById("nav-icon-click");

const openNavBar = document.getElementById("nav-links");

navClicker.addEventListener('click', function(event) {
    event.stopPropagation();
    if (openNavBar.classList.contains('nav-links--open')) {
        closeNav();  
    } else {
        openNavBar.classList.add('nav-links--open');
        document.addEventListener('click', closeNav);
    }
})

function closeNav() {
    document.removeEventListener('click', closeNav);
    openNavBar.classList.remove('nav-links--open');
}

//project - meme gen hover effect
const memeBox = document.getElementById('memeProject')
memeBox.addEventListener('mouseenter', showMeme);

function showMeme() {
    const catImgSrc = 'images/catmeme.png';

    // const memeHover = document.createElement('div');
    // memeHover.classList.add('showMeme');
    memeBox.innerText='';
    memeBox.style.backgroundImage = `url("${catImgSrc}")`;
    memeBox.classList.add('showMeme')
}

memeBox.addEventListener('mouseleave', function() {
    memeBox.classList.remove('showMeme');
    memeBox.style.backgroundImage = 'none';
    memeBox.innerText= 'Meme Generator';
})

//mountain SVG change colors effect
let mtnSvg = document.getElementById('mtnColor');
let mtnFill = mtnSvg.getAttribute('fill');
console.log(mtnFill);

mtnSvg.addEventListener('mouseenter', changeFillColor);
const changeMtnColor = setInterval(changeFillColor, 1000);
function changeFillColor(e) {
    let mtnFill = e.target;
    mtnFill.style.fill = '#' + Math.floor(Math.random()*16777215).toString(16);
}

mtnSvg.addEventListener('mouseout', removeFillColor);
function removeFillColor(e) {
    clearInterval(changeMtnColor);
    let mtnFill = e.target;
    mtnFill.style.fill = "#D7D5D5";
}

//DOG MODAL//
const dogModal = document.getElementById('dog-modal');
const dogClicker = document.getElementById('dog-clicker')

dogClicker.addEventListener('click', function() {
    dogModal.classList.add('dog-modal--open')
})

dogModal.addEventListener('click', function() {
    dogModal.classList.remove('dog-modal--open')
})

//BIKE MODAL//

const bikeClicker = document.getElementById('bike-clicker')
// buttonEl.addEventListener
bikeClicker.addEventListener('click', function() {
    const bikeModal = document.getElementById('bike-modal')
    bikeModal.classList.add('bike-modal--open')
})

const bikeModal = document.getElementById('bike-modal');
bikeModal.addEventListener('click', function() {
    bikeModal.classList.remove('bike-modal--open')
})

//NURSE MODAL//

const nurseClicker = document.getElementById('nurse-clicker')
const nurseModal = document.getElementById('nurse-modal')
nurseClicker.addEventListener('click', function() { 
    nurseModal.classList.add('nurse-modal--open')
})

nurseModal.addEventListener('click', function() {
    nurseModal.classList.remove('nurse-modal--open')
})









