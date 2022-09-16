import React, { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import Filters from "./Filters";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
// import { getTournamentData } from "../supabase/supabaseFunctions";
import { fetchSupabase } from "../supabase/supabase";

const AdminInfo = () => {
  const [allPlayerTournament, setAllPlayerTournament] = useState([]);
  const [tableFiltered, setTableFiltered] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [popup, setPopup] = useState(false);
  const user = sessionStorage.getItem("token");

  useEffect(() => {
    if (!user) {
      window.location.replace("/");
    }
  }, [user]);

  // useEffect(() => {
  //   getTournamentData()
  //     .then(({ tournament }) => setAllPlayerTournament(tournament))
  //     .catch((error) => console.log(error));
  // }, [allPlayerTournament]);

  useEffect(() => {
    fetchSupabase()
      .then(res => res.json())
      .then(tournament => setAllPlayerTournament(tournament))
  }, [allPlayerTournament]);

  return (
    <div className="mt-4">
      <div className="is-flex is-justify-content-flex-end mr-4">
        <button
          className={BUTTON_OUTLINE_BLUE}
          onClick={() => {
            sessionStorage.removeItem("token");
            window.location.replace("/");
          }}
        >
          Salir
        </button>
      </div>
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mb-5">
        {tableFiltered.length > 0 || noResults
          ? <button
            className={BUTTON_OUTLINE_BLUE}
            onClick={() => {
              setTableFiltered([])
              setNoResults(false)
            }}
          >Clear Filters</button>
          : <div>
            <h2 className="is-size-4 mr-4 filter-title">Filter</h2>
            <input
              className="filter-input"
              id="filter"
              type="text"
              onFocus={() => setPopup(true)}
              placeholder='Click here to show the filters...'
            />
          </div>
        }
      </div>
      {popup &&
        <Filters
          allPlayerTournament={allPlayerTournament}
          setPopup={setPopup}
          setTableFiltered={setTableFiltered}
          setNoResults={setNoResults}
        />
      }
      <AdminTable
        allPlayerTournament={allPlayerTournament}
        tableFiltered={tableFiltered}
        noResults={noResults}
      />
    </div >
  );
};

export default AdminInfo;
