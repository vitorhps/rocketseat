// Variables
const imageContainer = document.querySelector('.image');
const button = document.querySelector('button');
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Events
button.addEventListener('click', updateImage);
imageContainer.addEventListener('click', updateAll);

// Methods
async function getExternalImage() {
  const response = await fetch('https://source.unsplash.com/random');

  imageContainer.innerHTML = `<img src="${response.url}" />`;
}

function getState() {
  const { src } = document.querySelector('.image img');

  const index = favorites.indexOf(src);
  const existsInLocalStorage = index !== -1;

  return { src, index, existsInLocalStorage };
}

function updateFavorites() {
  const { src, index, existsInLocalStorage } = getState();

  if (existsInLocalStorage) {
    favorites.splice(index, 1);
  } else {
    favorites.push(src);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateClasses() {
  const { existsInLocalStorage } = getState();

  imageContainer.classList.remove('fav');
  if (existsInLocalStorage) {
    imageContainer.classList.add('fav');
  }
}

async function updateImage() {
  await getExternalImage();
  updateClasses();
}

function updateAll() {
  updateFavorites();
  updateClasses();
}

// Bootstrap
getExternalImage();
