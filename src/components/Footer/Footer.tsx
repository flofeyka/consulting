import React, { useRef, useState } from 'react';

import { Field, Form } from 'react-final-form';
import Slider from 'react-slick';

import IconDownload from '@/assets/icons/icon-download.svg?react';
import { CarouselArrow } from '@/components/CarouselArrow/CarouselArrow';
import { useNoScroll } from '@/hooks/useNoScroll/useNoScroll';

import { cn } from '../../utils/bem-cn';
import { Button } from '../Button/Button';

import { FooterModal } from './FooterModal';
import { FOOTER_CAROUSEL_SETTINGS, consultationFormEndpoint } from './const';

import { allMaterials, materials } from '@/data/footer/materials.json';
import { contacts, social } from '@/data/navbar/navbar-contacts.json';

import './Footer.scss';

const footerCn = cn('footer');

export const Footer = () => {
  const footerContacts = [
    {
      id: 0,
      title: 'Наш адрес',
      link: {
        text: `Россия, 115054, Москва, ул. Щипок, дом 11, строение 1,<br/> 4-ый этаж`,
        href: 'https://yandex.ru/maps/-/CDfgUSNX',
      },
    },
    ...contacts,
  ];
  const sliderRef = useRef<Slider | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPrev = () => sliderRef.current?.slickPrev();
  const scrollToNext = () => sliderRef.current?.slickNext();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onFormSuccess = () => {
    alert('Форма успешно отправлена!');
  };

  const onFormError = () =>
    alert('Что-то пошло не так! Попробуйте отправить форму заново.');

  const onFormSubmit = (values: any) => {
    fetch(consultationFormEndpoint, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(onFormSuccess)
      .catch(onFormError);
  };

  useNoScroll(isModalOpen);

  return (
    <>
      <FooterModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <footer className={footerCn()} id="footer">
        <div className="container">
          <div className={footerCn('wrapper')}>
            <div className={footerCn('contacts')}>
              <h2 className={footerCn('contacts-title')}>Наши контакты</h2>
              <ul className={footerCn('footer-contacts-list')}>
                {footerContacts.map(({ id, title, link }) => (
                  <li className={footerCn('footer-contacts-item')} key={id}>
                    <h3 className={footerCn('footer-contact-title')}>
                      {title}
                    </h3>
                    <a
                      className={footerCn('footer-contact-link')}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      dangerouslySetInnerHTML={{ __html: link.text }}
                    ></a>
                  </li>
                ))}
                <li className={footerCn('footer-contacts-item')}>
                  <h3 className={footerCn('footer-contact-title')}>
                    Соц. сети
                  </h3>
                  <ul className={footerCn('footer-social')}>
                    {social.map(({ id, link }) => (
                      <li className={footerCn('footer-social-item')} key={id}>
                        <a
                          className={footerCn('footer-contact-link')}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          dangerouslySetInnerHTML={{ __html: link.text }}
                        ></a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className={footerCn('footer-contacts-item')}>
                  <Button
                    className={footerCn('footer-contacts-scheme-button')}
                    view="outline"
                    onClick={openModal}
                  >
                    Схема проезда в офис
                  </Button>
                </li>
              </ul>
              <div className={footerCn('footer-files')}>
                <div className={footerCn('footer-files-header')}>
                  <h2 className={footerCn('footer-files-title')}>
                    Полезные материалы
                  </h2>
                  <div className={footerCn('footer-files-buttons')}>
                    <CarouselArrow
                      className={footerCn('carousel-button')}
                      onClick={scrollToPrev}
                      type="prev"
                    />
                    <CarouselArrow
                      className={footerCn('carousel-button')}
                      onClick={scrollToNext}
                      type="next"
                    />
                  </div>
                </div>
                <div className={footerCn('carousel-wrapper')}>
                  <Slider
                    className={footerCn('carousel')}
                    ref={sliderRef}
                    {...FOOTER_CAROUSEL_SETTINGS}
                  >
                    {materials.map((material) => (
                      <div
                        className={footerCn('carousel-item')}
                        key={material.id}
                      >
                        <div className={footerCn('carousel-item-container')}>
                          <a
                            className={footerCn('carousel-item-link')}
                            href={material.href}
                            target="_blank"
                            rel="noreferrer"
                            download
                          >
                            <IconDownload
                              className={footerCn('carousel-item-icon')}
                              width={24}
                              height={24}
                            />
                          </a>
                          <div className={footerCn('carousel-item-data')}>
                            <h3 className={footerCn('carousel-item-title')}>
                              {material.filename}
                            </h3>
                            <div className={footerCn('carousel-item-meta')}>
                              <span className={footerCn('carousel-item-type')}>
                                {`Формат: ${material.type}`}
                              </span>
                              <span className={footerCn('carousel-item-size')}>
                                {`Размер: ${material.size}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <Button
                  className={footerCn('footer-files-button')}
                  view="outline"
                  onClick={() => window.open(allMaterials.href)}
                >
                  {allMaterials.text}
                </Button>
              </div>
            </div>
            <Form
              onSubmit={onFormSubmit}
              render={({ handleSubmit }) => (
                <form
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  id="consultation"
                  className={footerCn('form')}
                >
                  <h2 className={footerCn('form-title')}>
                    Закажите бесплатную консультацию
                  </h2>
                  <div className={footerCn('form-row')}>
                    <Field
                      name="sphere"
                      render={({ input }) => (
                        <input
                          className={footerCn('form-input')}
                          placeholder="Сфера деятельности компании *"
                          {...input}
                        />
                      )}
                    />
                  </div>
                  <div className={footerCn('form-row')}>
                    <Field
                      name="tasks"
                      render={({ input }) => (
                        <textarea
                          className={footerCn('form-input')}
                          placeholder="Задачи, которые необходимо решить с помощью привлечения консультантов"
                          {...input}
                        />
                      )}
                    />
                  </div>
                  <div className={footerCn('form-row')}>
                    <Field
                      name="company-name"
                      render={({ input }) => (
                        <input
                          className={footerCn('form-input')}
                          placeholder="Название компании"
                          {...input}
                        />
                      )}
                    />
                  </div>
                  <div className={footerCn('form-row')}>
                    <Field
                      name="contact-person"
                      render={({ input }) => (
                        <input
                          className={footerCn('form-input')}
                          placeholder="Контактное лицо *"
                          {...input}
                        />
                      )}
                    />
                  </div>
                  <div className={footerCn('form-row', { multiple: true })}>
                    <Field
                      name="contact-phone"
                      render={({ input }) => (
                        <input
                          type="tel"
                          className={footerCn('form-input')}
                          placeholder="Контактный телефон *"
                          {...input}
                        />
                      )}
                    />
                    <Field
                      name="email"
                      render={({ input }) => (
                        <input
                          className={footerCn('form-input')}
                          placeholder="E-mail *"
                          {...input}
                        />
                      )}
                    />
                  </div>
                  <div className={footerCn('form-row')}>
                    <Field
                      name="website"
                      render={({ input }) => (
                        <input
                          className={footerCn('form-input')}
                          placeholder="Сайт компании *"
                          {...input}
                        />
                      )}
                    />
                  </div>
                  <div className={footerCn('form-row form-row_multiple')}>
                    <Field
                      name="feedback-type"
                      render={({ input }) => (
                        <input
                          className={footerCn('form-input')}
                          placeholder="Способ обратной связи"
                          {...input}
                        />
                      )}
                    />
                    <Field
                      name="time"
                      render={({ input }) => (
                        <input
                          className={footerCn('form-input')}
                          placeholder="Удобное для вас время"
                          {...input}
                        />
                      )}
                    />
                  </div>
                  <Button className={footerCn('form-button')} type="submit">
                    Заказать
                  </Button>
                </form>
              )}
            />
          </div>
          <div className={footerCn('copyright')}>
            <p className={footerCn('copyright-text')}>Все права защищены</p>
            <p className={footerCn('copyright-text')}>
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
