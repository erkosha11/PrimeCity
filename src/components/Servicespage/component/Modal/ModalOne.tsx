import React from 'react';
import OknoImg from "../../../../assets/okno.jpg";
import { Modal } from 'antd';
import s from "../Text.module.scss";
const ModalOne = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className={s.text}>
      <img src={OknoImg} alt="Монтаж окон" />
      <h1>МОНТАЖ ОКОН, ДВЕРЕЙ И ПЕРЕГОРОДОК </h1>
      </div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ModalOne;
