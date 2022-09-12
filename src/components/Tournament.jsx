import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";
import "../style.css";

const Tournament = () => {
  return (
    <div className="tournament-container">
      <section className="box p-4">
        <button
          className={`${BUTTON_OUTLINE_BLUE}`}
          onClick={() => goToPathnameUrl("/tournament/form-jugador")}
        >
          Jugador
        </button>
        <button
          className={`${BUTTON_OUTLINE_BLUE} ml-3`}
          onClick={() => goToPathnameUrl("/tournament/admin-login")}
        >
          Admin
        </button>
      </section>
    </div>
  );
};

export default Tournament;
