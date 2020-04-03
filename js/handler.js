document.addEventListener("DOMContentLoaded", function () {
  //Helper Functions
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      let nodeE = this;
      while (nodeE) {
        if (nodeE.matches(css)) return nodeE;
        else nodeE = nodeE.parentElement;
      }
      return null;
    };
  }
  //Toggle footer mobile menu
  document.querySelectorAll('.footer-menu__title').forEach(function (title) {
    title.addEventListener('click', function () {
      this.closest('.footer-menu__item').classList.toggle('footer-menu__item_opened');
    })
  });
  //Close menu/category on fader click
  document.getElementsByClassName('fader')[0].addEventListener('click', function (event) {
    if (event.target === document.getElementsByClassName('fader')[0]) {
      if (window.getComputedStyle(document.getElementsByClassName('menu')[0]).display !== 'none') {
        document.getElementsByClassName('menu')[0].classList.remove('menu_opened');
      }
      if (window.getComputedStyle(document.getElementsByClassName('header-top-menu')[0]).display !== 'none') {
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
    if (window.getComputedStyle(document.getElementsByClassName('menu')[0]).display !== 'none') {
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
      c.addEventListener("click", function (e) {
        let y, i, k, s, h, f;
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
    a.addEventListener("click", function (e) {
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
        y[i].classList.remove("select_active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  document.addEventListener("click", closeAllSelect);

  //Quantity
  if (document.querySelectorAll('.js-plus-product, .js-minus-product').length !== 0) {
    document.querySelectorAll('.js-plus-product, .js-minus-product').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        let inp = this.parentNode.children[1];
        let val = parseInt(inp.value);
        if (this.classList.contains('js-plus-product')) {
          inp.value = val + 1;
        } else {
          if (val > 1) {
            inp.value = val - 1;
          } else {
            return false;
          }
        }
      });
    });
  }
  //Checkout
  if (document.querySelectorAll('.checkout').length !== 0) {
    document.querySelectorAll('.js-checkout-delete').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        let remId = parseInt(this.closest('.checkout-item').getAttribute('data-index'));
        let productTotalPrice = parseInt(document.getElementsByClassName('checkout-result-item')[remId].getAttribute('data-total'));
        let result = parseInt(document.getElementById('js-total').getAttribute('data-sum')) - productTotalPrice;
        document.getElementById('js-total').setAttribute('data-sum', result);
        document.getElementById('js-total').innerText = result;
        document.getElementsByClassName('checkout-result-item')[remId].remove();
        this.closest('.checkout-item').remove();
        console.log(result);
      });
    });
  }
  //Fixed Buy btns on mobile
  if (document.querySelectorAll('.checkout__buy, .single-product__submit').length !== 0) {
    let fixUnfixBtns = function () {
      if (window.matchMedia("(max-width: 767px) and (orientation: portrait)").matches) {
        window.addEventListener('scroll', function () {
          if (document.documentElement.getBoundingClientRect().bottom > document.documentElement.clientHeight + 400) {
            document.querySelectorAll('.checkout__buy, .single-product__submit')[0].classList.add('fixed-mobile');
          } else {
            document.querySelectorAll('.checkout__buy, .single-product__submit')[0].classList.remove('fixed-mobile');
          }
        });
      } else {
        return false;
      }
    };
    fixUnfixBtns();
    window.addEventListener("orientationchange", function () {
      if (screen.orientation.type === "portrait-primary") {
        fixUnfixBtns();
      } else {
        return false;
      }
    });
  }
  //Seller Registration Modals
  if (document.querySelectorAll('.seller-registration-modal, .seller-registration__btn').length !== 0) {
    document.querySelectorAll('.seller-registration__btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        let modalName = this.getAttribute('href');
        document.getElementsByTagName('body')[0].classList.add('ovh');
        document.querySelectorAll('.seller-registration-window' + modalName)[0].closest('.seller-registration-modal').classList.add('seller-registration-modal_opened');
      })
    });
    //Close Seller Registration on click
    document.getElementsByClassName('seller-registration-modal')[0].addEventListener('click', function (event) {
      if (event.target === document.getElementsByClassName('seller-registration-modal')[0]) {
        document.getElementsByTagName('body')[0].classList.remove('ovh');
        document.querySelectorAll('.seller-registration-modal')[0].classList.remove('seller-registration-modal_opened');
      }
    });
    document.querySelectorAll('.seller-registration-window__close')[0].addEventListener('click', function () {
      document.getElementsByTagName('body')[0].classList.remove('ovh');
      document.querySelectorAll('.seller-registration-modal')[0].classList.remove('seller-registration-modal_opened');
    })
  }
  //Gallery Modal
  if (document.querySelectorAll('.gallery-modal, .js-gallery-item').length !== 0) {
    let group;
    let active;
    let n = 0;
    document.querySelectorAll('.js-gallery-item').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        group = [];
        active = [];
        document.querySelectorAll('.js-gallery-item[rel="' + this.getAttribute('rel') + '"]').forEach(function (el, i) {
          let src = el.getAttribute('data-src');
          group.push(src);
        });
        let srcImg = this.getAttribute('data-src');
        active.push(srcImg);
        n = parseInt(group.indexOf(active[0]));
        if (n < 1) {
          document.querySelectorAll('.gallery-modal__prev')[0].style.display = 'none';
        } else {
          document.querySelectorAll('.gallery-modal__prev')[0].style.display = 'block';
        }
        if (n < group.length - 1) {
          document.querySelectorAll('.gallery-modal__next')[0].style.display = 'block';
        } else {
          document.querySelectorAll('.gallery-modal__next')[0].style.display = 'none';
        }
        document.getElementsByTagName('body')[0].classList.add('ovh');
        document.querySelectorAll('.gallery-modal')[0].style.display = 'block';
        document.querySelectorAll('.gallery-modal__item')[0].setAttribute('src', srcImg);
      })
    });
    document.querySelectorAll('.gallery-modal__prev, .gallery-modal__next').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        n = parseInt(group.indexOf(active[0]));
        if (this.classList.contains('gallery-modal__prev')) {
          n--;
          active[0] = group[n];
          document.querySelectorAll('.gallery-modal__item')[0].setAttribute('src', group[n]);
        } else {
          n++;
          active[0] = group[n];
          document.querySelectorAll('.gallery-modal__item')[0].setAttribute('src', group[n]);
        }
        if (n < 1) {
          document.querySelectorAll('.gallery-modal__prev')[0].style.display = 'none';
        } else {
          document.querySelectorAll('.gallery-modal__prev')[0].style.display = 'block';
        }
        if (n < group.length - 1) {
          document.querySelectorAll('.gallery-modal__next')[0].style.display = 'block';
        } else {
          document.querySelectorAll('.gallery-modal__next')[0].style.display = 'none';
        }
      })
    });

    function closeGallery(event) {
      if (event.target === document.getElementById('modal') || event.which === 27 || event.keyCode === 27) {
        document.querySelectorAll('.gallery-modal')[0].style.display = 'none';
        document.getElementsByTagName('body')[0].classList.remove('ovh');
      }
    }

    document.addEventListener('click', function (event) {
      closeGallery(event);
    });
    document.addEventListener('touchstart', function (event) {
      closeGallery(event);
    });
    document.addEventListener("keydown", function (event) {
      closeGallery(event);
    })
  }
  //Seller product
  if(document.querySelectorAll('.seller-product-chip, .btn-inp-controled').length !== 0){
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('seller-product-chip__delete')) {
        event.target.closest('.seller-product-chip').remove();
      }
    });
    document.querySelectorAll('.btn-inp-controled').forEach(function (btn) {
      btn.addEventListener('click', function () {
        let param this.previousSibling.previousSibling.value;
        this.previousSibling.previousSibling.value = '';
        let elem = '<div class="seller-product-chip">' + param + '<div class="seller-product-chip__delete"></div></div>';
        this.closest('.seller-profile__row').querySelector('.seller-product__chips').insertAdjacentHTML('beforeend', elem);
      })
    });
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('inp-gallery-uploaded__close')) {
        event.target.parentNode.remove();
      }
    });
  }

});