import { useState, useEffect } from "react";
import {
  BUTTON_OUTLINE_BLUE,
  BUTTON_OUTLINE_RED,
} from "../constants/style.utils";
import trash from "../svg/trash.svg";
import { playerFiltered } from "../utils/helpers";

const RowGenerater = ({ player, allPlayers, setAllPlayers }) => {
  const [info, setInfo] = useState({
    name: "",
    posicion: "",
    index: player + 1,
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [probando, setProbando] = useState([]);

  // useEffect(() => { // hacer con supabase
  // const getInfoFromDatabase = () => {
  //   const allData = collection(database, 'WednesdayMatch')
  //   getDocs(allData)
  //     .then((response) => {
  //       const { docs } = response
  //       // const allPlayer = docs.map(doc => ({
  //       //   data: doc.data(),
  //       //   id: doc.id
  //       // }))
  //       const allPlayers = docs.map(doc => doc.data())
  //       console.log(allPlayers)
  //       setProbando(allPlayers)
  //     })
  //     .catch((error) => console.log(error.message))
  // }
  // getInfoFromDatabase()
  // }, [])

  const goalKeeperFilter = playerFiltered(allPlayers, "arquero");
  const defenseFilter = playerFiltered(allPlayers, "defensa");
  const centerFilter = playerFiltered(allPlayers, "centro");
  const fowardFilter = playerFiltered(allPlayers, "delantero");

  const handleInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, posicion, index } = info;
    if (!name && !posicion) return alert("llene los campos");
    if (posicion === "arquero" && goalKeeperFilter.length >= 2)
      return alert("Ya hay dos arqueros");
    if (posicion === "defensa" && defenseFilter.length >= 4)
      return alert("Ya hay cuatro defensas");
    if (posicion === "centro" && centerFilter.length >= 4)
      return alert("Ya hay cuatro centros");
    if (posicion === "delantero" && fowardFilter.length >= 4)
      return alert("Ya hay cuatro delantero");

    // const playerData = collection(database, 'WednesdayMatch') // hacer con supabase
    // addDoc(playerData, { name, posicion, index }).then(res => console.log('todo bien'))
    getInfoFromDatabase();
    // setAllPlayers([...allPlayers, info]); // esto hay que cambiarlo
    setIsSubmited(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setInfo({ name: "", posicion: "", index: player + 1 });
    const newPlayers = allPlayers.reduce((acc, curr) => {
      if (curr.index !== info.index) {
        acc.push(curr);
      }
      return acc;
    }, []);
    setAllPlayers(newPlayers);
    setIsSubmited(false);
  };
  // console.log(info.index, 'info')
  // console.log(probando, 'probando')

  // const isTrue = () => probando.map(pro => pro.index === info.index)
  // console.log(isTrue(), 'isTrue')

  return (
    <tr>
      <th>{player + 1}</th>
      <th>
        <input
          className="input is-info"
          type="text"
          value={info.name}
          name="name"
          onChange={handleInfo}
          disabled={isSubmited}
        />
      </th>
      <th>
        <div className="select is-info">
          <select
            className=""
            value={
              info.index === probando.index ? probando.posicion : info.posicion
            }
            name="posicion"
            onChange={handleInfo}
            disabled={isSubmited}
          >
            <option value="empty"></option>
            <option value="arquero" disabled={goalKeeperFilter.length >= 2}>
              Arquero
            </option>
            <option value="defensa" disabled={defenseFilter.length >= 4}>
              Defensa
            </option>
            <option value="centro" disabled={centerFilter.length >= 4}>
              Centro
            </option>
            <option value="delantero" disabled={fowardFilter.length >= 4}>
              Delantero
            </option>
          </select>
        </div>
      </th>
      {!isSubmited ? (
        <th>
          <button
            className={BUTTON_OUTLINE_BLUE}
            onClick={handleSubmit}
            disabled={isSubmited}
          >
            Registrar
          </button>
        </th>
      ) : (
        <th>
          <button className={BUTTON_OUTLINE_RED} onClick={handleDelete}>
            <span className="icon is-small">
              <img src={trash}></img>
            </span>
          </button>
        </th>
      )}
    </tr>
  );
};

const Table = ({ allPlayers, setAllPlayers }) => {
  const players = Array.from(Array(14).keys());
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <abbr title="Numero">N°</abbr>
          </th>
          <th>Nombre</th>
          <th>Posicion</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <RowGenerater
            key={index}
            player={player}
            allPlayers={allPlayers}
            setAllPlayers={setAllPlayers}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
