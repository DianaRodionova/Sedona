const successPopup = document.querySelector('.modal__success');
const failurePopup = document.querySelector('.modal__failure');
const openPopupButton = document.querySelector('.button-open');
const reviewForm = document.querySelector('.review__form');
const reviewName = reviewForm.querySelector('.review__name');
const reviewSurname = reviewForm.querySelector('.review__surname');
const buttonSuccessClose = successPopup.querySelector('.button__success-close');
const buttonFailureClose = successPopup.querySelector('.button__failure-close');

openPopupButton.addEventListener('click', function (evt) {
  if (!reviewName.value || !reviewSurname.value) {
    evt.preventDefault();
    failurePopup.classList.add('modal--open');
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
}
);

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal--open');
  }
});
