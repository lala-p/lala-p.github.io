import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useAppDispatch } from '../../hooks/redux'
import { ModeActions } from '../../reducers/ModeSlice'

import MenuTab from '../../components/MenuTab'

const Post: NextPage = () => {

    const dispatch = useAppDispatch() 

    const router = useRouter()
    const postCode = router.query.postCode

    useEffect(() => {
        dispatch(ModeActions.setCurrentMode('postDetail'))

    }, [])

    return (
        <div>
            <MenuTab></MenuTab>
            <h1>POST</h1>
            <h2>postcode : {postCode}</h2>
        </div>
    )
}

export default Post
