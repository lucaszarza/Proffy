import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

import "./styles.css";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="voltar" />
          </Link>
          <img src={logoImg} alt="logo" />
        </div>
        <div className="header-content">
          <strong>Estes são os Proffys disponíveis</strong>
        </div>
      </header>
    </div>
  );
}
