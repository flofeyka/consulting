import * as React from 'react';

import O2CTransparentLogo from '@/assets/icons/o2c-logo-transparent.svg?react';

import { headerCn } from '../Header.classname';

import { links } from '@/data/navbar/navbar-links.json';

export const DesktopHeader = () => (
  <header className={headerCn({ desktop: true })}>
    <div className={headerCn('container', 'container')}>
      <a className={headerCn('logo')} href="#top">
        <O2CTransparentLogo
          className={headerCn('logo-image')}
          width={78}
          height={40}
        />
      </a>
      <nav>
        <ul className={headerCn('links')}>
          {links.map(({ id, href, text }) => (
            <li className={headerCn('links-item')} key={id}>
              <a className={headerCn('link')} href={href}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
