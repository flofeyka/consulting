import React from 'react';

import ReactModal from 'react-modal';

import { cn } from '@/utils/bem-cn';

import './Modal.scss';

const modalCn = cn('modal');

ReactModal.setAppElement('#root');

export type ModalProps = ReactModal.Props & {
  className?: string;
  overlayClassName?: string;
};

export const Modal = ({
  children,
  className,
  style,
  overlayClassName,
  ...props
}: ModalProps) => {
  return (
    <ReactModal
      className={modalCn()}
      overlayClassName={modalCn('overlay', overlayClassName)}
      style={style}
      {...props}
    >
      <div className={modalCn('content', className)}>
        <div className={modalCn('container')}>{children}</div>
      </div>
    </ReactModal>
  );
};
