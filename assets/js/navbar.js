;(function () {
  'use strict'

  var nav = document.getElementById('mainNav')
  var toggle = document.getElementById('siteNavToggle')
  var menu = document.getElementById('siteNavMenu')
  var isHome = document.body.id === 'home-page'

  /* --------------------------------------------------
     Scroll: transparent → solid (home page only)
  -------------------------------------------------- */
  if (isHome && nav) {
    function updateNavBg() {
      if (window.pageYOffset > 80) {
        nav.classList.remove('nav-transparent')
      } else {
        nav.classList.add('nav-transparent')
      }
    }
    nav.classList.add('nav-transparent')
    window.addEventListener('scroll', updateNavBg, { passive: true })
    updateNavBg()
  }

  /* --------------------------------------------------
     Hamburger toggle
  -------------------------------------------------- */
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open')
      toggle.classList.toggle('open', isOpen)
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    })

    /* Close menu when a link is clicked (mobile UX) */
    var links = menu.querySelectorAll('.site-nav__link')
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open')
        toggle.classList.remove('open')
        toggle.setAttribute('aria-label', 'Abrir menú')
        toggle.setAttribute('aria-expanded', 'false')
      })
    })

    /* Close menu on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        menu.classList.remove('open')
        toggle.classList.remove('open')
        toggle.setAttribute('aria-label', 'Abrir menú')
        toggle.setAttribute('aria-expanded', 'false')
      }
    })
  }

  /* --------------------------------------------------
     Active link detection
  -------------------------------------------------- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html'
  if (currentPage === '') currentPage = 'index.html'

  var navLinks = document.querySelectorAll('.site-nav__link')
  navLinks.forEach(function (link) {
    var href = (link.getAttribute('href') || '').split('/').pop()
    if (href === currentPage) {
      link.classList.add('active')
    }
  })
})()

