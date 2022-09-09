import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";

const Tournament = () => {
  return (
    <section>
      <button
        className={`${BUTTON_OUTLINE_BLUE}`}
        onClick={() => goToPathnameUrl('/tournament/form-jugador')}
      >
        Jugador
      </button>
      <button
        className={`${BUTTON_OUTLINE_BLUE}`}
        onClick={() => goToPathnameUrl('/tournament/admin-login')}
      >
        Admin
      </button>
    </section>
  );
};

export default Tournament;
