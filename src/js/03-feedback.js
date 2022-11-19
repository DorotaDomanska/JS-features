import throttle from 'lodash.throttle';

const form = document.querySelector('form');

form.addEventListener('input', _.throttle(handleInput, 500));

const { email, message } = form.elements;

function handleInput() {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  console.log({ email: email.value, message: message.value });
}

const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);

fillForm();

function fillForm() {
  email.value = parsedData.email || '';
  message.value = parsedData.message || '';
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.clear();
}
