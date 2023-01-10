//Mettre le code JavaScript lié à la page photographer.html
const contactFormTitle = document.querySelector("small");
const pricing = document.querySelector(".average");
console.log(pricing);
const photographContainer = document.querySelector(".photograph-header");

// get url param
const userIdParam = window.location.search;
//console.log(userIdParam);
// get id param
const urlParams = new URLSearchParams(userIdParam);

// get id value
let idUser = urlParams.get("id");
idUser = parseInt(idUser);
//console.log(idUser);

let photographers = [];

const mediaContainer = document.querySelector(".row");
const getPhotographers = async () => {
  await fetch(`data/photographers.json`)
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  //console.log(photographers);

  photographDisplay();
};

async function photographDisplay(data) {
  //await getPhotographers();

  photographers.forEach((photographer) => console.log(photographer.id));

  photographContainer.innerHTML += photographers
    // filter by unique id
    .filter((photographer) => photographer.id === idUser)
    .map(
      (photographer) =>
        `<div class="photographer__info">
        <h2 class="photographer__name">${photographer.name}</h2>
        <p class="photographer__localisation">${photographer.country}, ${photographer.city}</p>
        <p class="photographer__tagline">${photographer.tagline}</p>
        </div>
        <div class="photographer__picture align-item"><a><img src="../../assets/photographers/${photographer.portrait}" alt="${photographer.name}"></a></div>
        
        `
    )
    .join("");
  // add and display photographer name to contact form
  contactFormTitle.textContent = photographers
    .filter((photographer) => photographer.id === idUser)
    .map(
      (photographer) =>
        `${photographer.name}
          `
    );

  pricing.textContent = photographers
    .filter((photographer) => photographer.id === idUser)
    .map(
      (photographer) =>
        `${photographer.price}€ / jour
          `
    );

  return data;
}

let medias = [];
const btnSort = document.querySelectorAll(".btnSort");
const getMedias = async () => {
  await fetch(`data/photographers.json`)
    .then((res) => res.json())
    .then((data) => (medias = data.media));
  photographMediaDisplay();
  console.log(medias);
};
getMedias();
const photographMediaDisplay = async () => {
  let sortMethod = "minToMax";

  medias.forEach((media) => {
    if (idUser === media.photographerId) {
      //sort media
      btnSort.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sortMethod = e.target.id;
          console.log(sortMethod);

          //photographMediaDisplay();
          //getMedias;
        });
      });
      medias.sort((a, b) => {
        if (sortMethod === "maxToMin") {
          console.log("max");
          return b.likes - a.likes;
        } else if (sortMethod === "minToMax") {
          console.log("min");
          return a.likes - b.likes;
        } else if (sortMethod === "alpha") {
          console.log("alpha");
          return a.title.localeCompare(b.title);
        }
      });
    }
  });
  medias.forEach((media) => {
    if (idUser === media.photographerId) {
      const mediaSection = document.querySelector(".row");
      console.log(mediaSection);
      const mediaModel = photographerMediaFactory(media);
      //console.log(mediaModel);
      const userMediaDOM = mediaModel.getUserMediaDOM(media);
      //console.log(userMediaDOM);
      mediaSection.appendChild(userMediaDOM);

      // LIGHTBOX

      //Get elements from the DOM
      const listMedias = document.querySelectorAll(
        ".gallery > img, .gallery > video"
      );
      const lightbox = document.querySelector(".lightbox");
      const mainImg = document.querySelector(".lightbox > img");
      const mainVideo = document.querySelector(".lightbox > video");
      const arrLeft = document.querySelector(".arrow-left");
      const arrRight = document.querySelector(".arrow-right");
      //Variable holding the image index
      let imgIndex = 0;

      //Opening the lightbox
      //====================
      //loop through images
      listMedias.forEach((media) => {
        //Add click event to each image
        media.addEventListener("click", (e) => {
          //Set main image source to clicked image source
          console.log("hereeee");
          console.log(e.target);
          if (e.target.tagName === "IMG") {
            mainImg.src = e.target.src;
            mainImg.style.display = "block";
            mainVideo.style.display = "none";
          } else {
            mainVideo.src = e.target.src;
            mainVideo.style.display = "block";
            mainImg.style.display = "none";
          }

          //Set image index to current image index
          /*Basically what I'm doing here is taking the images Array and searching for an item that matches the 'img'. That way we get the index of the image we click on. I will leave a link for destructuring and the indexOf method so that you can explore them yourself and learn more.*/
          imgIndex = [...listMedias].indexOf(media);
          //Show the lightbox
          lightbox.style.display = "flex";
          //Add smooth transition
          setTimeout(() => {
            lightbox.style.opacity = "1";
          }, 10);
        });
      });

      //Closing the lightbox
      //====================

      const closeLightbox = document.querySelector(".lightbox__close");
      closeLightbox.addEventListener("click", (e) => {
        //Add smooth transition
        lightbox.style.opacity = "0";
        //Hide the modal after transition
        setTimeout(() => {
          lightbox.style.display = "none";
        }, 500);
      });

      //Changing to previous image
      //====================
      //Add click event to previous arrow
      arrLeft.addEventListener("click", (e) => {
        //Decrement image index
        imgIndex--;
        //If the index is below the first image
        if (imgIndex < 0) {
          //Set index to last image
          imgIndex = listMedias.length - 1;
        }
        //Set main image to updated image index
        if (e.target.tagName === "IMG") {
          mainImg.src = listMedias[imgIndex].src;
          mainImg.style.display = "block";
          mainVideo.style.display = "none";
        } else {
          mainVideo.src = listMedias[imgIndex].src;
          mainImg.style.display = "none";
          mainVideo.style.display = "block";
        }
      });

      //Changing to next image
      //====================
      //Add click event to next arrow
      arrRight.addEventListener("click", () => {
        //Increment image index
        imgIndex++;
        //If the index is above the last image
        if (imgIndex > listMedias.length - 1) {
          //Set index to first image
          imgIndex = 0;
        }
        //Set main image to updated image index
        mainImg.src = listMedias[imgIndex].src;
        mainVideo.src = listMedias[imgIndex].src;
      });
    }
  });
};

window.addEventListener("load", getPhotographers, getMedias);
