import React, { useRef } from 'react';

import Slider from 'react-slick';

import { CarouselArrow } from '@/components/CarouselArrow/CarouselArrow';
import { Modal, ModalProps } from '@/components/Modal/Modal';
import { ModalHeader } from '@/components/Modal/ModalHeader/ModalHeader';
import { cn } from '@/utils/bem-cn';

import { TEAM_MODAL_CAROUSEL_SETTINGS } from './const';

import { vacancies } from '@/data/vacancies/vacancies.json';

import './TeamModal.scss';

const teamModalCn = cn('team-modal');

type IProps = ModalProps;

export const TeamModal = ({ onRequestClose, ...props }: IProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const scrollToPrev = () => sliderRef.current?.slickPrev();
  const scrollToNext = () => sliderRef.current?.slickNext();

  return (
    <Modal onRequestClose={onRequestClose} {...props}>
      <div className={teamModalCn()}>
        <div className={teamModalCn('content')}>
          <ModalHeader
            className={teamModalCn('header')}
            onRequestClose={onRequestClose}
          >
            <h2 className={teamModalCn('header-title')}>
              Станьте частью команды
            </h2>
          </ModalHeader>
          <div className={teamModalCn('form')}>
            <script src="https://forms.yandex.ru/_static/embed.js"></script>
            <iframe
              src="https://forms.yandex.ru/u/665dd839e010db108de35358/?iframe=1"
              frameBorder="0"
              name="ya-form-665dd839e010db108de35358"
            ></iframe>
          </div>
        </div>
        <footer className={teamModalCn('footer')}>
          <div className={teamModalCn('footer-header')}>
            <h2 className={teamModalCn('footer-title')}>Доступные вакансии</h2>
            <div className={teamModalCn('footer-buttons')}>
              <CarouselArrow
                className={teamModalCn('carousel-button')}
                onClick={scrollToPrev}
                type="prev"
              />
              <CarouselArrow
                className={teamModalCn('carousel-button')}
                onClick={scrollToNext}
                type="next"
              />
            </div>
          </div>
          <Slider
            className={teamModalCn('carousel')}
            ref={sliderRef}
            {...TEAM_MODAL_CAROUSEL_SETTINGS}
          >
            {vacancies.map((vacancy) => (
              <div className={teamModalCn('carousel-item')} key={vacancy.id}>
                <h3 className={teamModalCn('carousel-item-title')}>
                  {vacancy.grade}
                </h3>
                <div className={teamModalCn('carousel-item-info')}>
                  <span className={teamModalCn('carousel-item-city')}>
                    {`Город: ${vacancy.city}`}
                  </span>
                  <span className={teamModalCn('carousel-item-experience')}>
                    {`Опыт работы: ${vacancy.experience}`}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </footer>
      </div>
    </Modal>
  );
};
