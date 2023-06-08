import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/navbar.css";
import { LANGUAGES } from "../constants/index";

// const isActive = ({ isActive }: any) => `link ${isActive ? "active" : ""}`;


export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
    return (
        <nav className="navigation">
        <img src="logo.png" alt="logo" />
          <a href="/" className="brand-name">
            {t("title")}
          </a>
          <button className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
        className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                <li>
                    <a href="/">{t("home")}</a>
                </li>
                <li>
                    <a href="/projer">{t("projer")}</a>
                </li>
                <li>
                    <a href="/contact">{t("contact")}</a>
                </li>
                <li>
                  <select defaultValue={i18n.language} onChange={onChangeLang}>
                      {LANGUAGES.map(({ code, label }) => (
                        <option key={code} value={code}>
                          {label}
                        </option>
                      ))}
                  </select>
                </li>
                </ul>
            </div>
        </nav>
      );
  }