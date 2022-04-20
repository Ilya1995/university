import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel className="home-page__carousel">
        <Carousel.Item className="home-page__carousel-item a1">
          <Carousel.Caption>
            <h3>Подсистема аналитики для автоматизированной системы управления образовательным процессом</h3>
            <p>"Открытый цифровой университет"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="home-page__carousel-item a2">
          <Carousel.Caption>
            <h3>Данный функционал предназначен для отображения статистики:</h3>
            <p>аттестаций, стипендий, сессий</p>
            <h3>Уровни отображения:</h3>
            <p>университет, институт, кафедра, группа.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export {HomePage};
