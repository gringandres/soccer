import React, { useEffect, useState } from "react";
import Table from "./Table";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl, playerFiltered } from "../utils/helpers";

const WednesdayMatch = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  //   { name: "daniel", posicion: "arquero", index: 1 },
  //   { name: "andres", posicion: "defensa", index: 2 },
  //   { name: "gilbert", posicion: "defensa", index: 3 },
  //   { name: "jose", posicion: "defensa", index: 5 },
  //   { name: "gato", posicion: "arquero", index: 6 },
  //   { name: "samuel", posicion: "centro", index: 7 },
  //   { name: "pine", posicion: "centro", index: 8 },
  //   { name: "pepito", posicion: "centro", index: 9 },
  //   { name: "patito", posicion: "centro", index: 10 },
  //   { name: "blandon", posicion: "delantero", index: 11 },
  //   { name: "kevin", posicion: "delantero", index: 12 },
  //   { name: "eddy", posicion: "defensa", index: 4 },
  //   { name: "juan", posicion: "delantero", index: 13 },
  //   { name: "estabn", posicion: "delantero", index: 14 },
  // ]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  // const handleGenerateTeams = (e) => {
  //   e.preventDefault();
  //   if (allPlayers.length === 14) {
  //     const shuffledTeam = shuffle(allPlayers);
  //     const team1 = [];
  //     const team2 = [];

  //     const goalKeeperFilter = playerFiltered(shuffledTeam, "arquero");
  //     const defenseFilter = playerFiltered(shuffledTeam, "defensa");
  //     const centerFilter = playerFiltered(shuffledTeam, "centro");
  //     const fowardFilter = playerFiltered(shuffledTeam, "delantero");

  //     team1.push(
  //       goalKeeperFilter.slice(0, 1),
  //       defenseFilter.slice(0, 2),
  //       centerFilter.slice(0, 2),
  //       fowardFilter.slice(0, 2)
  //     );
  //     team2.push(
  //       goalKeeperFilter.slice(1, 2),
  //       defenseFilter.slice(2, 4),
  //       centerFilter.slice(2, 4),
  //       fowardFilter.slice(2, 4)
  //     );

  //     setTeam1(team1.flat());
  //     setTeam2(team2.flat());
  //   } else {
  //     return alert("Llenar todos los cupos");
  //   }
  // };
  // const shuffle = (array) => {
  //   // debugger;
  //   let currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex != 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // };

  return (
    <section>
      <Table allPlayers={allPlayers} setAllPlayers={setAllPlayers} />
      {/* <ListTeams /> */}
      <section>
        <button
          className={`${BUTTON_OUTLINE_BLUE} mx-2`}
          onClick={handleGenerateTeams}
        >
          Generar Equipos
        </button>
        <button
          className={`${BUTTON_OUTLINE_BLUE} mx-2`}
          onClick={() => setAllPlayers([])}
        >
          Borrar Tabla
        </button>
        <button
          className={`${BUTTON_OUTLINE_BLUE} mx-2`}
          onClick={() => goToPathnameUrl("/")}
        >
          Cancel
        </button>
      </section>
    </section>
  );
};

export default WednesdayMatch;
