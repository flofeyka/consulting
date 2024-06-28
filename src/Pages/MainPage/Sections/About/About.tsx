import React, { useRef, useState } from 'react';

import aboutVideo from '@/assets/images/main-page/about.mp4';
import { Section } from '@/components/Section/Section';
import { cn } from '@/utils/bem-cn';

import { benefits } from '@/data/about/about-benefits.json';

import './About.scss';
import Slider from 'react-slick';
import { SLIDER_DEFAULT_SETTINGS } from '@/utils/slider';

const aboutCn = cn('about');

type IProps = {
  className: string;
};

export const About = ({ className }: IProps) => (
  <Section className={aboutCn(null, className)} id="about">
    <div className="container">
      <div className={aboutCn('header')}>
        <h2 className={aboutCn('title')}>О компании</h2>
        <p className={aboutCn('description')}>
          O2Consulting — один из лидеров на рынке государственного и частного
          консалтинга, в том числе в сфере цифровизации и цифровой трансформации
          территорий, крупнейших предприятий различных отраслей, а также малых
          технологических компаний.
        </p>
      </div>
      <div className={aboutCn('image-container')}>
        <video
          className={aboutCn('image')}
          width={1320}
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>
      <ul className={aboutCn('benefits')}>
        {benefits.map(({ description, id }) => (
          <li key={id} className={aboutCn('benefits-item')}>
            <p className={aboutCn('benefits-item-text')}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
