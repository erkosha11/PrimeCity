import s from "./Found.module.scss";

export const Found = () => {
  return (
    <section id="Found" className="Found">
      <div className="container">
        <div className={s.foundContent}>
          <h1>Не нашли нужную услугу?</h1>
          <p>Свяжитесь с нами и спросите лично!</p>
          <p>Мы выполняем более 50-ти различных услуг по городу Алматы</p>
          <div className={s.foundButton}>
            <button>WhatsApp</button>
            <button>Звонок</button>
          </div>
        </div>
      </div>
    </section>
  );
};
