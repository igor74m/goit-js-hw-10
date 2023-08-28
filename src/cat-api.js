import Notiflix from 'notiflix';
import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  " live_l11LXxb6iPC2lTFT2hw6tz8kSwkgGwnR149gpObWelRqJvrODqIE7fnJSgs0IZo4";

export function fetchBreeds(name) {
   fetch(`https://api.thecatapi.com/v1/images/search?
    limit=10&breed_ids=beng&api_key=
    live_l11LXxb6iPC2lTFT2hw6tz8kSwkgGwnR149gpObWelRqJvrODqIE7fnJSgs0IZo4`)
    .then(res => {
      if (!res.ok) {
        return Notify.failure('cats is not available');
      }
      return res.json()
  })
}
console.log(res.json())
// export function fetchCatByBreed(breedId) { 
//      fetch(`https://api.thecatapi.com/v1/images/search?
//     breed_ids=beng&api_key=
//     live_l11LXxb6iPC2lTFT2hw6tz8kSwkgGwnR149gpObWelRqJvrODqIE7fnJSgs0IZo4`)
//     .then(res => {
//       if (!res.ok) {
//         return Notify.failure('cats is not available');
//       }
//       return res.json()
//   })
// }
// export default fetchCountries;
// import Notiflix from 'notiflix';
// function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v2/name/${name}?fields=name.official,capital,population,flags.svg,languages`
//   ).then(response => {
//     if (!response.ok) {
//       return Notiflix.Notify.failure(
//         'Oops, there is no country with that name.'
//       );
//     }
//     return response.json();
//   });
// }
// import fetchCountries from './js/fetchCountries.js';
// import './css/styles.css';
// import Notiflix from 'notiflix';

// const debounce = require('lodash.debounce');
// const DEBOUNCE_DELAY = 300;

// const ref = {
//   searchInput: document.querySelector('#search-box'),
//   countryList: document.querySelector('.country-list'),
//   wrapperInfo: document.querySelector('.country-info'),
// };

// ref.searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// function onSearch(e) {
//   cleanInput();
//   const name = e.target.value.trim();
//   if (name === '') {
//     return;
//   }
//   fetchCountries(name)
//     .then(name)
//     .then(response => {
//       if (response.length > 10) {
//         Notiflix.Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       } else {
//         if (response.length === 1) {
//           countryFullInfo(response);
//         } else {
//           countrySearchList(response);
//         }
//       }
//     })
//     .catch(error => {})
//     .finally(() => {});
// }

// function cleanInput() {
//   ref.countryList.innerHTML = '';
//   ref.wrapperInfo.innerHTML = '';
// }

// function countryFullInfo(name) {
//   const searchMarkup = name
//     .map(({ name, flags, capital, population, languages }) => {
//       return `<img 
//       src="${flags.svg}" 
//       alt="${name.official}" width = "25" height = "15" />
//       <h1>${name.official}</h1>
//           <p>Capital: ${capital}</p>
//           <p>Population: ${population}</p>
//           <p>Languages: ${languages.map(el => el.name).join(', ')}</p>`;
//     })
//     .join('');
//   ref.wrapperInfo.innerHTML = searchMarkup;
//   ref.countryList.innerHTML = '';
// }

// function countrySearchList(name) {
//   const searchList = name
//     .map(({ name, flags }) => {
//       return `<li>
//     <img src="${flags.svg}" 
//     alt="${name.official}" 
//     width = "25" 
//     height = "15" />
//   <p>${name.official}</p>
// </li>`;
//     })
//     .join('');

//   ref.countryList.innerHTML = searchList;
//   ref.wrapperInfo.innerHTML = '';
// }