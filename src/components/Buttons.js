import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeButtons() {
    return (
        <div className='home-button-container'>
            <Link to='/users' href='' className='home-button' >
                <img src='users.png' />
                <h4>USERS</h4>
            </Link>
            <Link to='/roles' href='' className='home-button' >
                <img src='roles.png' />
                <h4>ROLES</h4>
            </Link>
        </div>
    )
}


export function UserButtons() {
    return (
        <div className='home-button-container'>
            <Link to='/users/addedit' href='' className='home-button' >
                <img src='../add.png' />
                <h4>ADD NEW USER</h4>
            </Link>
        </div>
    )
}

