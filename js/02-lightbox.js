import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img 
         class="gallery__image" 
         src="${preview}" 
         alt="${description}" />
    </a>
`;
    })
    .join("");
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});