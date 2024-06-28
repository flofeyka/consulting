import React, { useRef, useState } from 'react';

import Slider from 'react-slick';

import { CASES_DROPDOWN_SECTIONS } from '@/Pages/MainPage/Sections/Cases/const.ts';
import { Button } from '@/components/Button/Button';
import { CarouselArrow } from '@/components/CarouselArrow/CarouselArrow';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Section } from '@/components/Section/Section';
import { SectionType } from '@/types';
import { cn } from '@/utils/bem-cn';
import { scrollToAnchor } from '@/utils/scrollToAnchor';
import { SLIDER_DEFAULT_SETTINGS } from '@/utils/slider';

import { cases } from '@/data/cases/cases-carousel.json';
import casesSections from '@/data/common/section-names.json';

import './Cases.scss';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

const casesCn = cn('cases');

type IProps = {
  className: string;
};

export const Cases = ({ className }: IProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeTab, setActiveTab] = useState(SectionType.Special);

  const scrollToPrev = () => sliderRef.current?.slickPrev();
  const scrollToNext = () => sliderRef.current?.slickNext();

  return (
    <Section className={casesCn(null, className)} id="cases">
      <>
        <div className="container">
          <div className={casesCn('header')}>
            <h2 className={casesCn('title')}>Кейсы</h2>
            <Dropdown
              className={casesCn('dropdown')}
              options={Object.entries(casesSections)
                .filter(([key]) =>
                  CASES_DROPDOWN_SECTIONS.includes(key as SectionType),
                )
                .map((casesSection) => ({
                  value: casesSection[0],
                  label: casesSection[1],
                }))}
              onChange={(arg) => setActiveTab(arg.value as SectionType)}
              value={casesSections[activeTab]}
            />
            <div className={casesCn('buttons')}>
              <CarouselArrow onClick={scrollToPrev} type="prev" />
              <CarouselArrow onClick={scrollToNext} type="next" />
            </div>
          </div>
        </div>
        <div className={'container container-carousel'}>
          {cases[activeTab].length ? (
            <Slider
              className={casesCn('carousel')}
              ref={sliderRef}
              {...SLIDER_DEFAULT_SETTINGS}
            >
              {cases[activeTab].map((carouselItem) => (
                <div className={casesCn('carousel-item')} key={carouselItem.id}>
                  <div className={casesCn('carousel-item-container')}>
                    <h3 className={casesCn('carousel-item-title')}>
                      {carouselItem.title}
                    </h3>
                    {carouselItem.buttons.map((button: any) => (
                      <Link to={button.buttonUrl}>
                        <button className={casesCn('carousel-item-button')}>
                          {button.title ? button.title : "Узнать подробнее"}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>

          ) : (
            <p className={casesCn('no-cases')}>Нет кейсов</p>
          )}
        </div>
        <div>

        </div>
        <div className="container">
          <Button
            className={casesCn('action-button')}
            onClick={() => scrollToAnchor('footer')}
          >
            Заказать бесплатную консультацию
          </Button>
        </div>
      </>
    </Section>
  );
};
