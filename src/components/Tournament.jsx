import React from "react";
import { goToPathnameUrl } from "../utils/helpers";

const Tournament = () => {
  return (
    <div>
      <h1>Team International Tournament</h1>
      <section>
        <button onClick={() => goToPathnameUrl("/tournament/form-jugador")}>
          Player
        </button>
        <button onClick={() => goToPathnameUrl("/tournament/admin-login")}>
          Admin
        </button>
      </section>
    </div>
  );
};

export default Tournament;
