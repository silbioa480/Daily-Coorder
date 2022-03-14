import React from 'react';
import '../css/Footer.css';


const Footer = (props) => {
  return (
    <footer>
      <div class="inner">
        <div class="footer-message">
          의류 기반으로 추천 커뮤니티입니다. 상업적 목적이 아닌 서비스입니다.
        </div>
        <div class="footer-contact">contact: email@email.com</div>
        <div class="footer-copyright">
          Copyright 2022 © All rights reserved.
        </div>
      </div>
    </footer>
  )
};

export default Footer;