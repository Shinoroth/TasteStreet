'use strict';
const scrollTopBtn = document.getElementById('scrollTopBtn');
const menuButton = document.querySelector('.toggle-menu');
const iconToggle = document.querySelector('.uil');
let isMenuOpen = false;

// zmiana ikony menu moblinego poprzed zmianę klasy, działa to dzięki podpiętje biblioce unicons w pliku html 
menuButton.addEventListener('click', () => {
    if(!isMenuOpen) {
        iconToggle.classList.add('uil-times');
        iconToggle.classList.remove('uil-bars');
        isMenuOpen = true;
    }
    else {
        iconToggle.classList.add('uil-bars'); 
        iconToggle.classList.remove('uil-times');
        isMenuOpen = false;
    }
});
 
// Przejście do samej góry strony
scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});