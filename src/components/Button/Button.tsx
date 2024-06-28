import React, { ComponentProps, ReactNode } from 'react';

import { cn } from '@/utils/bem-cn';

import './Button.scss';

const buttonCn = cn('button');

type IProps = ComponentProps<'button'> & {
  children: ReactNode;
  view?: 'primary' | 'outline';
};

export const Button = ({
  children,
  className,
  view = 'primary',
  ...props
}: IProps) => (
  <button className={buttonCn({ view }, className)} {...props}>
    {children}
  </button>
);
