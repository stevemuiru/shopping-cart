import React from "react";
import { Link } from "react-router-dom";
import homepageImg from "./assets/images/carhartt/homepage.jpg";
import logoImg from "./assets/images/logo.png";


export function Home() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-logo">
          <img src={logoImg} alt="Logo" />
          </li>

          
          <li className="nav-items">
            <ul className="nav-links">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="home-content">
        <h1>everyday essentials built to handle anything</h1>
        <div className="home-logo">
        <img src={homepageImg} alt="Homepage" />
        </div>
      </div>

      <footer>
        <div className="footer-content">
         <div className="about">
          <h3>ABOUT</h3>
          <ul className="about-details">
            <li>About Carhartt</li>
            <li>Newsletter</li>
            <li>Career opportunities</li>
          </ul>
         </div>

         <div className="help">
          <h3>HELP</h3>
          <ul className= "about-details">
            <li>Contact us</li>
            <li> FAQ</li>
            <li>Warranty</li>
            <li>Returns & Refunds</li>
          </ul>
         </div>

         <div className="about-details">
          <h3>CAPITAL BRANDS</h3>
          <li>Our brands</li>
          <li>Carhartt company gear</li>
          <li>Work in progress</li>
         </div>


        </div>

        <div className="terms">
          <p>Terms of sale | Terms of use | Privacy policy</p>
        </div>
        <div className="footer-details">Copyright © 2026 Carhartt, Inc. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
