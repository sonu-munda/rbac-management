import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeButtons() {
    return (
        <div className='home-button-container'>
            <Link to='/home/users' href='' className='home-button' >
                <img src='users.png' />
                <h4>USERS</h4>
            </Link>
            <Link to='/home/users' href='' className='home-button' >
                <img src='roles.png' />
                <h4>ROLES</h4>
            </Link>
        </div>
    )
}

