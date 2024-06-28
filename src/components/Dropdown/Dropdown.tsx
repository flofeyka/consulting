import React from 'react';

import ReactDropdown, { ReactDropdownProps } from 'react-dropdown';

import ChevronDownIcon from '@/assets/icons/icon-chevron-down.svg?react';
import { cn } from '@/utils/bem-cn';

import './Dropdown.scss';

const dropdownCn = cn('dropdown');

export const Dropdown = ({
  className,
  placeholderClassName,
  controlClassName,
  ...props
}: ReactDropdownProps) => (
  <ReactDropdown
    className={dropdownCn(null, className)}
    placeholderClassName={dropdownCn(
      'dropdown-placeholder',
      placeholderClassName,
    )}
    controlClassName={dropdownCn('dropdown-control', controlClassName)}
    arrowClosed={
      <ChevronDownIcon className={dropdownCn('dropdown-arrow')} width={20} />
    }
    arrowOpen={
      <ChevronDownIcon
        className={dropdownCn('dropdown-arrow', { open: true })}
        width={20}
      />
    }
    {...props}
  />
);
