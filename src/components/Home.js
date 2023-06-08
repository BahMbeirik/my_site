import React from 'react'
import { useTranslation } from "react-i18next";
import "../css/home.css";
export default function Home () {
  const { t } = useTranslation();
    return (
      <div className='bod'>
        <div className='home'>
            <div className='mn7'>
            <strong>{t("sn")}</strong>
            </div>
            <div className='g-about'>
            <div className='about'>
            <h2>{t("about")} <br></br>
            <p className='sz'>{t("s_about")}</p></h2>
            </div>
            <div className='profil'>
            <div><img className='mg' src="profil.jpg" alt="logo" /><br></br> <h2>{t("title")}</h2>
            <p className='sz'>{t("dw")}</p></div>
            </div>
            </div>
        </div>
      </div>
    ) 
}

