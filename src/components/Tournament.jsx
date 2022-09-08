import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import Form from "./Form";

const Tournament = () => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <section>
      {pageNumber === 0 && (
        <section>
          <button
            className={`${BUTTON_OUTLINE_BLUE}`}
            onClick={() => setPageNumber(1)}
          >
            Jugador
          </button>
          <button
            className={`${BUTTON_OUTLINE_BLUE}`}
            onClick={() => {
              setPageNumber(2);
            }}
          >
            Admin
          </button>
        </section>
      )}

      {pageNumber === 1 && <Form />}
    </section>
  );
};

export default Tournament;
