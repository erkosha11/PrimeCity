import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={s.headerContent}>
          <h1>
            <span> Услуги</span> в Астана
          </h1>
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
    </header>
  );
};
