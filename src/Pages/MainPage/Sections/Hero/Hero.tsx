import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Section } from '@/components/Section/Section';
import { cn } from '@/utils/bem-cn';
import { scrollToAnchor } from '@/utils/scrollToAnchor';

import { HERO_STATISTICS_INTERVAL_DELAY } from './const';

import { heroStatistics } from '@/data/hero/hero-statistics.json';
import {motion} from "framer-motion";
import './Hero.scss';

const heroCn = cn('hero');

type IProps = {
  className: string;
};

export const Hero = ({ className }: IProps) => {
  const [statisticsIndex, setStatisticsIndex] = useState(0);

  const nextSlide = () => {
    setStatisticsIndex((prevIndex) =>
      prevIndex === heroStatistics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStatisticsIndex((prevIndex) =>
      prevIndex === 0 ? heroStatistics.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStatisticsIndex(
        (prevStatistics) => (prevStatistics + 1) % heroStatistics.length,
      );
    }, HERO_STATISTICS_INTERVAL_DELAY);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className={heroCn(null, className)} id="hero">
      <div className={heroCn('container', 'container')}>
        <h1 className={heroCn('title')}>
          Глобальный Think Tank в сфере инноваций и высоких технологий
        </h1>
        <div className={heroCn('info')}>
          <Button
            className={heroCn('info-button')}
            onClick={() => scrollToAnchor('footer')}
          >
            Заказать бесплатную консультацию
          </Button>
          <ul className={heroCn("statistic-container")}>
            <div className={heroCn("mobile-sliders-container")}>
              <button onClick={prevSlide}>
                <img height={12} src="/VectorPrev.svg" />
              </button>
              <button onClick={nextSlide}>
                <img height={12} src="/VectorNext.svg" />
              </button>
            </div>
            <div className={heroCn('statistics')}>
              <button className={heroCn('slider-prev')} onClick={prevSlide}>
                <img src="/VectorPrev.svg" />
              </button>
              {heroStatistics[statisticsIndex].items.map((statisticItem) => (
                    <motion.div key={statisticItem.id}
                    className={heroCn(`statistics-item`)} 
                    initial={{ opacity: 0}} // Начальное состояние
                    animate={{ opacity: 1, x: 0 }}    // Конечное состояние
                    transition={{ duration: 1 }}    // Параметры анимации
                  >
                  <h2 className={heroCn('statistics-item-title')}>
                    <span className={heroCn('statistics-item-text')}>
                      {statisticItem.title}
                    </span>
                    <span className={heroCn('statistics-item-text_s')}>
                      {' '}
                      {statisticItem.subtitle}
                    </span>
                  </h2>
                  <p className={heroCn('statistics-item-description')}>
                    {statisticItem.description}
                  </p>
                    </motion.div>
              ))}
              <button className={heroCn("slider-next")} onClick={nextSlide}>
                <img src="/VectorNext.svg" />
              </button>
            </div>
            <div>
              {heroStatistics.map((_, index) => (
                <span
                  key={index}
                  className={heroCn(`slider-dot ${index === statisticsIndex ? "active" : ""
                    }`)}
                  onClick={() => setStatisticsIndex(index)}
                >&nbsp;</span>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </Section>
  );
};
