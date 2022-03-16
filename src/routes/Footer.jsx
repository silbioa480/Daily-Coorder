import React from 'react';
import '../css/Footer.css';


const Footer = (props) => {
  return (
    <>
      <ul className='ukraine'>
        <li className='blue'></li>
        <li className='yellow'></li>
      </ul>
      <footer>
        <div className="inner">
          <div className="footer-message">
            의류 추천 커뮤니티 사이트입니다. 현재 상업적 목적이 없는 서비스입니다.
          </div>
          <div className="footer-contact">contact: email@email.com</div>
          <div className="footer-copyright">
            Copyright 2022 © All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;