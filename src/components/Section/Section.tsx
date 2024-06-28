import React, { HTMLProps } from 'react';

import { cn } from '@/utils/bem-cn';

import './Section.scss';

const sectionCn = cn('section');

type IProps = HTMLProps<HTMLElement>;

export const Section = ({ children, className, ...props }: IProps) => (
  <section className={sectionCn(null, className)} {...props}>
    {children}
  </section>
);
