import { Text } from "./component/Text";
import s from "./Services.module.scss";

export const Services = () => {
  return (
    <section id="Services" className={s.Services}>
      <div className="container">
        <div className={s.servicesContent}>
          <div className={s.servicesHeader}>
            <div className={s.serviceTxt}>
              <h1>Наши услуги</h1>
              <p>
                Выберите подходящую услугу для вас и свяжитесь с нами по кнопке
                справа
              </p>
            </div>
            <div className={s.servicesButtons}>
            <a href="https://api.whatsapp.com/send?phone=7017587203"><button className={s.wp}>WhatsApp</button></a>
            <a href="tel:87017587203">
              <button className={s.phone}>Звонок</button>
            </a>
            </div>
          </div>
          <div className={s.servicesCards}>
            <Text />
          </div>
        </div>
      </div>
    </section>
  );
};
