import React from 'react'

export function home() {
  
  return(
    <body>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-logo">
          <img src="/images/carhartt-logo.png" alt="logo" />
        </li>

        <div className="nav-items">
          <li className="nav-item">
            <a href="">Home</a>
          </li>
          <li className="nav-item">
            <a href="">Shop</a>
          </li>
          <li className="nav-item">
           <a href="">Cart</a>
          </li>
        </div>
      </ul>
    </nav>

    <div className="home-content">
      <h1>EVERYDAY ESSENTIALS BUILT TO HANDLE ANYTHING</h1>
      <div className="home-logo">
      <img src="/images/heber-davis-X_55Pa9E8h4-unsplash.jpg" alt="a man working" />
      </div>
    </div>
    </body>

    
  )
}