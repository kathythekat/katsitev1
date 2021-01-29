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