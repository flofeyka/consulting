import React from 'react';

import { Modal, ModalProps } from '@/components/Modal/Modal';
import { ModalHeader } from '@/components/Modal/ModalHeader/ModalHeader';
import { cn } from '@/utils/bem-cn';

import { description } from '@/data/footer/footer-modal-route.json';

import './FooterModal.scss';

const footerModalCn = cn('footer-modal');

type IProps = ModalProps;

export const FooterModal = ({ onRequestClose, ...props }: IProps) => {
  return (
    <Modal onRequestClose={onRequestClose} {...props}>
      <div className={footerModalCn()}>
        <div className={footerModalCn('content')}>
          <ModalHeader
            className={footerModalCn('header')}
            onRequestClose={onRequestClose}
          >
            <h2 className={footerModalCn('header-title')}>
              Схема проезда в офис
            </h2>
          </ModalHeader>
          <p className={footerModalCn('description')}>{description}</p>
        </div>
        <footer className={footerModalCn('footer')}>
          <iframe
            className={footerModalCn('map')}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f631da2666a713060908b48f6898d00b2a8517c3b881e8e1ba61b1e243afd90&amp;source=constructor"
            width="528"
            height="240"
          ></iframe>
        </footer>
      </div>
    </Modal>
  );
};
