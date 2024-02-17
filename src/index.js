import axios from 'axios';
import { fetchBreeds } from './cat-api.js';

const fetchBreedsBtn = document.querySelector('.btn');
const breedSelect = document.querySelector('.breed-select');

fetchBreedsBtn.addEventListener('click', () => {
  try {
    fetchBreeds().then(data => renderSelect(data));
  } catch (error) {
    console.log(error);
  }
});

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}"></option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
}

breedSelect.addEventListener('change', e => {
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${e.target.value}`
    )
    .then(res => console.log(e.target.value));
});
