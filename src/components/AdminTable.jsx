import { addStyles } from "../utils/helpers";
import { WHITE_TEXT } from "../constants/style.utils";
import "../style.css";

const RowGenerater = ({ index, player }) => {
  return (
    <tr className={addStyles(index, 'has-background-grey')}>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{index + 1}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.name.toLowerCase()}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.cc}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.eps.toLowerCase()}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.ciudad.toLowerCase()}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.camiseta.toUpperCase()}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.pantaloneta.toUpperCase()}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.posicion.toLowerCase()}</th>
      <th style={{ textAlign: 'center' }} className={addStyles(index, WHITE_TEXT)}>{player.contacto}</th>
    </tr >
  );
};

const AdminTable = ({ allPlayerTournament }) => {
  return (
    <section style={{ display: "grid", placeContent: "center" }}>
      {allPlayerTournament.length > 0 ? (
        <table className="table is-bordered mx-4 mt-4 is-striped is-hoverable">
          <thead>
            <tr className="has-background-primary">
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>
                <abbr title="Numero">N°</abbr>
              </th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>Nombre Completo</th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>Identificacion</th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>EPS</th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>Ciudad</th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>Talla Camisa</th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>Talla Pantaloneta</th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>Posicion de juego</th>
              <th style={{ textAlign: 'center' }} className={WHITE_TEXT}>Contacto</th>
            </tr>
          </thead>
          <tbody>
            {allPlayerTournament.map((player, index) => (
              <RowGenerater key={index} player={player} index={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="loader-wrapper">
          <div className="loader is-loading"></div>
        </div>
      )
      }
    </section >
  );
};

export default AdminTable;
