"use strict";

/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const footballTeams = [
  {
    name: "Football Club Internazionale",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Associazione Calcio Milan",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Juventus Football Club",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Atalanta Bergamasca Calcio",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Hellas Verona Football Club",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Unione Calcio Sampdoria",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Genoa Cricket and Football Club",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Udinese Calcio",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Unione Sportiva Salernitana 1919",
    score: 0,
    foulsSuffered: 0,
  },
  {
    name: "Unione Sportiva Lecco",
    score: 0,
    foulsSuffered: 0,
  },
];

footballTeams.forEach((a) => {
  a.setScore = function (score) {
    this.score = score;
  };
  a.setFoulsSuffered = function (foulsSuffered) {
    this.foulsSuffered = foulsSuffered;
  };
});

footballTeams.forEach((a) => {
  a.setScore(generateRandomNumber(0, 50));
  a.setFoulsSuffered(generateRandomNumber(5, 100));
});

function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const footballTeamsFoulsSuffered = [];

for (const team of footballTeams) {
  let { name, foulsSuffered } = team;
  footballTeamsFoulsSuffered.push({
    name,
    foulsSuffered,
  });
}

footballTeamsFoulsSuffered.sort((a, b) => b.foulsSuffered - a.foulsSuffered);

const teamsTableBody = document.querySelector(".teams-table__body");

function displayFoulsSufferedTable() {
  for (let i = 0; i < footballTeamsFoulsSuffered.length; i++) {
    const teamFoulsSuffered = footballTeamsFoulsSuffered[i];
    displaySingleTeamFoulsSuffered(teamFoulsSuffered);
  }
}

function displaySingleTeamFoulsSuffered(team) {
  let tr = document.createElement("tr");
  let tdTeam = document.createElement("td");
  let tdFouls = document.createElement("td");

  tdTeam.textContent = team.name;
  tdFouls.textContent = team.foulsSuffered;
  tr.append(tdTeam);
  tr.append(tdFouls);
  teamsTableBody.append(tr);
}

displayFoulsSufferedTable();
