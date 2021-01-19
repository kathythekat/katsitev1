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



const dogClicker = document.getElementById('dog-clicker')

dogClicker.addEventListener('click', function() {
    modalEl.classList.add('modal--open')
})

const modalEl = document.getElementById('modal');
modalEl.addEventListener('click', function() {
    modalEl.classList.remove('modal--open')
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





