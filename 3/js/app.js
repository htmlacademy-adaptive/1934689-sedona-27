const headerBtn = document.querySelector('.header__btn'),
      menu = document.querySelector('.menu')

      headerBtn.addEventListener('click', () => {
        const exp = "true" === headerBtn.getAttribute('aria-expanded')
        headerBtn.setAttribute('aria-expanded', !exp)

        menu.classList.toggle('menu--opened')
        headerBtn.classList.toggle('header__btn--active')

        exp ? headerBtn.setAttribute('aria-label', 'Открыть меню')
            : headerBtn.setAttribute('aria-label', 'Закрыть меню')
      })
