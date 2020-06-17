// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery),
// возвращающей промис с массивом стран, результат запроса к API.
import debounce from 'lodash.debounce';

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => {
      return res.json;
    })
    .then(data => console.log(data))
    .catch(err => console.warn(err));
}

// console.log(fetchCountries());

const refs = {
  input: document.querySelector('#country'),
  item: document.querySelector('.js_country'),
};

function handleInput(e) {
  const value = e.target.value;
  console.log('value', value);
  fetchCountries(value);
}

refs.input.addEventListener('input', debounce(handleInput, 500));
