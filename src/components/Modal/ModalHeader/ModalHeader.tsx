import React, { HTMLProps } from 'react';

import CrossIcon from '@/assets/icons/icon-cross.svg?react';
import { cn } from '@/utils/bem-cn';

import './ModalHeader.scss';

const modalHeaderCn = cn('modal-header');

type IProps = HTMLProps<HTMLElement> & {
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void | undefined;
};

export const ModalHeader = ({
  className,
  children,
  onRequestClose,
  ...props
}: IProps) => (
  <header className={modalHeaderCn(null, className)} {...props}>
    <div className={modalHeaderCn('content')}>{children}</div>
    <button className={modalHeaderCn('button-cross')} onClick={onRequestClose}>
      <CrossIcon
        className={modalHeaderCn('button-cross-icon')}
        width={18}
        height={18}
      />
    </button>
  </header>
);
