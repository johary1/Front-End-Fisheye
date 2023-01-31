"use strict";

export default class LikeCounter {
  // get vote up or down from likes
  constructor() {
    let media = document.getElementById("ph-works");

    media.addEventListener("click", (e) => {
      // get class for element on click
      let classListTarget =
        typeof e.target.classList === "undefined"
          ? []
          : e.target.classList.value.split(" ");
      //console.log(classListTarget);
      /*listen to click on heart-btn thanks to its class index
      if class "heart-btn" exixts hasClassBtn is set to true else it is set to false
      */
      let hasClassBtn = -1 != classListTarget.indexOf("heart-btn");
      //console.log(hasClassBtn);
      if (hasClassBtn) {
        let totalLikes = parseInt(
          document.getElementById("total-likes").innerHTML
        );
        let counterLike =
          e.target.parentNode.firstElementChild.firstElementChild;
        let likeValue = parseInt(counterLike.innerHTML);
        let isLiked = -1 != classListTarget.indexOf("isLiked");
        // decrement or increment totalLikes
        document.getElementById("total-likes").innerHTML = isLiked
          ? --totalLikes
          : ++totalLikes;
        counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;
        // change likes icon to be empty or filled onclick
        if (isLiked) {
          e.target.classList.remove("isLiked");
          e.target.classList.replace("fas", "far");
        } else {
          e.target.classList.add("isLiked");
          e.target.classList.replace("far", "fas");
        }
      }
    });
  }
}
