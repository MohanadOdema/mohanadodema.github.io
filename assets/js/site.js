// Mobile navigation toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
      }
    });
  }
})();
