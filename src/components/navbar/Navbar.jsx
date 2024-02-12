import React from "react";
import logo from '../../resources/logo.svg'

export function Navbar() {
  return (
    <div className="o-navbar">
      <div className="o-top-navar">
        <div className="o-logo-container">
          <img src={logo} alt="" className="o-image-navbar"></img>
        </div>
        <div className="o-content-navbar">
          <div className="o-top-content-text">
            <p>Envíos y Devoluciones Gratis por Lanzamiento</p>
            <span>
              <strong>¿Necesitas Ayuda?</strong>
              <span>
                <img src="" alt=""></img>
              </span>
            </span>
            <span>
              <strong>Inicia Sesión</strong>
            </span>
          </div>
          <div className="o-down-content-text">
            <input></input>
            <span>
              <span>
                <img src="" alt="" ></img>
              </span>
              <strong>Inicia Sesión</strong>
            </span>
            <span>
              <span>
                <img src="" alt=""></img>
              </span>
              <strong>Inicia Sesión</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="o-down-navar">
        <a href="#">NUEVO</a>
        <a href="#">MUJER</a>
        <a href="#">HOMBRE</a>
        <a href="#">BELLEZA</a>
        <a href="#">DECORACIÓN</a>
        <a href="#">NIÑAS</a>
        <a href="#">DISEÑADORES</a>
        <a href="#">TOKTOK KIDS</a>
        <a href="#">SALE</a>
      </div>
    </div>
  );
}
