import { useEffect, useState } from "react";
import WednesdayMatch from "./components/WednesdayMatch";
import Tournament from "./components/Tournament";
import { BUTTON_OUTLINE_BLUE } from "./constants/style.utils";
import Route from "./utils/Route";
import { goToPathnameUrl } from "./utils/helpers";
import Form from "./components/Form";
import Login from "./components/Login";
import AdminInfo from "./components/AdminInfo";

const App = () => {
  return (
    <>
      <Route path='/'>
        <section className="Main">
          <h1>Team International Futbol</h1>
          <section>
            <button
              className={BUTTON_OUTLINE_BLUE}
              onClick={() => goToPathnameUrl("/wednesdayMatch")}
            >
              Partidos Miercoles
            </button>
            <button
              className={BUTTON_OUTLINE_BLUE}
              onClick={() => goToPathnameUrl("/tournament")}
            >
              Torneo
            </button>
          </section>
        </section>
      </Route>
      <Route path='/wednesdayMatch'>
        <WednesdayMatch />
      </Route>
      <Route path='/tournament'>
        <Tournament />
      </Route>
      <Route path='/tournament/form-jugador'>
        <Form />
      </Route>
      <Route path='/tournament/admin-login'>
        <Login />
      </Route>
      <Route path='/tournament/admin-info'>
        <AdminInfo />
      </Route>
    </>
  );
};

export default App;
