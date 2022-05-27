import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import { useAppDispatch } from '../hooks/redux'
import { ModeActions } from '../reducers/ModeSlice'


import MenuTab from '../components/MenuTab'


const Search: NextPage = () => {

    const dispatch = useAppDispatch() 

    useEffect(() => {
        dispatch(ModeActions.setCurrentMode('search'))

    }, [])

    return (
    <div>
        <MenuTab></MenuTab>
        <h1>SEARCH</h1>
    </div>
  )
}

export default Search
