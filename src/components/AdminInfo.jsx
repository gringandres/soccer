import React, { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { getTournamentData } from "../supabase/supabaseFunctions";

const AdminInfo = () => {
  const [allPlayerTournament, setAllPlayerTournament] = useState([]);
  const user = sessionStorage.getItem("token");

  // useEffect(() => {
  //   if (!user) {
  //     window.location.replace("/");
  //   }
  // }, [user]);

  // useEffect(() => {
  //   getTournamentData()
  //     .then(({ tournament }) => setAllPlayerTournament(tournament))
  //     .catch((error) => console.log(error));
  // }, [allPlayerTournament]);

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
      <AdminTable allPlayerTournament={allPlayerTournament} />
    </div>
  );
};

export default AdminInfo;
