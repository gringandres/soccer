import React, { useState } from "react";
import Table from "./Table";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";

const WednesdayMatch = ({ pageNumber, setPageNumber }) => {
  const [allPlayers, setAllPlayers] = useState([]);
  const handleSubmit = () => {
    console.log(allPlayers);
  };
  return (
    <section>
      <Table allPlayers={allPlayers} setAllPlayers={setAllPlayers} />
      <section>
        <button
          className={`${BUTTON_OUTLINE_BLUE} mx-2`}
          onClick={handleSubmit}
        >
          Generar Equipos
        </button>
        <button className={`${BUTTON_OUTLINE_BLUE} mx-2`} onClick={() => {}}>
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
