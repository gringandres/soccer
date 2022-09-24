import React, { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import Filters from "./Filters";
import { fetchSupabase } from "../supabase/supabase";

const AdminInfo = () => {
  const [allPlayerTournament, setAllPlayerTournament] = useState([]);
  const [tableFiltered, setTableFiltered] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [popup, setPopup] = useState(false);
  const user = sessionStorage.getItem("token");

  useEffect(() => {
    if (!user) {
      window.location.replace("/");
    }
  }, [user]);

  useEffect(() => {
    fetchSupabase()
      .then((res) => res.json())
      .then((tournament) => setAllPlayerTournament(tournament));
  }, [allPlayerTournament]);

  return (
    <div className="">
      <div className="">
        <button
          className=""
          onClick={() => {
            sessionStorage.removeItem("token");
            window.location.replace("/");
          }}
        >
          Salir
        </button>
      </div>
      <div className="">
        {tableFiltered.length > 0 || noResults ? (
          <button
            className=""
            onClick={() => {
              setTableFiltered([]);
              setNoResults(false);
            }}
          >
            Clear Filters
          </button>
        ) : (
          <div>
            <h2 className="">Filter</h2>
            <input
              className=""
              id="filter"
              type="text"
              onFocus={() => setPopup(true)}
              placeholder="Click here to show the filters..."
            />
          </div>
        )}
      </div>
      {popup && (
        <Filters
          allPlayerTournament={allPlayerTournament}
          setPopup={setPopup}
          setTableFiltered={setTableFiltered}
          setNoResults={setNoResults}
        />
      )}
      <AdminTable
        allPlayerTournament={allPlayerTournament}
        tableFiltered={tableFiltered}
        noResults={noResults}
      />
    </div>
  );
};

export default AdminInfo;
