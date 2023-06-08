import React from 'react'
import { useTranslation } from "react-i18next";
import "../css/projet.css";
export default function Projer () {
  const { t } = useTranslation();
    return (
      <div>
        <div className='projet'>
        <a href="https://github.com/medbbh/PFE" className="brand-name">
        <strong className='lp'> {t("np")} <br></br><p className='c-lp'>{t("dt_np")} <a href="https://www.syskat.com/index.php/en/2013-02-20-08-59-23" > Syskat Technologie</a></p></strong> 
        </a>
        <div className='c-projet'>
        <p>{t("exp")}</p>
        </div>
        </div>
        <br></br>
      </div>
    )

}


