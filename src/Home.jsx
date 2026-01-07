import React from "react";
import { Link } from "react-router-dom";
import homepageImg from "./assets/images/carhartt/homepage.jpg";
import logoImg from "./assets/images/carhartt/logo.png";


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
          <h3>about</h3>
          <ul className="about-details">
            <li>About Carhartt</li>
            <li>Newsletter</li>
            <li>Career opportunities</li>
          </ul>
         </div>

         <div className="help">
          <h3>help</h3>
          <ul className="help-details">
            <li>contact us</li>
            <li> FAQ</li>
            <li>Warranty</li>
            <li>Returns & Refunds</li>
          </ul>
         </div>

         <div className="capital-brands">
          <h3>Capital Brands</h3>
          <li>our brands</li>
          <li>carhartt company gear</li>
          <li>work in <progress></progress></li>
         </div>


        </div>

        <div className="terms">
          <p>Terms of sale | terms of use | privacy policy</p>
        </div>
        <div className="footer-details">Copyright © 2026 Carhartt, Inc. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
