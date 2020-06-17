// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery),
// возвращающей промис с массивом стран, результат запроса к API.
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

export const refs = {
  input: document.querySelector('#country'),
  item: document.querySelector('.js_country'),
};

function handleInput(e) {
  e.preventDefault();

  // console.log('event', e);
  // console.log('e.target', e.target.value);
  // console.log('e.currentTarget', e.currentTarget);

  refs.item.innerHTML = '';

  const value = e.target.value;
  fetchCountries(value);
}

refs.input.addEventListener('input', debounce(handleInput, 500));
