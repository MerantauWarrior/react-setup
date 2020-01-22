document.addEventListener("DOMContentLoaded", function() {
  //Toggle footer mobile menu
  document.querySelectorAll('.footer-menu__title').forEach(function (title) {
    title.addEventListener('click', function () {
      this.closest('.footer-menu__item').classList.toggle('footer-menu__item_opened');
    })
  });
  document.getElementsByClassName('header-top-menu__mobile')[0].addEventListener('click', function () {
    this.closest('.header-top-menu').classList.toggle('header-top-menu_opened');
    document.getElementsByClassName('fader')[0].classList.toggle('fader_active');
    document.getElementsByTagName('body')[0].classList.toggle('ovh');
  });
  document.getElementsByClassName('header-catalog-menu')[0].addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementsByClassName('menu')[0].classList.toggle('menu_opened');
    document.getElementsByClassName('fader')[0].classList.toggle('fader_active');
    document.getElementsByTagName('body')[0].classList.toggle('ovh');
  });
});