const RowGenerater = ({ index, player }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{player.name}</th>
      <th>{player.cc}</th>
      <th>{player.eps}</th>
      <th>{player.cuidad}</th>
      <th>{player.camiseta}</th>
      <th>{player.pantaloneta}</th>
      <th>{player.posicion}</th>
      <th>{player.contacto}</th>
    </tr>
  );
};

const AdminTable = ({ allPlayerTournament }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <abbr title="Numero">N°</abbr>
          </th>
          <th>Nombre Completo</th>
          <th>Identificacion</th>
          <th>EPS</th>
          <th>Cuidad</th>
          <th>Talla Camisa</th>
          <th>Talla Pantaloneta</th>
          <th>Posicion de juego</th>
          <th>Contacto</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {allPlayerTournament.map((player, index) => (
          <RowGenerater key={index} player={player} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
