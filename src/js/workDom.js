import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

export const refs = {
  input: document.querySelector('#country'),
  item: document.querySelector('.js_country'),
};

function handleInput(e) {
  e.preventDefault();

  refs.item.innerHTML = '';

  const input = e.target.value;
  fetchCountries(input);
}

refs.input.addEventListener('input', debounce(handleInput, 500));
