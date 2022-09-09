import React, { useEffect, useState } from 'react'
import { database } from '../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

const AdminInfo = () => {
  const [allPlayerTournament, setAllPlayerTournament] = useState([])

  useEffect(() => {
    const fecthData = () => {
      const tournamentData = collection(database, 'Tournament')
      getDocs(tournamentData)
        .then(res => {
          const { docs } = res
          const allPlayersTournament = docs.map(doc => doc.data())
          setAllPlayerTournament(allPlayersTournament)
        })
        .catch(error => console.log(error.message))
    }
    fecthData()
  }, [allPlayerTournament])


  return (
    <div>
      {allPlayerTournament.map(player => (
        <section key={player.cc}>
          <div>
            {player.name}
          </div>
          <div>
            {player.cc}
          </div>
          <div>
            {player.eps}
          </div>
          <div>
            {player.ciudad}
          </div>
          <div>
            {player.camiseta}
          </div>
          <div>
            {player.pantaloneta}
          </div>
          <div>
            {player.posicion}
          </div>
          <div>
            {player.contacto}
          </div>
          <hr />
        </section>
      ))}
    </div>
  )
}

export default AdminInfo