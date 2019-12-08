const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButton = document.querySelectorAll('.plan button');

const modalNoButton = document.querySelector('.modal__action--negative');

const mobileSideNav = document.querySelector('.mobile-nav');
const toggleSideNavButton = document.querySelector('.toggle-button');

var ctaButton = document.querySelector('.main-nav__item--cta');

selectPlanButton.forEach(button =>
  button.addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.classList.add('open');
  })
);

const hideModalAndBackdrop = () => {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
};

backdrop.addEventListener('click', () => {
  mobileSideNav.classList.remove('open');
  hideModalAndBackdrop();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', hideModalAndBackdrop);
}

toggleSideNavButton.addEventListener('click', () => {
  backdrop.classList.add('open');
  mobileSideNav.classList.add('open');
});

ctaButton.addEventListener('animationstart', e => {
  console.log('Anim started!', e);
});

ctaButton.addEventListener('animationend', e => {
  console.log('Anim ended!', e);
});

ctaButton.addEventListener('animationiteration', e => {
  console.log('Anim iterated!', e);
});
