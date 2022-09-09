import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import AdminTable from "./AdminTable";
import { BUTTON_OUTLINE_BLUE } from '../constants/style.utils'

const AdminInfo = () => {
  const [allPlayerTournament, setAllPlayerTournament] = useState([])
  const user = sessionStorage.getItem('token')

  useEffect(() => {
    if (!user) {
      window.location.replace('/')
    }
  }, [user])

  useEffect(() => {
    const fecthData = () => {
      const tournamentData = collection(database, "Tournament");
      getDocs(tournamentData)
        .then((res) => {
          const { docs } = res;
          const allPlayersTournament = docs.map((doc) => doc.data());
          setAllPlayerTournament(allPlayersTournament);
        })
        .catch((error) => console.log(error.message));
    };
    fecthData();
  }, [allPlayerTournament]);

  return (
    <div>
      <button
        className={BUTTON_OUTLINE_BLUE}
        onClick={() => {
          sessionStorage.removeItem('token')
          window.location.replace('/')
        }}
      >
        Salir
      </button>
      <AdminTable allPlayerTournament={allPlayerTournament} />
    </div>
  );
};

export default AdminInfo;
