import React, { useContext } from 'react'
import UserDataContext from '../../context/UserDataContext'
import Header from '../components/Header'

export default function Dashboard() {
  const text = "Hello"
  const userData = useContext(UserDataContext)
  return (
    <div>
      <Header/>
    </div>
  )
}
