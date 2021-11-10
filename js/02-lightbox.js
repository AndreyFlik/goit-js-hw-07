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

const clickImg = document.querySelectorAll(".gallery__item");

const clickImages = [...clickImg].map((img) => {
  img.addEventListener("click", selectImg);

  function selectImg(event) {
    event.preventDefault();
    const { dataset, alt } = event.target;
    if (event.target.nodeName !== "IMG") {
      return;
    }
    var lightbox = new SimpleLightbox(".gallery a", {
      captionType: "attr",
      captionsData: "alt",
      captionDelay: 250,
    });
  }
});
