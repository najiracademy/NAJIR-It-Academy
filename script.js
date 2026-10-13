const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
let currentLang = 'bn';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  document.querySelectorAll('[data-bn][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langToggle.textContent = lang === 'bn' ? 'English' : 'বাংলা';
  langToggle.setAttribute('aria-label', lang === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন');
}
langToggle.addEventListener('click', () => setLanguage(currentLang === 'bn' ? 'en' : 'bn'));
menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});
navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
