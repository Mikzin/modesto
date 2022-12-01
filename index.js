const form = document.querySelector('.form__subscription');
const formSecond = document.querySelector('.form__subscription-second');
const submitFirst = document.querySelector('.form__subscription-button');
const btnBack = document.querySelector('.button-back');

function toggle() {
  if (
    !form.classList.contains('hide') &&
    formSecond.classList.contains('hide')
  ) {
    form.classList.add('hide');
    formSecond.classList.remove('hide');
  } else {
    form.classList.remove('hide');
    formSecond.classList.add('hide');
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  toggle();
});

btnBack.addEventListener('click', (evt) => {
  evt.preventDefault();

  toggle();
});
