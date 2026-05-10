const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
   
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const index    = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = contactForm.firstName.value.trim();
    const email     = contactForm.email.value.trim();
    const message   = contactForm.message.value.trim();

    if (!firstName || !email || !message) {
      formNote.textContent  = '⚠ Harap lengkapi semua field yang wajib diisi.';
      formNote.style.color  = '#e8a07a';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formNote.textContent  = '⚠ Format email tidak valid.';
      formNote.style.color  = '#e8a07a';
      return;
    }

    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled    = true;

    setTimeout(() => {
      formNote.textContent  = '✓ Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.';
      formNote.style.color  = '#7ec8b0';
      submitBtn.textContent = 'Pesan Terkirim ✓';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.textContent = 'Kirim Pesan ↗';
        submitBtn.disabled    = false;
        formNote.textContent  = '';
      }, 5000);
    }, 1200);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const sections = document.querySelectorAll('section[id]');
if (sections.length > 0) {
  const navLinks = document.querySelectorAll('.main-nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = '#' + section.id;
      }
    });
    navLinks.forEach(link => {
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
