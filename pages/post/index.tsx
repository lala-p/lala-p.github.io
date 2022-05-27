import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import { useAppDispatch } from '../../hooks/redux'
import { ModeActions } from '../../reducers/ModeSlice'

import MenuTab from '../../components/MenuTab'

const PostHome: NextPage = () => {

    const dispatch = useAppDispatch() 

    useEffect(() => {
        dispatch(ModeActions.setCurrentMode('postHome'))

    }, [])

    return (
        <div>
            <MenuTab></MenuTab>
            <h1>POST Home</h1>
        </div>
    )
}

export default PostHome
