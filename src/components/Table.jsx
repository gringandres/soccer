import { useState } from "react";
import {
  BUTTON_OUTLINE_BLUE,
  BUTTON_OUTLINE_RED,
} from "../constants/style.utils";
import vite from "../../public/vite.svg";
const RowGenerater = ({ player, allPlayers, setAllPlayers }) => {
  const [info, setInfo] = useState({
    name: "",
    posicion: "",
    index: player + 1,
  });
  const [isSubmited, setIsSubmited] = useState(false);

  const handleInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.name && !info.posicion) {
      return alert("llene los campos");
    }
    setAllPlayers([...allPlayers, info]);
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
            value={info.posicion}
            name="posicion"
            onChange={handleInfo}
            disabled={isSubmited}
          >
            <option value="empty"></option>
            <option value="arquero">Arquero</option>
            <option value="defensa">Defensa</option>
            <option value="centro">Centro</option>
            <option value="delantero">Delantero</option>
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
              <img src={vite}></img>
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
