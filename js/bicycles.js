"use strict";

/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const racingBikes = [
  {
    name: "WILIER TRIESTINA GTR TEAM",
    weightinKg: 9.5,
    img: "https://images.internetstores.de/products//1351326/02/d80631/Wilier_GTR_Team_Disc_105_schwarz[600x600].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
  },
  {
    name: "CUBE ATTAIN PRO",
    weightinKg: 10.2,
    img: "https://images.internetstores.de/products//1484039/02/130459/Cube_Attain_Pro_grau[600x600].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
  },
  {
    name: "BIANCHI SPRINT",
    weightinKg: 8.85,
    img: "https://images.internetstores.de/products//1374321/02/64a216/Bianchi_Sprint_105_Disc_celeste_glossy[600x600].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
  },
  {
    name: "FELT VR 40",
    weightinKg: 9.84,
    img: "https://images.internetstores.de/products//1315834/02/4ec227/Felt_VR_40_blau[600x600].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
  },
  {
    name: "VOTEC VRC PRO",
    weightinKg: 8.5,
    img: "https://images.internetstores.de/products//1225440/02/076a0a/VOTEC_VRC_Pro_schwarz[600x600].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
  },
  {
    name: "CERVÉLO CALEDONIA",
    weightinKg: 9.41,
    img: "https://images.internetstores.de/products//1485683/02/3adfb4/Cerv_lo_Caledonia_105_schwarz[600x600].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
  },
  {
    name: "CANNONDALE SYSTEMSIX",
    weightinKg: 8,
    img: "https://images.internetstores.de/products//1415730/02/46011e/Cannondale_SystemSix_Carbon_Ultegra_rot_schwarz[600x600].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
  },
];

function displayLightestBike() {
  let lightestBike = findLightestBike(racingBikes);
  displayBike(lightestBike);
}

function findLightestBike(bikes) {
  bikes.sort((bike1, bike2) => bike1.weightinKg - bike2.weightinKg);
  return bikes[0];
}

function displayBike(bike) {
  const bikesSection = document.querySelector(".bikes-section");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h4");
  const weight = document.createElement("p");
  card.classList.add("bike-card");
  img.classList.add("bike-card__img");
  title.classList.add("bike-card__title");
  weight.classList.add("bike-card__spec");

  img.src = bike.img;
  img.alt = `Bicicletta da corsa ${bike.name}`;
  title.textContent = bike.name;
  weight.textContent = `Peso: ${bike.weightinKg}kg`;

  card.append(img);
  card.append(title);
  card.append(weight);
  bikesSection.append(card);
}
