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


//project - hover effect
const mediaLimit = window.matchMedia('(max-width: 1200px)');

const memeBox = document.getElementById('memeProject')

memeBox.addEventListener('mouseenter', showMeme);

if (mediaLimit.matches === true) {
    memeBox.removeEventListener('mouseenter', showMeme);
}

function showMeme() {
    const catImgSrc = 'images/catmeme.png';
    memeBox.innerText='';
    memeBox.style.backgroundImage = `url("${catImgSrc}")`;
    memeBox.classList.add('showMeme')
}

memeBox.addEventListener('mouseleave', function() {
    memeBox.classList.remove('showMeme');
    memeBox.style.backgroundImage = 'none';
    memeBox.innerText= 'Meme Generator';
})