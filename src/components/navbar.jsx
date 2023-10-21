import React from 'react'
import '../styles/navbar.css'

function NavBar() {
    return (
        <div className='h-fit navbar-div'>
            <h3 className='h-fit'>MARKALL</h3>
            <ul className="h-fit nav-list ">
                <li>Services</li>
                <li>Pricing</li>
                <li>About Us</li>
            </ul>
            <span className='h-fit btn'>Get Started</span>
        </div>
    )
}

export default NavBar