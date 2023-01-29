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

  const isGalleryImageEl = evt.target.nodeName === "IMG";
  if (!isGalleryImageEl) {
    return;
  }

  const bigImgSrc = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
  <img src="${bigImgSrc}" width="900" height="600">`,
    {
      onShow: (instance) =>
        window.addEventListener("keydown", onEscKeyPress),
      onClose: (instance) =>
        window.removeEventListener("keydown", onEscKeyPress),
    }
  );

  instance.show();

  function onEscKeyPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}


