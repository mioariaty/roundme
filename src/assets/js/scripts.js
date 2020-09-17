(function () {
  "use-strict";
  const btnToggle = document.querySelector('.navbar__toggler');
  const navCollapes = document.querySelector('.navbar-collapse');
  const btnClose = document.querySelector('.btn--close');

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      navCollapes.classList.add('hidden');
    } else {
      navCollapes.classList.remove('hidden');
    }
  };

  const handleToggleClicked = (e) => {
    e.preventDefault();
    if (navCollapes.classList.contains('hidden')) {
      navCollapes.classList.remove('hidden');
    } else {
      navCollapes.classList.add('hidden');
    }
  };

  handleResize();
  btnToggle.addEventListener('click', handleToggleClicked);
  btnClose.addEventListener('click', handleToggleClicked);
  window.addEventListener('resize', handleResize);

  function stickyElement(e) {
    const bannerSection = document.querySelector('.banner');
    const bannerHeight = getComputedStyle(bannerSection).height.split('px')[0];
    const header = document.querySelector(".header");
    const scrollValue = window.scrollY;

    if (scrollValue > bannerHeight) {
      header.classList.add('is-fixed');

    } else if (scrollValue < bannerHeight) {
      header.classList.remove('is-fixed');
    }
  }
  window.addEventListener('scroll', stickyElement);

})();
