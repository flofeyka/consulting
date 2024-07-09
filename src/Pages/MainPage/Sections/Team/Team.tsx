import React, { HTMLProps, useRef, useState } from 'react';

import Slider from 'react-slick';

import { Button } from '@/components/Button/Button';
import { CarouselArrow } from '@/components/CarouselArrow/CarouselArrow';
import { Section } from '@/components/Section/Section';
import { useNoScroll } from '@/hooks/useNoScroll/useNoScroll';
import { cn } from '@/utils/bem-cn';

import { TeamModal } from './TeamModal';
import { TEAM_CAROUSEL_SETTINGS } from './const';

import { team } from '@/data/team/team.json';

import './Team.scss';

const teamCn = cn('team');

type IProps = HTMLProps<HTMLElement>;

export const Team = ({ className }: IProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPrev = () => sliderRef.current?.slickPrev();
  const scrollToNext = () => sliderRef.current?.slickNext();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useNoScroll(isModalOpen);

  return (
    <>
      <TeamModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <Section className={teamCn(null, className)} id="team">
        <div className="container">
          <div className={teamCn('wrapper')}>
            <div className={teamCn('info')}>
              <div className={teamCn('header')}>
                <h2 className={teamCn('title')}>Команда</h2>
                <div className={teamCn('buttons')}>
                  <CarouselArrow
                    className={teamCn('carousel-button')}
                    onClick={scrollToPrev}
                    type="prev"
                  />
                  <CarouselArrow
                    className={teamCn('carousel-button')}
                    onClick={scrollToNext}
                    type="next"
                  />
                </div>
              </div>
              <div className={teamCn('desktop-description')}>
                <p className={teamCn('description')}>
                  Команда O2Consulting — широкий пул экспертов с высоким
                  интеллектуальным потенциалом по различным отраслям и
                  направлениям. Мы разделяем философию, что внешние успехи
                  являются результатом внутренних, поэтому вся работа компании
                  нацелена на то, чтобы создать максимально благоприятные
                  условия для развития всей команды и каждого ее участника.
                </p>
                <Button
                  className={teamCn('action-button')}
                  view="outline"
                  onClick={openModal}
                >
                  Стать частью команды
                </Button>
              </div>
            </div>
            <div className={teamCn('carousel-wrapper')}>
              <Slider
                className={teamCn('carousel')}
                ref={sliderRef}
                {...TEAM_CAROUSEL_SETTINGS}
              >
                {team.map((carouselItem) => (
                  <div
                    className={teamCn('carousel-item')}
                    key={carouselItem.id}
                  >
                    <div className={teamCn('carousel-item-container')}>
                      <img
                        className={teamCn('carousel-item-image')}
                        alt={carouselItem.name}
                        src={`/team/${carouselItem.id}.png`}
                        width={416}
                        height={560}
                      />
                      <div className={teamCn('carousel-item-info')}>
                        <h3 className={teamCn('worker-name')}>
                          {carouselItem.name}
                        </h3>
                        <p className={teamCn('worker-grade')}>
                          {carouselItem.grade}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className={teamCn('mobile-description')}>
              <p className={teamCn('description')}>
                Команда O2Consulting — широкий пул экспертов с высоким
                интеллектуальным потенциалом по различным отраслям и
                направлениям. Мы разделяем философию, что внешние успехи
                являются результатом внутренних, поэтому вся работа компании
                нацелена на то, чтобы создать максимально благоприятные условия
                для развития всей команды и каждого ее участника.
              </p>
              <Button
                className={teamCn('action-button')}
                view="outline"
                onClick={openModal}
              >
                Стать частью команды
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
