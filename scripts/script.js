(function () {
  "use strict";

  // This shortens the syntax for writing selectors
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  };

  // Easy events listener function : to shorten event listener statements
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  };

  // Easy on scroll events listener
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  // mobile-nav icon toggling.
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // typed.js animation in the hero-section
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  };

  // unhiding back-to-top-btn
  const backToTopBtn = select('.back-to-top-btn');

  if (backToTopBtn) {
    const toggleBackToTopBtn = () => {
      if (window.scrollY > 100) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBackToTopBtn);
    onscroll(document, toggleBackToTopBtn);
  };

  /** navbar links active state on scroll.*/
  let navbarLinks = select('#navbar .scroll_to', true);

  const activeNavbarLink = () => {
    let position = window.scrollY + 200;

    navbarLinks.forEach(navbarLink => {
      if (!navbarLink.hash) return;

      let section = select(navbarLink.hash);
      if (!section) return;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarLink.classList.add('active');
      } else {
        navbarLink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', activeNavbarLink)
  onscroll(document, activeNavbarLink);

  /*! coming back for this */
  // const mySkillSets = select('.each-stack', true);

  // const removeActiveClasses = () => {
  //   mySkillSets.forEach((skillSet) => {
  //     skillSet.classList.remove('active');
  //   });
  // };

  // mySkillSets.forEach((skillSet) => {
  //   on('click', '.each-stack', () => {
  //     removeActiveClasses();
  //     skillSet.classList.add('active');
  //   }, true)
  // });

  // aos initialisation
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  new PureCounter();

})();