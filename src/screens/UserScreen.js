import React from 'react'
import Appbar from '../components/Appbar'
import '../styles/home.css'
import { UserButtons } from '../components/Buttons'
import Users from '../components/Users'


export default function UserScreen() {
    return (
        <>
            <Appbar />
            <div className='container-wrapper'>
                <UserButtons />
                <Users />
            </div>
        </>
    )
}
