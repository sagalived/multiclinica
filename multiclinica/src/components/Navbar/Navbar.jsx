import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="../../../public/assets/logo.svg" alt="logo da Multiclinica" />
      </div>
      <button className="navbar__toggle" onClick={handleNavToggle}>
        {isNavOpen ? 'Fechar' : 'Menu'}
      </button>
      <ul className={`navbar__links ${isNavOpen ? 'open' : ''}`}>
        <li className="navbar__item itens">A Clinica</li>
        <li className="navbar__item itens">Serviços</li>
        <li className="navbar__item itens">Convênios</li>
        <li className="navbar__item itens itens__4">Contato</li>
      </ul>
    </nav>
  );
};

export default Navbar;
