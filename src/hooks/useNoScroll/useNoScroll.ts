import { useEffect } from 'react';

export const useNoScroll = (isOpen: boolean) => {
  useEffect(() => {
    const bodyElement = document.body;
    const originalOverflow = bodyElement.style.overflow;
    const originalPaddingRight = bodyElement.style.paddingRight;

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      bodyElement.style.overflow = originalOverflow;
      bodyElement.style.paddingRight = originalPaddingRight;
    }

    return () => {
      bodyElement.style.overflow = originalOverflow;
      bodyElement.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);
};
