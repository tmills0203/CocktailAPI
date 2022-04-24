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
    // node drink imgs array
    const nodeListArr = document.querySelectorAll("#imgs img");
    let imgs = document.querySelector("#imgs");

    let idx = 0;
    setInterval(function () {
      idx++;
      if (idx > nodeListArr.length - 1) {
        idx = 0;
      } else if (idx < 0) {
        idx = nodeListArr.length;
      }
      imgs.style.transform = `translateX(${-idx * 500}px)`;
    }, 2000);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

// let interval = setInterval(run, 2000);
// function run() {
//   idx++;
//   changeImg();
// }

// function changeImg() {
//   // check beginning
//   if (idx > nodeListArr.length - 1) {
//     index = 0;
//   } else if (idx < 0) {
//     idx = nodeListArr.length;
//   }
//   imgs.style.transform = `translate(${-index * 500}px)`;
// }
