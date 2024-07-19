import s from "./Text.module.scss";
import OknoImg from "../../../assets/okno.jpg";
import OtoplenieImg from "../../../assets/otoplenie.jpg";
import KondikImg from "../../../assets/kondik.jpg";
import BezopastImg from "../../../assets/bezopast.jpg";
import PolImg from "../../../assets/pol.jpg";
import ZaborImg from "../../../assets/zabor.jpg";

export const Text = () => {
  return (
    <div className={s.text}>
      <div className={s.card}>
        <img src={OknoImg} alt="Монтаж окон" />
        <h1>Установочные и монтажные работы </h1>
        <p>
          межкомнатных дверей пластиковых и деревянных конструкций. Входные
          группы ,решетки для входных групп (распашные раздвижные ,маятниковые
          ). (пвх , поликарбонат, металл)
        </p>
      </div>

      <div className={s.card}>
        <img src={OtoplenieImg} alt="Установка систем отопления" />
        <h1>Cистем отопления</h1>
        <p>
          Монтаж радиаторов и котлов отопления ,отопление живых и
          производственных помещений.
        </p>
      </div>

      <div className={s.card}>
        <img
          src={KondikImg}
          alt="Установка систем кондиционирования и вентиляции"
        />
        <h1>Cистем кондиционирования и вентиляции</h1>
        <p>Монтаж кондиционеров и установка вентиляционных систем.</p>
      </div>

      <div className={s.card}>
        <img src={BezopastImg} alt="Установка систем безопасности" />
        <h1>Систем безопасности</h1>
        <p>Монтаж охранных сигнализаций и установка видеонаблюдения.</p>
      </div>

      <div className={s.card}>
        <img src={PolImg} alt="Установка полов и покрытий" />
        <h1>Установка напольных покрытий </h1>
        <p>Плиточные работы</p>
      </div>

      <div className={s.card}>
        <img src={ZaborImg} alt="Установка ограждений и ворот" />
        <h1>Установка ограждений и ворот</h1>
        <p>Установка Металлических и деревянных ограждений и воротных групп</p>
      </div>
    </div>
  );
};
