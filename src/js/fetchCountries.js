// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery),
// возвращающей промис с массивом стран, результат запроса к API.

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/u`)
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

console.log(refs.item);
