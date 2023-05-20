import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item"><a class="gallery__link" href="${preview}">
    <img class="gallery__image" src="${original}" 
    data-source="${original}" alt="${description}" />
  </a></li>`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  const imageTarget = event.target;
  if (imageTarget.nodeName !== 'IMG') {
    return imageTarget;
  }

  
  const instance = basicLightbox.create(`
    <img class="gallery__image"
    src="${imageTarget.dataset.source}"
    alt="${event.target.alt}"
    />`,
    {
      onShow: () => {document.addEventListener('keydown', closeModal)},
      onClose: () => {document.removeEventListener('keydown', closeModal)},
    });

  instance.show();

  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  
  event.stopPropagation();
}