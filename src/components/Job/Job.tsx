import s from "./Job.module.scss";
import PhoneImg from "../../assets/phone.svg";
import CalcImg from "../../assets/calcu.svg";
import CarImg from "../../assets/car.svg";
import PayImg from "../../assets/pay.svg";
export const Job = () => {
  return (
    <section id="Job" className="Job">
      <div className="container">
        <div className={s.jobContent}>
          <div className={s.jobHeader}>
            <div className={s.jobTxt}>
              <h1>Как мы работаем?</h1>
              <p>
                Ответьте на несколько вопросов, после чего я сориентирую Вас по
                стоимости
              </p>
            </div>
          </div>
          <div className={s.jobFooter}>
            <div className={s.jobCard}>
              <img className={s.jobPhoneImg} src={PhoneImg} alt="" />
              <p>Вы связываетесь с нами</p>
              <p>
                <a href="tel:87017587203">+7(701)758-72-03</a>
              </p>
            </div>

            <div className={s.jobCard}>
              <img className={s.jobCalcImg} src={CalcImg} alt="" />
              <p>Расчёт примерной стоимости вашего ремонта</p>
            </div>

            <div className={s.jobCard}>
              <img className={s.jobCarImg} src={CarImg} alt="" />
              <p>Выезд мастера и ремонт в ближайшее время</p>
            </div>

            <div className={s.jobCard}>
              <img className={s.jobPayImg} src={PayImg} alt="" />
              <p>Оплата</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
