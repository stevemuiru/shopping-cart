import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react";
import logoImg from "./assets/images/logo.png"
import slide1Img from "./assets/images/carousel/slide1.jpeg";
import slide2Img from "./assets/images/carousel/slide2.jpeg";
import slide3Img from "./assets/images/carousel/slide3.jpeg";
import slide4Img from "./assets/images/carousel/slide4.jpeg";
import slide5Img from "./assets/images/carousel/slide5.jpeg";
import slide6Img from "./assets/images/carousel/slide6.jpeg"

export function Home() {

  const slides = [slide1Img, slide2Img, slide3Img, slide4Img, slide5Img, slide6Img]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  },[])

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
        <img src={slides[index]} alt="Homepage" className ="carousel-image" />

        </div>

        <div className="carousel-dots">
          {slides.map((_, dotIndex) => (
            <span
              key={dotIndex}
               className={dotIndex === index ? "dot active" : "dot"}
                onClick={() => setIndex(dotIndex)}
                 />
                   ))}
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
            <li>Corporate Responsibily</li>
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
          <p>Terms of sale   | Terms of use |   Privacy policy</p>
        </div>
        <div className="footer-details">Copyright © 2026 Carhartt, Inc. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
