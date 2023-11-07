const bannerImg = document.getElementById('main-banner');

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    bannerImg.src = './assets/images/image-web-3-mobile.jpg';
  } else {
    bannerImg.src = './assets/images/image-web-3-desktop.jpg';
  }
});
