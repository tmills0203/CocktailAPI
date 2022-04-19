"use strict";

fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    // console.log(data.drinks);
    const imgContainer = document.querySelector(".img-container");
    const carousel = document.querySelector(".carousel");

    data.drinks.forEach((obj) => {
      //   console.log(obj);
      let [drink, drinkImg] = Object.values(obj);
      console.log(drinkImg);

      let html = `  
      <section id="imgs" class="img-container">
        <img src="${drinkImg}" alt="" />
      </section>
      <h2 id="drinkName">${drink}</h2>`;
      carousel.insertAdjacentHTML("beforeend", html);
    });
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
