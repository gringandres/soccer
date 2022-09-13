import React from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";
import "../style.css";

const Tournament = () => {
  return (
    <div className="tournament-container background-banner1">
      <h1 className="title is-4 team-title">Team International Tournament</h1>
      <section className="box p-4 is-flex is-justify-content-center">
        <button
          className={`${BUTTON_OUTLINE_BLUE} button-team-blue`}
          onClick={() => goToPathnameUrl("/tournament/form-jugador")}
        >
          Player
        </button>
        <button
          className={`${BUTTON_OUTLINE_BLUE} ml-3 button-team-blue`}
          onClick={() => goToPathnameUrl("/tournament/admin-login")}
        >
          Admin
        </button>
      </section>
    </div>
  );
};

export default Tournament;
