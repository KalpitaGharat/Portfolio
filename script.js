const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const modal = document.querySelector('[data-modal]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalIssuer = document.querySelector('[data-modal-issuer]');
const modalDate = document.querySelector('[data-modal-date]');

document.querySelectorAll('[data-credential]').forEach((credential) => {
  credential.addEventListener('click', () => {
    modalTitle.textContent = credential.dataset.credential;
    modalIssuer.textContent = credential.dataset.issuer;
    modalDate.textContent = credential.dataset.date;
    modal.showModal();
  });
});

document.querySelector('[data-close]').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});
