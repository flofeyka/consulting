import React, { HTMLProps, useRef } from 'react';

import Slider, { Settings } from 'react-slick';

import { CarouselArrow } from '@/components/CarouselArrow/CarouselArrow';
import { Section } from '@/components/Section/Section';
import { cn } from '@/utils/bem-cn';
import { SLIDER_DEFAULT_SETTINGS } from '@/utils/slider';

import { articles } from '@/data/articles/articles-list.json';

import './Articles.scss';

const articlesCn = cn('articles');

type IProps = HTMLProps<HTMLElement>;

export const Articles = ({ className }: IProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const scrollToPrev = () => sliderRef.current?.slickPrev();
  const scrollToNext = () => sliderRef.current?.slickNext();

  const sliderSettings: Settings = {
    ...SLIDER_DEFAULT_SETTINGS,
    slidesToShow: 3,
    autoplay: false,
  };

  return (
    <Section className={articlesCn(null, className)} id="articles">
      <div className="container">
        <div className={articlesCn('header')}>
          <h2 className={articlesCn('title')}>Статьи</h2>
          <div className={articlesCn('buttons')}>
            <CarouselArrow
              className={articlesCn('carousel-button')}
              onClick={scrollToPrev}
              type="prev"
            />
            <CarouselArrow
              className={articlesCn('carousel-button')}
              onClick={scrollToNext}
              type="next"
            />
          </div>
        </div>
      </div>
      <div className="container container-carousel">
        <Slider
          className={articlesCn('carousel')}
          ref={sliderRef}
          {...sliderSettings}
        >
          {articles.map((articlesItem) => (
            <div className={articlesCn('carousel-item')} key={articlesItem.id}>
              <a
                className={articlesCn('carousel-item-container')}
                href={articlesItem.href}
              >
                <div className={articlesCn('carousel-item-wrapper')}>
                  <img
                    className={articlesCn('carousel-item-image')}
                    alt={`Статья #${articlesItem.id}`}
                    src={`/articles/${articlesItem.id}.jpg`}
                    width={416}
                    height={530}
                  />
                  <div className={articlesCn('carousel-item-info')}>
                    <h3 className={articlesCn('article-title')}>
                      {articlesItem.title}
                    </h3>
                    <p className={articlesCn('article-date')}>
                      {articlesItem.date}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};
