import { addStyles } from "../utils/helpers";

const RowGenerater = ({ index, player }) => {
  return (
    <tr>
      <th> {index + 1}</th>
      <th> {player.idType}</th>
      <th> {player.cc}</th>
      <th> {player.name}</th>
      <th> {player.eps.toLowerCase()}</th>
      <th> {player.ciudad.toLowerCase()}</th>
      <th> {player.camiseta.toUpperCase()}</th>
      <th> {player.pantaloneta.toUpperCase()}</th>
      <th> {player.posicion.toLowerCase()}</th>
      <th> {player.contacto}</th>
    </tr>
  );
};

const AdminTable = ({ allPlayerTournament, tableFiltered, noResults }) => {
  const players =
    tableFiltered.length > 0 ? tableFiltered : allPlayerTournament;

  return (
    <section>
      {noResults ? (
        <div>
          <div>'No results found!'</div>
        </div>
      ) : players.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>
                <abbr title="Numero">N°</abbr>
              </th>
              <th>Tipo de Identificacion</th>
              <th>Identificacion</th>
              <th>Nombre Completo</th>
              <th>EPS</th>
              <th>Ciudad</th>
              <th>Talla Camisa</th>
              <th>Talla Pantaloneta</th>
              <th>Posicion de juego</th>
              <th>Contacto</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <RowGenerater key={index} player={player} index={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <div></div>
        </div>
      )}
    </section>
  );
};

export default AdminTable;
