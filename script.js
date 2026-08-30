/* ============================================================
   script.js
   Handles all interactive / responsive behavior:
   - mobile nav open/close (hamburger <-> X)
   - auto-close mobile nav if window is resized back to desktop
   - close mobile nav after tapping a link (better UX on phones)
   - scroll-reveal animation for sections
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const burger   = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  const MOBILE_BREAKPOINT = 860; // must match the media query in style.css

  function openNav() {
    navLinks.classList.add('open');
    burger.classList.add('is-active');
    burger.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    navLinks.classList.remove('open');
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
  }

  function toggleNav() {
    navLinks.classList.contains('open') ? closeNav() : openNav();
  }

  burger.addEventListener('click', toggleNav);

  // Close the menu automatically once a link is tapped (mobile only)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  // If the viewport is resized past the mobile breakpoint while the
  // menu is open (e.g. rotating a tablet, or resizing a browser window),
  // reset the menu so it doesn't get stuck open on desktop layout.
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeNav();
      }
    }, 150);
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback for very old browsers without IntersectionObserver support
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

});
