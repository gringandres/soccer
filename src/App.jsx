import { useState } from "react";
import WednesdayMatch from "./components/WednesdayMatch";
import { BUTTON_OUTLINE_BLUE } from "./constants/style.utils";
const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <section className="Main">
      <h1>Team International Futbol</h1>
      <section>
        {pageNumber === 0 && (
          <button
            className={BUTTON_OUTLINE_BLUE}
            onClick={() => {
              setPageNumber(1);
            }}
          >
            Partidos Miercoles
          </button>
        )}
        {pageNumber === 0 && (
          <button
            className={BUTTON_OUTLINE_BLUE}
            onClick={() => {
              setPageNumber(2);
            }}
          >
            Torneo
          </button>
        )}
      </section>
      {pageNumber === 1 && (
        <WednesdayMatch pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </section>
  );
};

export default App;
