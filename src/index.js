//---------------------------------------------------------------------------//
//GLOBAL VARIABLES
const url = "http://localhost:3000/pups";
const dogBarDiv = document.getElementById("dog-bar");
const img = document.createElement("img");
const dogInfoDiv = document.getElementById("dog-info");
const detailsImg = document.createElement("img");
const detailsDogName = document.createElement("h2");
const goodDogBtm = document.createElement("button");

//---------------------------------------------------------------------------//

//---------------------------------------------------------------------------//
//GET REQUESTS
fetch(url)
  .then((resp) => resp.json())
  .then((dogs) => {
    dogs.forEach((dog) => {
      addDogToDogBar(dog);
    });
  })
  .catch((err) => console.log(err.message));

//---------------------------------------------------------------------------//

//---------------------------------------------------------------------------//
//FUNCTIONS
//---------------------------------------------------------------------------//
function addDogToDogBar(dog) {
  const span = document.createElement("span");
  span.textContent = dog.name;
  span.classList.add("doggy");
  dogBarDiv.appendChild(span);
  span.addEventListener("click", () => {
    showCurrentDog(dog);
  });
}

function showCurrentDog(dog) {
  dogInfoDiv.append(detailsDogName, goodDogBtm, detailsImg);
  goodDogBtm.textContent = dog.isGoodDog ? true : false;
  detailsImg.src = dog.image;
  detailsDogName.textContent = dog.name;
  goodDogBtm.addEventListener("click", () => {
    dog.isGoodDog = !dog.isGoodDog;
    goodDogBtm.textContent = dog.isGoodDog ? true : false;
  });
}
// function showCurrentDog(dog) {}

// span.addEventListener("click", (e) => {
//
//   const img = document.createElement("img");

//   const name = document.createElement("h2");
//   dogBarDiv.append(name);
//   name.textContent = e.target.textContent;
// });

// function showCurrentDog(dog) {
//
//
//     img.src = dog.image;
//     name.textContent = dog.name;
//     goodDogBtm.textContent = dog.isGoodDog;
//     dogInfoDiv.append(img, name, goodDogBtm);
//   });
// }
