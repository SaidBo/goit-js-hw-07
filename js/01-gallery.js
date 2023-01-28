import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onGalleryItemClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </div>
`;
    })
    .join("");
}

function onGalleryItemClick(evt) {
  evt.preventDefault();

  const isGalleryImageEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }

  const bigImgSrc = evt.target.dataset.source;

  const fullScreenImg = basicLightbox.create(`
  		<img src="${bigImgSrc}" width="900" height="600">`);
  fullScreenImg.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      fullScreenImg.close();
    }
  });
} 
