document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     1. Mobile Menu Toggle
     ============================================================ */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function setMenu(open) {
    hamburger.classList.toggle('active', open);
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => {
    setMenu(!mobileMenu.classList.contains('open'));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) {
      setMenu(false);
    }
  });

  /* ============================================================
     2. Active Nav Highlighting
     ============================================================ */
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  const sections = document.querySelectorAll('section[id]');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );

  sections.forEach((section) => navObserver.observe(section));

  /* ============================================================
     3. Smooth scroll for anchor links
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerH = document.querySelector('.site-header').offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  });

  /* ============================================================
     4. Scroll Reveal Animations
     ============================================================ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ============================================================
     5. Typewriter Hero Tagline
     ============================================================ */
  const typewriterTitle = document.getElementById('typewriter-title');
  if (typewriterTitle) {
    const allWords = 'Frontend Developer building clean & responsive web experiences.'.split(' ');
    const gradientSet = new Set(['clean', '&', 'responsive']);
    const caretMarkup = '<span class="caret" aria-hidden="true"></span>';
    let wordIndex = 0;

    function buildMarkup(count) {
      return allWords
        .slice(0, count)
        .map((word) =>
          gradientSet.has(word)
            ? '<span class="gradient-text">' + word + '</span>'
            : word
        )
        .join(' ');
    }

    const fullMarkup = buildMarkup(allWords.length) + ' ' + caretMarkup;

    function reserveSpace() {
      const current = typewriterTitle.innerHTML;
      typewriterTitle.innerHTML = fullMarkup;
      typewriterTitle.style.minHeight = typewriterTitle.offsetHeight + 'px';
      typewriterTitle.innerHTML = current;
    }

    reserveSpace();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(reserveSpace);
    }
    window.addEventListener('resize', reserveSpace);

    function typeNext() {
      wordIndex++;
      typewriterTitle.innerHTML = buildMarkup(wordIndex) + ' ' + caretMarkup;
      if (wordIndex < allWords.length) {
        setTimeout(typeNext, 300);
      } else {
        setTimeout(() => {
          typewriterTitle.innerHTML = caretMarkup;
          wordIndex = 0;
          setTimeout(typeNext, 300);
        }, 3000);
      }
    }

    typewriterTitle.innerHTML = caretMarkup;
    setTimeout(typeNext, 400);
  }

  /* ============================================================
     6. Back to Top
     ============================================================ */
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============================================================
     7. Contact Form Handler (Web3Forms)
     ============================================================ */
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const submitBtn = document.getElementById('submit-btn');
  let toastTimer;

  function showToast(message, isError = false) {
    toast.textContent = message;
    toast.classList.toggle('error', isError);
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-label').innerHTML = 'Sending...';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: 'b066918e-3611-4943-9145-26ec3b1f45cb',
            subject: 'Portfolio Contact from ' + name,
            name,
            email,
            message
          })
        });

        const result = await response.json();

        if (result.success) {
          form.reset();
          showToast('Message sent! I\'ll get back to you soon.');
        } else {
          showToast('Something went wrong. Please try again.', true);
        }
      } catch (err) {
        showToast('Network error. Please try again.', true);
      } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-label').innerHTML =
          'Send Message <span aria-hidden="true">&#8594;</span>';
      }
    });
  }

});
