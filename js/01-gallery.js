import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((image) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image"
src="${image.preview}"
data-source="${image.original}"
alt="${image.description}"/></a></div>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", markup);

const clickImg = document.querySelector(".gallery");

// const clickImages = [...clickImg].map((img) => {
clickImg.addEventListener("click", selectImg);

function selectImg(event) {
  event.preventDefault();
  const { dataset, alt } = event.target;
  if (event.target.nodeName !== "IMG") {
    return;
  }
  basicLightbox
    .create(
      `<img width="1400" height="900" src="${dataset.source}" alt="${alt}">`
    )
    .show();
}
// });
