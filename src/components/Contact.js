import React from 'react';
import "../css/contact.css";
import { BiPhone,BiMailSend ,BiMap} from "react-icons/bi";
import { FaFacebook,FaTwitter,FaInstagram ,FaYoutube} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact () {
  const { t } = useTranslation();
  return (
    <div className='bd'>
      <h1>{t("nc")}</h1>
     <div id="contact-container">
     <div className='contact-info'>
     <h4>{t("ci")}</h4>
     <p>{t("s_ci")}</p>
     <br></br>
     <br></br>
     <div className='icon-text'>
     <i className='fa'><BiPhone/> </i>
     <span>+222 41168885</span>
     </div>
     <div className='icon-text'>
     <i className='fa'><BiMailSend /></i>
     <span>bahahembeirik@gmail.com</span>
     </div>
     <div className='icon-text'>
     <i className='fa'><BiMap/> </i>
     <span>{t("loc")}</span>
     </div>
     <div className='social-media'>
     <a href="https://web.facebook.com/people/%D8%A7%EF%BA%91%EF%BB%AC%EF%BA%8E%EF%BB%A9-%EF%BA%83%EF%BB%A3%EF%BA%92%EF%BB%B4%EF%BA%AE%EF%BB%B3%EF%BB%9A/100011381646756/" className='icon-circle'>
     <i className='fa'><FaFacebook /></i>
     </a>
     <a href="https://twitter.com/bahahembeirik" className='icon-circle'>
     <i className='fa'><FaTwitter /></i>
     </a>
     <a href="https://www.instagram.com/bah_8_/" className='icon-circle'>
     <i className='fa'><FaInstagram /></i>
     </a>
     <a href="https://www.youtube.com/channel/UCEVTUsP8EKh5Lh4FDpo-fpA" className='icon-circle'>
     <i className='fa'><FaYoutube /></i>
     </a>
     </div>
     </div>
     <form className='fr'>
     <div className='col'>
        <div className="form-group">
          <label className='lb'> {t("nom")}</label>
          <input className='inp' type="text"  />
        </div>
        <div className="form-group">
          <label className='lb'> {t("mail")}</label>
          <input className='inp' type="email"/>
        </div>
        </div>
        <br></br>
        <div className='col'>
        <div className="form-group">
          <label className='lb'> {t("Objet")} </label>
          <textarea className='inp' type="text" />
        </div>
        <div className="form-group">
          <label className='lb'> {t("ms")} </label>
          <textarea className='inp' type="text" />
        </div>
        </div>
        <br></br>
        <div className='col'>
          <div className="form-group">
            <label className='lb'>{t("wn")}</label>
            <div id='radio-buttons'>
              <div className='radio-button'>
                <input type="radio" id='radiopersonal' name='type' value='personal'/><label className='lb' for='radiopersonal'>{t("pr")}</label>
              </div>
              <div className='radio-button'>
                <input type="radio" id='radioecommerce' name='type' value='ecommerce'/><label className='lb' for='radioecommerce'>{t("ec")}</label>
              </div>
              <div className='radio-button'>
                <input type="radio" id='radiolandingpage' name='type' value='landingpage'/><label className='lb' for='radiolandingpage'>{t("lp")}</label>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="form-group">
            <div className='btt'>
              <button className='primary'>{t("em")}</button>
            </div>
          </div>
        </div>

      </form>
     </div>
     <br></br>
    </div>
  )
}
