import { useState } from "react";
import BurgerMenu  from "./components/BurgerMenu";
import s from "./Header.module.scss";
import BgMenuImg from '../../assets/bgmenu.svg';

export const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };
  return (
    <header>
      <div className="container">
        <div className={s.headerContent}>
          <h1>
            <span> Услуги</span> в Астана
          </h1>
          <nav className={s.nav}>
            <ul>
              <li>
                <a href="">На главную</a>
              </li>
              <li>
                <a href="#Services">Услуги</a>
              </li>
              <li>
                <a href="#Job">Как мы работаем?</a>
              </li>
              <li>
                <a href="#Contacts">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className={s.headerButtons}>
            <a href="https://api.whatsapp.com/send?phone=7017587203">
              <button className={s.wp}>WhatsApp</button>
            </a>
            <a href="tel:87017587203">
              <button className={s.phone}>Звонок</button>
            </a>
          </div>
          <div className={s.BurgerMenuOpen} onClick={toggleMenu}>
            <img src={BgMenuImg} alt="Menu" />
          </div>
          <BurgerMenu isOpen={isMenuActive} onClose={closeMenu} />
        </div>
      </div>
    </header>
  );
};
