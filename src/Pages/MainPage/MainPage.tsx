import * as React from 'react';

import { cn } from '@/utils/bem-cn';

import { About } from './Sections/About/About';
import { Articles } from './Sections/Articles/Articles';
import { Cases } from './Sections/Cases/Cases';
import { Hero } from './Sections/Hero/Hero';
import { News } from './Sections/News/News';
import { Practices } from './Sections/Practices/Practices';
import { Team } from './Sections/Team/Team';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const mainPageCn = cn('main-page');

export const MainPage = () => (
  <main className={mainPageCn()}>
    <Hero className={mainPageCn('hero')} />
    <About className={mainPageCn('about')} />
    <Practices className={mainPageCn('practices')} />
    <Cases className={mainPageCn('cases')} />
    <Team className={mainPageCn('team')} />
    <News className={mainPageCn('news')} />
    <Articles className={mainPageCn('articles')} />
  </main>
);
