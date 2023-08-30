import Notiflix from 'notiflix';
import axios from "axios";
import SlimSelect from 'slim-select';



const API_KEY =
  " live_l11LXxb6iPC2lTFT2hw6tz8kSwkgGwnR149gpObWelRqJvrODqIE7fnJSgs0IZo4";

const BASE_URL = "https://api.thecatapi.com/v1/images/search";

axios.defaults.headers.common["x-api-key"] =
  " live_l11LXxb6iPC2lTFT2hw6tz8kSwkgGwnR149gpObWelRqJvrODqIE7fnJSgs0IZo4";

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loade'),
  error: document.querySelector('.error'),
  catinfo: document.querySelector('.cat-info')
};

new SlimSelect({
  // select: '#selectElement'
   select: document.querySelector('#selectElement')
});
    
  
 function fetchBreeds(name) {
  const BASE_URL = "https://api.thecatapi.com/v1/images/search";
  return axios
    .GET(BASE_URL)
    .then(responce => responce.json())
    .then(responce => responce.data)
      if (!res.ok) {
        return Notify.failure('cats is not available');
      }
      return res.json()
    .catch(err => error(err));
}
//  function fetchCatByBreed(breedId) {
//      fetch(`${BASE_URL}?
//     &breed_ids=beng&api_key=${API_KEY}`)   
//     .then(res => {
//       if (!res.ok) {
//         return Notify.failure('cats is not available');
//       }
//       return res.json()
//   })
// };
export { fetchBreeds, fetchCatByBreed };

