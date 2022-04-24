"use strict";

const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    let imgOfDrinks = [];
    data.drinks.forEach((obj) => {
      let [drink, drinkImg] = Object.values(obj);
      imgOfDrinks.push(drinkImg);
    });
    return imgOfDrinks;
  })
  .then((imgOfDrinks) => {
    // all drinks in arr
    const imgContainer = document.querySelector(".img-container");

    let imgArr = imgOfDrinks;

    for (let i = 0; i < imgArr.length; i++) {
      let html = `<img src="${imgArr[i]}" alt="" />`;
      imgContainer.insertAdjacentHTML("beforeend", html);
    }
  })
  .then(() => {
    const imgs = document.querySelectorAll("#imgs img");
    console.log(imgs);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

let index = 0;
// let interval = setInterval(run, 2000);
function run() {
  index++;
  changeImg();
}

function changeImg() {
  // check beginning
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length;
  }
  imgs.style.transform = `translate(${-index * 500}px)`;
}
