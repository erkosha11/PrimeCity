import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer id="Contacts" className={s.footer}>
      <div className="container">
        <div className={s.footerContent}>
          <div>
            <p>
              <strong>ТOO PrimeCity</strong>
            </p>
            <p>
              Казахстан, г. Астана.
              <br /> ул. Казыбек Би дом 5А, 417, индекс 010000
            </p>
          </div>
          <div>
            <p>Ответственное лицо Балпышев Арсен Аскарбекович</p>
            <p>
              <a href="mailto:arsen.balpyshev@gmail.com">
                arsen.balpyshev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
