import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={s.headerContent}>
          <h1>
            <span> Услуги</span> в Кызылорде
          </h1>
          <nav>
            <ul>
              <li>
                <a href="">На главную</a>
              </li>
              <li>
                <a href="">Услуги</a>
              </li>
              <li>
                <a href="">Как мы работаем?</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className={s.headerButtons}>
            <button>WhatsApp</button>
            <button>Звонок</button>
          </div>
        </div>
      </div>
    </header>
  );
};
