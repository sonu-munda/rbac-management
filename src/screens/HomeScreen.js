import React from 'react'
import Appbar from '../components/Appbar'
import Feed from '../components/Feed'
import '../styles/home.css'
import HomeButtons from '../components/Buttons'

export default function HomeScreen() {
    return (
        <>
            <Appbar />
            <div className='container-wrapper'>
                <HomeButtons />
                <Feed />
            </div>
        </>
    )
}
