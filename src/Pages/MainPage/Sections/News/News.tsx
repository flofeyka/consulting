import React, { HTMLProps, useRef } from 'react';

import Slider from 'react-slick';

import { CarouselArrow } from '@/components/CarouselArrow/CarouselArrow';
import { Section } from '@/components/Section/Section';
import { cn } from '@/utils/bem-cn';

import { SLIDER_DEFAULT_SETTINGS } from '../../../../utils/slider';

import { news } from '@/data/news/news-list.json';

import './News.scss';

const newsCn = cn('news');

type IProps = HTMLProps<HTMLElement>;

export const News = ({ className }: IProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const scrollToPrev = () => sliderRef.current?.slickPrev();
  const scrollToNext = () => sliderRef.current?.slickNext();

  return (
    <Section className={newsCn(null, className)} id="news">
      <div className="container">
        <div className={newsCn('header')}>
          <h2 className={newsCn('title')}>Новости</h2>
          <div className={newsCn('buttons')}>
            <CarouselArrow
              className={newsCn('carousel-button')}
              onClick={scrollToPrev}
              type="prev"
            />
            <CarouselArrow
              className={newsCn('carousel-button')}
              onClick={scrollToNext}
              type="next"
            />
          </div>
        </div>
      </div>
      <div className="container container-carousel">
        <Slider
          className={newsCn('carousel')}
          ref={sliderRef}
          {...SLIDER_DEFAULT_SETTINGS}
        >
          {news.map((newsItem) => (
            <div className={newsCn('carousel-item')} key={newsItem.id}>
              <a
                className={newsCn('carousel-item-container')}
                href={newsItem.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className={newsCn('carousel-image-wrapper')}>
                  <img
                    className={newsCn('carousel-item-image')}
                    alt={newsItem.description}
                    src={`/news/${newsItem.id}.jpg`}
                    width={416}
                    height={280}
                  />
                </div>
                <h3 className={newsCn('carousel-item-title')}>
                  {newsItem.title}
                </h3>
                <p className={newsCn('carousel-item-description')}>
                  {newsItem.description}
                </p>
                <p className={newsCn('carousel-item-date')}>{newsItem.date}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};
