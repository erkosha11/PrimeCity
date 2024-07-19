import s from "./Home.module.scss";
import HomeImg from "../../assets/home.jpg";

export const Home = () => {
  return (
    <section id="Home" className={s.home}>
      <div className="container">
        <div className={s.homeContent}>
          <div className={s.hometxt}>
            <h1> Внутренние и наружные установки работы</h1>
            <h2>Моментальный выезд!</h2>
            <a href="tel:87017587203">
              <span>+7 (701)758-72-03</span>
            </a>
            <p>
              <span>90%</span> всех заявок обрабатываются и выполняются в 1 день
            </p>
          </div>
          <div className={s.homeImg}>
            <img src={HomeImg} alt="HomeImg" />
          </div>
        </div>
      </div>
    </section>
  );
};
