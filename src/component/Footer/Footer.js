import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="kateqories-blogs">
        <h3>Kateqoriyalar</h3>
        <div className="blogs">
          <p>
            <Link to="/bloglar">Stil</Link>
          </p>
          <p>
            <Link to="/bloglar">İdman</Link>
          </p>
          <p>
            <Link to="/bloglar">Sağlıq</Link>
          </p>
        </div>
      </div>
      <div className="social-icons">
      <Link id="onlymenfooter" to="/" >
          OnlyMen
                </Link>
        <div>
        <h3>Bizi sosial mediada izləyin</h3>
        <div className="sosialmedia">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
          <Link
            className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </Link>
          <Link
            className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </Link>
        </div>
        </div>
        
      </div>
      <div className="sehifeler">
        <h3>Səhifələr</h3>
        <p>
          <Link exact="true" to="/">
            Əsas Səhifə
          </Link>
        </p>
        <p>
          <Link to="/bloglar">Bloglar</Link>
        </p>
        <p>
          <Link to="/contact">Əlaqə</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
