import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel className="home-page__carousel" variant="dark">
        <Carousel.Item className="home-page__carousel-item">
          <Carousel.Caption>
            <div>
              <h3 className="text-color fw-normal">
                Подсистема аналитики для автоматизированной системы управления образовательным процессом
              </h3>
              <h3 className="text-color__active fw-bold">"Открытый цифровой университет"</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="home-page__carousel-item">
          <Carousel.Caption>
            <h3 className="text-color fw-normal">
              Данный функционал предназначен для отображения статистики:
              <span className="text-color__active fw-bold"> аттестаций, стипендий, сессий</span>.
            </h3>
            <h3 className="text-color fw-normal">
              Уровни отображения:
              <span className="text-color__active fw-bold"> университет, институт, кафедра, группа</span>.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export {HomePage};
