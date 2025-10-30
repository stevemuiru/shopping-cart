import React from 'react'
import { Link } from "react-router-dom"


export function Home() {
  
  return(
    <div>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-logo">
          <img src="/images/carhartt-logo.png" alt="logo" />
        </li>

        <div className="nav-items">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
           <Link to="/cart">Cart</Link>
          </li>
        </div>
      </ul>
    </nav>

    <div className="home-content">
      <h1>everyday essentials built to handle anything</h1>
      <div className="home-logo">
      <img src="/images/Carhartt exports/carhartthomepage.jpg" alt="a man working" />
      </div>
    </div>

    <footer> 
      <p className='footer-details'>All rights reserved</p>
    </footer>
    </div>

    
  )
}