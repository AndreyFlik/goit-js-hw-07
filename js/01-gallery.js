import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const body = document.body;
// console.log(body);

const list = body.firstElementChild;
// console.log(list);

const markup = galleryItems
  .map((image) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image"
src="${image.preview}"
data-source="${image.original}"
alt="${image.description}"/></a></div>`;
  })
  .join("");

const imagesHtml = list.insertAdjacentHTML("afterend", markup);
// console.log(markup);
