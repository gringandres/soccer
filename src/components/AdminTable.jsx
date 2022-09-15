import { addStyles } from "../utils/helpers";
import { WHITE_TEXT } from "../constants/style.utils";
import "../style.css";

const RowGenerater = ({ index, player }) => {
  return (
    <tr className={addStyles(index, "has-background-grey")}>
      <th className={addStyles(index, WHITE_TEXT)}>{index + 1}</th>
      <th className={addStyles(index, WHITE_TEXT)}>{player.idType}</th>
      <th className={addStyles(index, WHITE_TEXT)}>{player.cc}</th>
      <th className={addStyles(index, WHITE_TEXT)}>{player.name}</th>
      <th className={addStyles(index, WHITE_TEXT)}>
        {player.eps.toLowerCase()}
      </th>
      <th className={addStyles(index, WHITE_TEXT)}>
        {player.ciudad.toLowerCase()}
      </th>
      <th className={addStyles(index, WHITE_TEXT)}>
        {player.camiseta.toUpperCase()}
      </th>
      <th className={addStyles(index, WHITE_TEXT)}>
        {player.pantaloneta.toUpperCase()}
      </th>
      <th className={addStyles(index, WHITE_TEXT)}>
        {player.posicion.toLowerCase()}
      </th>
      <th className={addStyles(index, WHITE_TEXT)}>{player.contacto}</th>
    </tr>
  );
};

const AdminTable = ({ allPlayerTournament, tableFiltered, noResults }) => {
  const players = tableFiltered.length > 0
    ? tableFiltered
    : allPlayerTournament

  return (
    <section className="admin-table-container">
      {noResults
        ? <div className="no-results-container">
          <div className="box px-6 py-5 subtitle is-4">'No results found!'</div>
        </div>
        : players.length > 0 ? (
          <table className="admin-table table is-bordered mx-4 mt-4 is-striped is-hoverable">
            <thead>
              <tr className="has-background-primary">
                <th className={WHITE_TEXT}>
                  <abbr title="Numero">N°</abbr>
                </th>
                <th className={WHITE_TEXT}>Tipo de Identificacion</th>
                <th className={WHITE_TEXT}>Identificacion</th>
                <th className={WHITE_TEXT}>Nombre Completo</th>
                <th className={WHITE_TEXT}>EPS</th>
                <th className={WHITE_TEXT}>Ciudad</th>
                <th className={WHITE_TEXT}>Talla Camisa</th>
                <th className={WHITE_TEXT}>Talla Pantaloneta</th>
                <th className={WHITE_TEXT}>Posicion de juego</th>
                <th className={WHITE_TEXT}>Contacto</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <RowGenerater key={index} player={player} index={index} />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="loader-wrapper">
            <div className="loader is-loading"></div>
          </div>
        )}
    </section >
  );
};

export default AdminTable;
