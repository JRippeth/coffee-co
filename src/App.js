import React, { useState, useRef, useEffect } from 'react';
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import './App.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';

const App = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <h1 className="nav-logo">CoffeeCo.</h1>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className="nav-links-container" ref={linksContainerRef}>
            <ul id="nav-links" className="nav-links" ref={linksRef}>
              <li>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="nav-link">
                  Products
                </a>
              </li>
              <li>
                <a href="#prices" className="nav-link">
                  Prices
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <div className="hero-text">
          <h1>Good Morning</h1>
          <p>Black coffee and latte 2x1</p>
        </div>
        <div className="hero-links">
          <p className="hero-number">+ 01 800 25923857</p>
          <a href="#about" className="btn hero-btn">
            See More
          </a>
          <ul className="social-icons">
            <li className="social-icon">
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="about-img-container">
          <div className="box-1"></div>
          <div className="box-2"></div>
          <img src={img1} alt="image1" className="about-img"></img>
        </div>
        <article className="about-article">
          <h1>Organic Coffee</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amte, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliqua erat
            volupat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amte, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
          <a href="#products" className="btn about-btn">
            See More
          </a>
        </article>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="products-header">
          <h1 className="products-title">Coffee Products</h1>
          <p>Buy Online with 20% discount</p>
        </div>
        <div className="products-imgs-container">
          <img src={img2} alt="image2" className="product-img1" />
          <img src={img3} alt="image3" className="product-img2" />
          <img src={img4} alt="image4" className="product-img3" />
        </div>
        <article className="products-article">
          <h1>Black Coffee</h1>
          <p>Americano with 2 shots.</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nomummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nomummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volupat
          </p>
          <a href="#products" className="btn prices-btn">
            See More
          </a>
        </article>
        <div className="products-bar">
          <div className="product1 product">
            <h1>Black Coffee</h1>
            <p>Coffee Collection</p>
          </div>
          <div className="product2 product">
            <h1>Green / Black Tea</h1>
            <p>New Items</p>
          </div>
          <div className="product3 product">
            <h1>Chai / Latte Drinks</h1>
            <p>Buy now with 20% off</p>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="section">
        <div className="prices-img-container">
          <div className="box-3"></div>
          <div className="box-4"></div>
          <img src={img5} alt="image5" className="prices-img"></img>
        </div>
        <article className="prices-article">
          <h1>Black Coffee</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amte, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliqua erat
            volupat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amte, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
          <div className="select-container">
            <FaArrowLeft className="select-arrow" />
            <FaArrowRight className="select-arrow" />
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer id="footer" className="section">
        <div className="footer-copy">
          <h1>CoffeeCo.</h1>
          <br />
          <p>We are a shop located in different parts of the world.</p>
          <p>Our team is working from New York and London</p>
          <br />
          <p>Copyright 2021 - All Rights Reserved.</p>
        </div>
        <div className="footer-about">
          <h1>About Us</h1>
          <br />
          <ul>
            <li>Our Blog</li>
            <li>Careers</li>
            <li>News</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-products">
          <h1>Products</h1>
          <br />
          <ul>
            <li>Black Coffee</li>
            <li>Americano</li>
            <li>Green Tea</li>
            <li>Chai Latte</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h1>About Us</h1>
          <br />
          <ul>
            <li>The Team</li>
            <li>NY Shop</li>
            <li>London Shop</li>
            <li>Help Center</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default App;
