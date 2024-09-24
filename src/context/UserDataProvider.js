import React, { useState } from 'react'
import UserDataContext from './UserDataContext'

export default function UserDataProvider({children}) {
    const [name, setName] = useState("Shiv");

    const updateName = (newName) =>{
        setName(newName);
    }
  return (
    <UserDataContext.Provider value={{name,updateName}}>
      {children}
    </UserDataContext.Provider>
  )
}
