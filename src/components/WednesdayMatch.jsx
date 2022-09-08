import React, { useState } from "react";
import Table from "./Table";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";

const WednesdayMatch = ({ pageNumber, setPageNumber }) => {
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

  // const [goalKeeperSheet, setGoalKeeperSheet] = useState([]);
  // const [defenseSheet, setDefenseSheet] = useState([]);
  // const [middleSheet, setMiddleSheet] = useState([]);
  // const [fowardSheet, setFowardSheet] = useState([]);

  // const handleGenerateTeams = (e) => {

  //   e.preventDefault();

  //   if (allPlayers.length === 14) {
  //     const goalKeeperFilter = allPlayers.filter(
  //       (goalKeeper) => goalKeeper.posicion === "arquero"
  //     );
  //     let defenseFilter = allPlayers.filter(
  //       (defense) => defense.posicion === "defensa"
  //     );
  //     let centerFilter = allPlayers.filter(
  //       (center) => center.posicion === "centro"
  //     );
  //     let fowardFilter = allPlayers.filter(
  //       (foward) => foward.posicion === "delantero"
  //     );

  //     // setGoalKeeperSheet(goalKeeperFilter);
  //     // setDefenseSheet(defenseFilter);
  //     // setMiddleSheet(centerFilter);
  //     // setFowardSheet(fowardFilter));

  //     if (defenseFilter.length < 4 && centerFilter.length > 4) {
  //       const { value1, value2 } = playerNeeded(
  //         defenseFilter,
  //         centerFilter,
  //         defenseFilter.length
  //       );
  //       defenseFilter = value1;
  //       centerFilter = value2;
  //       console.log("1", defenseFilter);
  //       console.log("1", centerFilter);
  //     } else if (defenseSheet.length > 4) {
  //       morePlayer();
  //     }
  //     if (centerFilter.length < 4 && fowardFilter.length > 4) {
  //       const { value1, value2 } = playerNeeded(
  //         centerFilter,
  //         fowardFilter,
  //         centerFilter.length
  //       );
  //       centerFilter = value1;
  //       fowardFilter = value2;
  //       console.log("2", centerFilter);
  //       console.log("2", fowardFilter);
  //     } else if (centerFilter.length > 4) {
  //       morePlayer();
  //     }
  //     if (fowardFilter.length < 4 && centerFilter.length > 4) {
  //       const { value1, value2 } = playerNeeded(
  //         fowardFilter,
  //         centerFilter,
  //         fowardFilter.length
  //       );
  //       fowardFilter = value1;
  //       centerFilter = value2;
  //       console.log("3", fowardFilter);
  //       console.log("3", centerFilter);
  //     } else if (centerFilter.length > 4) {
  //       morePlayer();
  //     }
  //     // if (defenseFilter.length < 4) {
  //     //   defenseFilter = playerNeeded(
  //     //     defenseFilter,
  //     //     centerFilter,
  //     //     defenseFilter.length
  //     //   );
  //     // } else if (defenseSheet.length > 4) {
  //     //   morePlayer();
  //     // }
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

  // const playerNeeded = (sheet1, sheet2, length) => {
  //   // debugger;
  //   const numberNeeded = 4 - length;
  //   const shuffledTeam = shuffle(sheet2);
  //   const leftOver = shuffledTeam.slice(0, numberNeeded);

  //   return {
  //     value1: sheet1.concat(leftOver),
  //     value2: shuffledTeam.slice(numberNeeded, sheet2.length),
  //   };
  // };

  // const morePlayer = (sheet1, sheet2) => {};
  // // console.log("arquero", goalKeeperSheet);
  // // console.log("defenseSheet", defenseSheet);
  // // console.log("middleSheet", middleSheet);
  // // console.log("fowardSheet", fowardSheet);

  const handleGenerateTeams = (e) => {
    e.preventDefault();
    if (allPlayers.length === 14) {
      const shuffledTeam = shuffle(allPlayers);
      const team1 = [];
      const team2 = [];

      const goalKeeperFilter = shuffledTeam.filter(
        (goalKeeper) => goalKeeper.posicion === "arquero"
      );
      const defenseFilter = shuffledTeam.filter(
        (defense) => defense.posicion === "defensa"
      );
      const centerFilter = shuffledTeam.filter(
        (center) => center.posicion === "centro"
      );
      const fowardFilter = shuffledTeam.filter(
        (foward) => foward.posicion === "delantero"
      );
      team1.push(
        goalKeeperFilter.slice(0, 1),
        defenseFilter.slice(0, 2),
        centerFilter.slice(0, 2),
        fowardFilter.slice(0, 2)
      );
      team2.push(
        goalKeeperFilter.slice(1, 2),
        defenseFilter.slice(2, 4),
        centerFilter.slice(2, 4),
        fowardFilter.slice(2, 4)
      );

      setTeam1(team1.flat());
      setTeam2(team2.flat());
    } else {
      return alert("Llenar todos los cupos");
    }
  };
  const shuffle = (array) => {
    // debugger;
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

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
          onClick={() => {
            setAllPlayers([]);
          }}
        >
          Borrar Tabla
        </button>
        <button
          className={`${BUTTON_OUTLINE_BLUE} mx-2`}
          onClick={() => {
            setPageNumber(0);
          }}
        >
          Cancel
        </button>
      </section>
    </section>
  );
};

export default WednesdayMatch;
