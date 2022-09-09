import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import AdminTable from "./AdminTable";

const AdminInfo = () => {
  const [allPlayerTournament, setAllPlayerTournament] = useState([]);

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
      <AdminTable allPlayerTournament={allPlayerTournament} />
    </div>
  );
};

export default AdminInfo;
