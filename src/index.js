const fetchBreedsBtn = document.querySelector('.btn');
const breedSelect = document.querySelector('.breed-select');

fetchBreedsBtn.addEventListener('click', () => {
  try {
    fetchBreedsBtn().then(data => renderSelect(data));
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
  console.log(e.target.value);
});
