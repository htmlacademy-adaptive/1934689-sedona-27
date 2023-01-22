const headerBtn = document.querySelector('.header__button'),
      menu = document.querySelector('.menu')
      bodyMenu = document.querySelector('.page__body')


      headerBtn.addEventListener('click', () => {
        const exp = "true" === headerBtn.getAttribute('aria-expanded')
        headerBtn.setAttribute('aria-expanded', !exp)

        menu.classList.toggle('menu--opened')
        headerBtn.classList.toggle('header__button--active')
        bodyMenu.classList.toggle('page__body--menu')


        exp ? headerBtn.setAttribute('aria-label', 'Открыть меню')
            : headerBtn.setAttribute('aria-label', 'Закрыть меню')
      });

            document.addEventListener('DOMContentLoaded', function (Event) {
              const  header = document.querySelector('.header')
              const  headerButton = document.querySelector('.header__button')
              const  menu = document.querySelector('.header__top')
            header.classList.remove('header--no-js'),
            headerButton.classList.remove('header__button--no-js'),
            menu.classList.remove('header__top--no-js-catalog')
            });
