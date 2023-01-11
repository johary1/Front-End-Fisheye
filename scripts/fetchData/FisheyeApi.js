"use strict";

// GET ALL DATA ONCE
export default class FishEyeApi {
  async getDataFishEye() {
    let url = "data/photographers.json";
    let response = await fetch(url);
    let data = await response.json();

    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    return {
      photographers: dataPhotographers,
      media: dataMedias,
    };
  }
}
