import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { useAppDispatch } from '../hooks/redux'
import { ModeActions } from '../reducers/ModeSlice'

import MenuTab from '../components/MenuTab'

const Home: NextPage = () => {

  const dispatch = useAppDispatch() 

  useEffect(() => {
    dispatch(ModeActions.setCurrentMode('home'))

  }, [])
  
  return (
    <div>
      <MenuTab></MenuTab>
      <h1>HOME</h1>
    </div>
  )
}

export default Home
