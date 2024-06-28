import React, { ButtonHTMLAttributes } from 'react';

import ChevronLeftIcon from '@/assets/icons/icon-chevron-left.svg?react';
import ChevronRightIcon from '@/assets/icons/icon-chevron-right.svg?react';
import { cn } from '@/utils/bem-cn';

import './CarouselArrow.scss';

const carouselArrowCn = cn('carousel-arrow');

interface IProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type: 'next' | 'prev';
}

export const CarouselArrow = ({ type, className, ...props }: IProps) => (
  <button className={carouselArrowCn({ type }, className)} {...props}>
    {type === 'next' ? (
      <ChevronRightIcon width={9.6} height={19.2} />
    ) : (
      <ChevronLeftIcon width={9.6} height={19.2} />
    )}
  </button>
);
