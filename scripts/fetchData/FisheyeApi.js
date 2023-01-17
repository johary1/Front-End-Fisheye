"use strict";

// GET ALL DATA AT ONCE
export default class FishEyeApi {
  async getDataFishEye() {
    let url = "data/photographers.json";
    // generate the Response object
    let response = await fetch(url);
    // get all data
    let data = await response.json();
    // use destructuring to create 2 arrays for Photographers and Medias
    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    return {
      photographers: dataPhotographers,
      media: dataMedias,
    };
  }
}
