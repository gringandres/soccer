import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";

const Tournament = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "4fr 2fr 4fr",
        placeContent: "center",
        height: "100vh",
      }}
    >
      <section
        className="box p-4"
        style={{ gridColumn: "2", display: "flex", justifyContent: "center" }}>
        <button
          className={`${BUTTON_OUTLINE_BLUE}`}
          onClick={() => goToPathnameUrl('/tournament/form-jugador')}
        >
          Jugador
        </button>
        <button
          className={`${BUTTON_OUTLINE_BLUE} ml-3`}
          onClick={() => goToPathnameUrl('/tournament/admin-login')}
        >
          Admin
        </button>
      </section>
    </div>
  );
};

export default Tournament;
