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
              Казахстан, Z05X2Y1
              <br /> г.Астана,
              <br />
              ул. Қазыбек би, дом 5А
            </p>
          </div>
          <div>
            <p>Ответственное лицо – Арсен Балпышев</p>
            <p>
              <a href="mailto:arsen.balpyshev@gmail.com ">
                arsen.balpyshev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
