import countryInfo from '../templates/countryInfo.hbs';
import countriesList from '../templates/countriesList.hbs';
import notice from './pnotifyAlert';
import { refs } from './workDom';

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.length === 1) {
        return refs.item.insertAdjacentHTML('beforeend', countryInfo(...data));
      }

      if (data.length > 1 && data.length <= 10) {
        return refs.item.insertAdjacentHTML('beforeend', countriesList(data));
      }

      if (data.length > 10) {
        return notice();
      }
    })
    .catch(err => console.warn(err));
}
