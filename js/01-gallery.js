import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) =>
`<li class="gallery__item"><a class="gallery__link" href="${preview}">
<img class="gallery__image" src="${original}" data-source="${original}" alt="${description}" />
</a></li>`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const currentItem = galleryItems.find((gallery) => gallery.original === event.target.dataset.source);

  const instance = basicLightbox.create(`<img class="gallery__image" src="${currentItem.original}" alt="${currentItem.description}"/>`) 
  instance.show();

  document.addEventListener('keydown', onEscapePress);

  function onEscapePress(event) {
    if (event.key === 'Escape') { 
      instance.close();
      document.removeEventListener('keydown', onEscapePress);
    }
  }

  event.stopPropagation();
}

console.log(galleryItems);