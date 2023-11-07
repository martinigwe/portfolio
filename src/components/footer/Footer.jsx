import React from "react";
import "./footer.css";


const Footer = () => {
    return (
         <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Igwe</h1>

                <ul className="footer__list">

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.facebook.com/igwe.martin.33" className="footer__social-link" target="_black">
                <i class="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/ryan_shircel1/" className="footer__social-link" target="_black"><i class="bx bxl-instagram"></i></a>
            <a href="https://x.com/dev_igwe?s=21" className="footer__social-link" target="_black"><i class="bx bxl-twitter"></i></a>
                </div>

                <span className="footer__copy">
                    &#169; Igwe's Blog. All rights reserved
                </span>
            </div>
         </footer>
    )
}

export default Footer;