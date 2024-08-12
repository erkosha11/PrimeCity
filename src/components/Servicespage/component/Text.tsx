import React, { useState } from "react";
import { Button, Modal } from "antd";
import s from "./Text.module.scss";
import OknoImg from "../../../assets/okno.jpg";
import OtoplenieImg from "../../../assets/otoplenie.jpg";
import BezopastImg from "../../../assets/bezopast.jpg";
import PolImg from "../../../assets/pol.jpg";
import ZaborImg from "../../../assets/zabor.jpg";
import servicesData from "../../../App/servicesData.json";

interface Service {
  image: string;
  alt: string;
  title: string;
  description: string[];
}

const images: { [key: string]: string } = {
  OknoImg,
  OtoplenieImg,
  BezopastImg,
  PolImg,
  ZaborImg,
};

export const Text: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const showModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={s.text}>
      {servicesData.services.map((service: Service, index: number) => (
        <div key={index} className={s.card}>
          <img src={images[service.image]} alt={service.alt} />
          <h1>{service.title}</h1>
          <Button type="primary" onClick={() => showModal(service)}>
            Подробнее
          </Button>
        </div>
      ))}

      {selectedService && (
        <Modal
          title={null}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null} // Убираем кнопки Cancel и OK
        >
          <div className={s.modalContent}>
            <div className={s.modalLeft}>
              <img
                src={images[selectedService.image]}
                alt={selectedService.alt}
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  width: "472px",
                }}
              />
              <h1 style={{ marginTop: "10px" }}>{selectedService.title}</h1>
            </div>
            <div className={s.modalRight}>
              <ul>
                {selectedService.description.map(
                  (desc: string, index: number) => (
                    <li key={index}>{desc}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
