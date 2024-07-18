import s from "./Found.module.scss";

export const Found = () => {
  return (
    <section id="Found" className={s.Found}>
      <div className="container">
        <div className={s.foundContent}>
          <div className={s.foundText}>
            <h1>Не нашли нужную услугу?</h1>
            <p>Свяжитесь с нами и спросите лично!</p>
            <p>Мы выполняем более 50-ти различных услуг по городу Астана</p>
            <div className={s.foundButton}>
              <button>WhatsApp</button>
              <a href="tel:87017587203"><button>Звонок</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
