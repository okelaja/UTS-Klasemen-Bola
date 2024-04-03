import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3 className="footer-title">Tentang Kami</h3>
            <p className="footer-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem sapiente rem excepturi cumque. Maiores, neque! Odio,
              iure sed. Nulla ipsum vitae harum ab consequatur quisquam nisi
              iure hic odio explicabo.
            </p>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Metode Pembayaran</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <i className="fab fa-cc-visa"></i>
                <span>VISA</span>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Kontak</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <i className="fas fa-phone"></i>
                <span>+62 83 144 889 060</span>
              </li>
              <li className="footer-list-item">
                <i className="fas fa-envelope"></i>
                <span>haikalg355@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p className="footer-text">
              &copy; 2021 Haikal. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
