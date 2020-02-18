document.addEventListener("DOMContentLoaded", function () {
  //Toggle footer mobile menu
  document.querySelectorAll('.footer-menu__title').forEach(function (title) {
    title.addEventListener('click', function () {
      this.closest('.footer-menu__item').classList.toggle('footer-menu__item_opened');
    })
  });
  //Close menu/category on fader click
  document.getElementsByClassName('fader')[0].addEventListener('click', function (event) {
    if (event.target === document.getElementsByClassName('fader')[0]) {
      if(window.getComputedStyle(document.getElementsByClassName('menu')[0]).display !== 'none'){
        document.getElementsByClassName('menu')[0].classList.remove('menu_opened');
      }
      if(window.getComputedStyle(document.getElementsByClassName('header-top-menu')[0]).display !== 'none'){
        document.getElementsByClassName('header-top-menu')[0].classList.remove('header-top-menu_opened');
      }
      document.getElementsByClassName('fader')[0].classList.remove('fader_active');
      document.getElementsByTagName('body')[0].classList.remove('ovh');
    }
  });

  //Toggle header mobile menu
  document.getElementsByClassName('header-top-menu__mobile')[0].addEventListener('click', function () {
    this.closest('.header-top-menu').classList.toggle('header-top-menu_opened');
    document.getElementsByClassName('fader')[0].classList.toggle('fader_active');
    document.getElementsByTagName('body')[0].classList.toggle('ovh');
    if(window.getComputedStyle(document.getElementsByClassName('menu')[0]).display !== 'none'){
      document.getElementsByClassName('menu')[0].classList.remove('menu_opened');
      document.getElementsByClassName('fader')[0].classList.add('fader_active');
      document.getElementsByTagName('body')[0].classList.add('ovh');
    }
  });
  //Toggle catalog mobile menu
  document.getElementsByClassName('header-catalog-menu')[0].addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementsByClassName('menu')[0].classList.toggle('menu_opened');
    document.getElementsByClassName('fader')[0].classList.toggle('fader_active');
    document.getElementsByTagName('body')[0].classList.toggle('ovh');
  });
//Select
  let x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
        let y, i, k, s, h,f;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        f = this.parentNode.parentNode.getElementsByTagName("form")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select_active");
    });
  }
  function closeAllSelect(elmnt) {
    let x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);


});