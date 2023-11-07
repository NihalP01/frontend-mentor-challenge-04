// const bannerImg = document.getElementById('main-banner');

// window.addEventListener('resize', () => {
//   const screenWidth = window.innerWidth;
//   if (screenWidth < 600) {
//     bannerImg.src = './assets/images/image-web-3-mobile.jpg';
//   } else {
//     bannerImg.src = './assets/images/image-web-3-desktop.jpg';
//   }
// });

const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuIcon = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu-open');
  overlay.style.display = 'block';
});

closeMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu-open');
  overlay.style.display = 'none';
});
