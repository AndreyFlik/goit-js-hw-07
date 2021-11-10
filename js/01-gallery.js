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

const clickImg = document.querySelectorAll(".gallery__item");

const targetImg = document
  .querySelector(".gallery__image")
  .getAttribute("data-source");

const clickImages = [...clickImg].map((img) => {
  img.addEventListener("click", selectImg);

  function selectImg(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
      return;
    }
    basicLightbox
      .create(`<img width="1400" height="900" src="${targetImg}">`)
      .show();
  }
});
