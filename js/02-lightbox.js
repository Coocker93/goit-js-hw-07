import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${original}" data-source="${preview}" alt="${description}" />
    </a>
  </li>`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const options = {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt'
};
const lightbox = new SimpleLightbox('.gallery a', options);

console.log(galleryItems);
