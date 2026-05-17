const preloader = document.querySelector('[data-preloader]');
const header = document.querySelector('[data-header]');
const progress = document.querySelector('[data-scroll-progress]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const backToTop = document.querySelector('[data-back-to-top]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

document.documentElement.classList.add('snap-enabled');

window.addEventListener('load', () => {
  window.setTimeout(() => preloader?.classList.add('is-hidden'), 650);
});

const closeMenu = () => {
  document.body.classList.remove('nav-open');
  navToggle?.classList.remove('is-open');
  navLinks?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
};

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('is-open');
  navLinks?.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const updateScrollUI = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  if (progress) progress.style.width = `${percent}%`;
  header?.classList.toggle('is-scrolled', scrollTop > 28);
  backToTop?.classList.toggle('is-visible', scrollTop > 650);
};

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = Number(counter.getAttribute('data-counter') || 0);
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progressValue = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      counter.textContent = Math.round(target * eased);
      if (progressValue < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    counterObserver.unobserve(counter);
  });
}, { threshold: 0.4 });

document.querySelectorAll('[data-counter]').forEach((counter) => counterObserver.observe(counter));

const activeLinkObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const id = entry.target.getAttribute('id');
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { threshold: 0.38 });

document.querySelectorAll('main section[id]').forEach((section) => activeLinkObserver.observe(section));

const progressCardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      progressCardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.45 });

document.querySelectorAll('.progress-card').forEach((card) => progressCardObserver.observe(card));

const scrollers = document.querySelectorAll('.responsive-scroll');
scrollers.forEach((scroller) => {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  scroller.addEventListener('pointerdown', (event) => {
    isDown = true;
    scroller.setPointerCapture(event.pointerId);
    startX = event.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
  });

  scroller.addEventListener('pointerleave', () => { isDown = false; });
  scroller.addEventListener('pointerup', () => { isDown = false; });

  scroller.addEventListener('pointermove', (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - scroller.offsetLeft;
    const walk = (x - startX) * 1.25;
    scroller.scrollLeft = scrollLeft - walk;
  });
});
