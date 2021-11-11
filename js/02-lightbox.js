import { galleryItems } from "./gallery-items.js";

// Change code below this line
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((image) => {
    return `<a class="gallery__item" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
  />
</a>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
