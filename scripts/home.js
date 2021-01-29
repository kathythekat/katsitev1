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


//mountain SVG change colors effect

/* let mtnSvg = document.getElementById('mtnColor');
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
} */