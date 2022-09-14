import WednesdayMatch from "./components/WednesdayMatch";
import Tournament from "./components/Tournament";
import { BUTTON_OUTLINE_BLUE } from "./constants/style.utils";
import Route from "./utils/Route";
import { goToPathnameUrl } from "./utils/helpers";
import Form from "./components/Form";
import Login from "./components/Login";
import AdminInfo from "./components/AdminInfo";
import "./style.css";

const App = () => {
  return (
    <>
      {/* <Route path="/">
        <div className="app-container">
          <section>
            <h1 className="title is-4">Team International Futbol</h1>
            <section className="box py-5 px-6">
              <button
                className={BUTTON_OUTLINE_BLUE}
                onClick={() => goToPathnameUrl("/wednesdayMatch")}
              >
                Partidos Miercoles
              </button>
              <button
                className={`${BUTTON_OUTLINE_BLUE} ml-3`}
                onClick={() => goToPathnameUrl("/tournament")}
              >
                Torneo
              </button>
            </section>
          </section>
        </div>
      </Route> */}
      <Route path="/">
        <Tournament />
      </Route>
      {/* <Route path="/wednesdayMatch">
        <WednesdayMatch />
      </Route> */}
      <Route path="/tournament/form-jugador">
        <Form />
      </Route>
      <Route path="/tournament/admin-login">
        <Login />
      </Route>
      <Route path="/tournament/admin-info">
        <AdminInfo />
      </Route>
    </>
  );
};

export default App;
