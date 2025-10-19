import React from 'react'

export function home() {
  
  return(
    <div>
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
      <h1>everyday essentials built to handle anything</h1>
      <div className="home-logo">
      <img src="src/images/Carhartt exports/b2c5a6268ff0128f5e11ae70e44fbc35.jpg" alt="a man working" />
      </div>
    </div>

    <footer></footer>
    </div>

    
  )
}