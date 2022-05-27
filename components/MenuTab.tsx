import React, { useEffect } from 'react'
import Link from 'next/link'

import { useAppSelector } from '../hooks/redux'

interface MenuTabProps {
    
}

const MenuTab: React.SFC<MenuTabProps> = () => {

    const currentMode = useAppSelector((state) => state.mode.currentMode)

    useEffect(() => {

        console.log('asasdasd')

    }, [])

    return (
        <div>
            currentMode: {currentMode}
            <br />
            <Link href='/'>home</Link> <br />
            <Link href='/search'>search</Link> <br />
            <Link href='/post/hahaha'>post : hahahah</Link> <br />
        </div>
    )
}



export default MenuTab