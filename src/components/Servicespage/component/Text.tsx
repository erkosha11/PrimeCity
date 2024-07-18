
import s from './Text.module.scss';
import OknoImg from '../../../assets/okno.jpg';
import OtoplenieImg from '../../../assets/otoplenie.jpg';
import KondikImg from '../../../assets/kondik.jpg';
import KyhnImg from '../../../assets/kyhn9.jpg';
import BezopastImg from '../../../assets/bezopast.jpg';
import MebelImg from '../../../assets/mebel.jpg';
import PolImg from '../../../assets/pol.jpg';
import ZaborImg from '../../../assets/zabor.jpg';

export const Text = () => {
  return (
    <div className={s.text}>
      <div className={s.card}>
        <img src={OknoImg} alt="Монтаж окон" />
        <h1>Монтаж окон</h1>
        <p>Здесь можно добавить описание услуги по монтажу окон.</p>
      </div>

      <div className={s.card}>
        <img src={OtoplenieImg} alt="Установка систем отопления" />
        <h1>Cистем отопления</h1>
        <p>Текст описания услуги по установке отопления.</p>
      </div>

      <div className={s.card}>
        <img src={KondikImg} alt="Установка систем кондиционирования и вентиляции" />
        <h1>Cистем кондиционирования и вентиляции</h1>
        <p>Описание услуг по установке кондиционеров и вентиляционных систем.</p>
      </div>

      <div className={s.card}>
        <img src={KyhnImg} alt="Установка кухонных гарнитуров и техники" />
        <h1>Кухонных гарнитуров и техники</h1>
        <p>Текст описания услуги по установке кухонных шкафов и бытовой техники.</p>
      </div>

      <div className={s.card}>
        <img src={BezopastImg} alt="Установка систем безопасности" />
        <h1>Систем безопасности</h1>
        <p>Описание услуг по установке охранных систем и видеонаблюдения.</p>
      </div>

      <div className={s.card}>
        <img src={MebelImg} alt="Установка мебели" />
        <h1>Установка мебели</h1>
        <p>Текст описания услуги по сборке и установке мебели.</p>
      </div>

      <div className={s.card}>
        <img src={PolImg} alt="Установка полов и покрытий" />
        <h1>Установка полов и покрытий</h1>
        <p>Описание услуг по укладке ламината, паркета и установке плитки.</p>
      </div>

      <div className={s.card}>
        <img src={ZaborImg} alt="Установка ограждений и ворот" />
        <h1>Установка ограждений и ворот</h1>
        <p>Текст описания услуги по монтажу заборов, калиток и ворот.</p>
      </div>

    </div>
  );
}

