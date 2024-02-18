import Notiflix from 'notiflix'; // Dodaj import biblioteki Notiflix
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

error.classList.add('hidden');

try {
  loader.classList.remove('hidden');
  fetchBreeds().then(data => renderSelect(data));
} catch (error) {
  console.log(error);
}

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
  loader.classList.add('hidden');
}

breedSelect.addEventListener('change', e => {
  loader.classList.remove('hidden');
  catInfo.innerHTML = ''; // Wyczyść zawartość catInfo przed wyświetleniem nowych danych
  fetchCatByBreed(e.target.value)
    .then(data => renderCat(data[0]))
    .catch(() => {
      Notiflix.Notify.failure('Error checking cat:');
      loader.classList.add('hidden');
    });
});

function renderCat(catData) {
  const { url } = catData;
  const { description, name, temperament } = catData.breeds[0];
  catInfo.insertAdjacentHTML(
    'beforeend',
    `<div>
        <h2 class="name">${name}</h2>
        <img src="${url}" alt="${name}" class="cat-image"/>
        <p class="description">${description}</p>
        <p class="temperament"><strong>Temperament:</strong> ${temperament}</p>
    </div>`
  );
  loader.classList.add('hidden');
}
