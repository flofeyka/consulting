import React, { useEffect, useState } from 'react';

import O2CTransparentLogo from '@/assets/icons/o2c-logo-transparent.svg?react';
import { useNoScroll } from '@/hooks/useNoScroll/useNoScroll';
import { cn } from '@/utils/bem-cn';

import { headerCn } from '../Header.classname';

import { contacts } from '@/data/navbar/navbar-contacts.json';
import { links } from '@/data/navbar/navbar-links.json';

const burgerMenuCn = cn('burger-menu');

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuOpen = () => setIsOpen((oldIsOpen) => !oldIsOpen);

  useNoScroll(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={headerCn({ mobile: true })}>
      <div className={headerCn('container', 'container')}>
        <a className={headerCn('logo')} href="#top">
          <O2CTransparentLogo
            className={headerCn('logo-image')}
            width={78}
            height={40}
          />
        </a>
        <button className={headerCn('burger-button')} onClick={toggleMenuOpen}>
          <span className={headerCn('burger-bar', { active: isOpen })}></span>
          <span className={headerCn('burger-bar', { active: isOpen })}></span>
          <span className={headerCn('burger-bar', { hidden: isOpen })}></span>
        </button>
      </div>
      <div className={burgerMenuCn({ open: isOpen })}>
        <div className={burgerMenuCn('body')}>
          <div className="container">
            <nav className={burgerMenuCn('navigation')}>
              <ul className={burgerMenuCn('links')}>
                {links.map(({ id, href, text }) => (
                  <a
                    className={burgerMenuCn('link')}
                    href={href}
                    key={id}
                    onClick={toggleMenuOpen}
                  >
                    {text}
                  </a>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <footer className={burgerMenuCn('footer')}>
          <div className="container">
            <div className={burgerMenuCn('footer-contacts')}>
              <h2 className={burgerMenuCn('footer-title')}>Наши контакты</h2>
              <ul className={burgerMenuCn('footer-contacts-list')}>
                {contacts.map(({ id, title, link }) => (
                  <li className={burgerMenuCn('footer-contacts-item')} key={id}>
                    <h3 className={burgerMenuCn('footer-contact-title')}>
                      {title}
                    </h3>
                    <a
                      className={burgerMenuCn('footer-contact-link')}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </header>
  );
};
