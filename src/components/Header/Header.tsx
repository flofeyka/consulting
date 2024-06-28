import React, { ReactElement } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';

import { Footer } from '../Footer/Footer';

import { DesktopHeader } from './DesktopHeader/DesktopHeader';
import { MobileHeader } from './MobileHeader/MobileHeader';

import './Header.scss';

type IProps = {
  children: ReactElement;
};

export const Header = ({ children }: IProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      {children}
      <Footer />
    </>
  );
};
