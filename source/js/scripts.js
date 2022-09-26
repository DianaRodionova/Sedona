var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const successPopup = document.querySelector('.modal__success');
const failurePopup = document.querySelector('.modal__failure');
const openPopupButton = document.querySelector('.button-open');
const reviewForm = document.querySelector('.review__form');
const clientName = reviewForm.querySelector('.client__name');
const clientSurname = reviewForm.querySelector('.client__surname');
const clientTel = reviewForm.querySelector('.client__tel');
const clientEmail = reviewForm.querySelector('.client__email');
const buttonSuccessClose = successPopup.querySelector('.button__success-close');
const buttonFailureClose = failurePopup.querySelector('.button__failure-close');

openPopupButton.addEventListener('submit', function (evt) {
  if (!clientName.value || !clientSurname.value || !clientTel.value || !clientEmail.value) {
    evt.preventDefault();
    failurePopup.classList.add('modal--open');
    failurePopup.classList.add('modal--error');
  } else {
    evt.preventDefault();
    successPopup.classList.add('modal--open');
  }
}
);

buttonSuccessClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    successPopup.classList.remove('modal--open');
}
);

buttonFailureClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  failurePopup.classList.remove('modal--open');
  failurePopup.classList.remove('modal--error');
}
);

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    successPopup.classList.remove('modal--open');
    failurePopup.classList.remove('modal--open');
    failurePopup.classList.remove('modal--error');
  }
});
