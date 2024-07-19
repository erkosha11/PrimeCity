import s from "./BurgerMenu.module.scss";
import closeImg from "../../../assets/close.svg";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={s.burgerMenu} onClick={onClose}>
          <div className="container">
            <div className={s.bgmenuHeader}>
              <h1>
                <span> PrimeCity</span>
              </h1>
              <button className={s.close}>
                <img src={closeImg} alt="" />
              </button>
            </div>
            <div className={s.bgmenuContent}>
              <nav>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
