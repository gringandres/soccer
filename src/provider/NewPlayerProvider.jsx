import React, { createContext, useState } from 'react'

export const NewPlayerContext = createContext({})

const NewPlayerProvider = ({ children }) => {
  const [isNewPlayer, setIsNewPlayer] = useState(false)

  return (
    <NewPlayerContext.Provider value={{ isNewPlayer, setIsNewPlayer }}>
      {children}
    </NewPlayerContext.Provider>
  )
};

export default NewPlayerProvider