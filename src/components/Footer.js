import React from 'react';
import "../css/Footer.css";
import { FaFacebook,FaTwitter,FaInstagram ,FaYoutube,FaLinkedin,FaGithub} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>       
      <div className='s-m'>
        <a href="https://web.facebook.com/people/%D8%A7%EF%BA%91%EF%BB%AC%EF%BA%8E%EF%BB%A9-%EF%BA%83%EF%BB%A3%EF%BA%92%EF%BB%B4%EF%BA%AE%EF%BB%B3%EF%BB%9A/100011381646756/" className='i-c'>
          <i className='fa'><FaFacebook /></i>
        </a>
        <a href="https://twitter.com/bahahembeirik" className='i-c'>
          <i className='fa'><FaTwitter /></i>
        </a>
        <a href="https://www.instagram.com/bah_8_/" className='i-c'>
           <i className='fa'><FaInstagram /></i>
        </a>
        <a href="https://www.youtube.com/channel/UCEVTUsP8EKh5Lh4FDpo-fpA" className='i-c'>
           <i className='fa'><FaYoutube /></i>
        </a>
        <a href="https://www.linkedin.com/in/bahah-m-beirik-aa9a7520a/" className='i-c'>
         <i className='fa'><FaLinkedin /></i>
       </a>
       <a href="https://github.com/BahMbeirik" className='i-c'>
          <i className='fa'><FaGithub /></i>
        </a>
       </div>

       <div className='fot'>
          <strong className='sm'>Sign up for our newsletter</strong>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className='inpt' type="email" placeholder='Email address'/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='pry'>SUBSCRIBE</button>
     </div>
         <br></br>
        <div className='pg'>
          <p>
          bienvenue sur notre site web, et merci de visiter notre site web. nous sommes là pour vous servir.
           l'inscription sur notre site web vous permettra d'obtenir nos dernières nouvelles. notre site web fournit les services suivants :
           <br></br>
            développement de sites web
            <br></br>
            création de sites web
            <br></br>
            téléchargement sites web à internet .
          </p>
        </div>
         <div id='lsk'>
            <div className='link'>
              <h5>Links</h5>

              <ul >
                <li>
                  <a href='/'>
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div className='link'>
              <h5>Links</h5>

              <ul >
                <li>
                  <a href='/projer'>
                    Les projers
                  </a>
                </li>
              </ul>
            </div>

            <div className='link'>
              <h5 >Links</h5>
              <ul >
                <li>
                  <a href='/contact'>
                    Contacter Nous
                  </a>
                </li>
              </ul>
            </div>
          </div>

      <div className='tcp' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <footer>{`Copyright © Upbeat Code ${year}`}</footer>
      </div>
    </div>
  );
}

