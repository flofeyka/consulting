import React, { useEffect, useState } from 'react';

import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Section } from '@/components/Section/Section';
import { SectionType } from '@/types';
import { cn } from '@/utils/bem-cn';

import { PRACTICES_DROPDOWN_SECTIONS } from './const';

import casesSections from '@/data/common/section-names.json';
import practicesFavor from '@/data/practices/practices-favor.json';

import './Practices.scss';

const practicesCn = cn('practices');

type IProps = { className: string };

export const Practices = ({ className }: IProps) => {
  const [activeSection, setActiveSection] = useState(SectionType.Investing);

  useEffect(() => {
    onActivePuzzle(activeSection);
  }, [activeSection]);

  function onActivePuzzle(category: SectionType | null) {
    removeActivePuzzle();
    if (activeSection !== null && category !== null) {
      setActiveSection(category);
      const htmlObject = document.getElementById(activeSection);

      if (htmlObject !== null)
        htmlObject.setAttribute(
          'style',
          `background-image: url('/practices/selection-active-${activeSection}.png')`,
        );
    }
  }

  function removeActivePuzzle() {
    Object.values(SectionType).forEach((sectionTypeKey) => {
      const htmlObject = document.getElementById(sectionTypeKey);

      if (htmlObject !== null) htmlObject.setAttribute('style', '');
    });
  }

  return (
    <Section className={practicesCn(null, className)} id="practices">
      <div className="container">
        <h2 className={practicesCn('title')}>Практики</h2>
        <div className={practicesCn('content')}>
          <div className={practicesCn('image-container')}>
            <div className={practicesCn('puzzle')}>
              <div className={practicesCn('puzzle-center')}></div>
              <div
                id={'marketing'}
                onMouseEnter={() => setActiveSection(SectionType.Marketing)}
                className={
                  practicesCn('puzzle-first') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
              <div
                id={'efficiency'}
                onMouseEnter={() => setActiveSection(SectionType.Efficiency)}
                className={
                  practicesCn('puzzle-second') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
              <div
                id={'government'}
                onMouseEnter={() => setActiveSection(SectionType.Government)}
                className={
                  practicesCn('puzzle-third') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
              <div
                id={'investing'}
                onMouseEnter={() => setActiveSection(SectionType.Investing)}
                className={
                  practicesCn('puzzle-fourth') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
              <div
                id={'transformation'}
                onMouseEnter={() => setActiveSection(SectionType.Transformation)}
                className={
                  practicesCn('puzzle-fifth') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
                            <div
                id={'innovation-projects'}
                onMouseEnter={() => setActiveSection(SectionType.InnovationProjects)}
                className={
                  practicesCn('puzzle-sixth') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
              <div
                id={'strategy'}
                onMouseEnter={() => setActiveSection(SectionType.Strategy)}
                className={
                  practicesCn('puzzle-seventh') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
              <div
                id={'banking'}
                onMouseEnter={() => setActiveSection(SectionType.Banking)}
                className={
                  practicesCn('puzzle-eighth') +
                  ' ' +
                  practicesCn('puzzle-selection')
                }
              ></div>
            </div>
          </div>
          <div className={practicesCn('list')}>
            <Dropdown
              className={practicesCn('dropdown')}
              options={Object.entries(casesSections)
                .filter(([key]) =>
                  PRACTICES_DROPDOWN_SECTIONS.includes(key as SectionType),
                )
                .map((casesSection) => ({
                  value: casesSection[0],
                  label: casesSection[1],
                }))}
              onChange={(arg) => setActiveSection(arg.value as SectionType)}
              value={casesSections[activeSection]}
            />
            <ul className={practicesCn('favor-list')}>
              {practicesFavor[activeSection].map((favor) => (
                <li className={practicesCn('favor-list-item')} key={favor}>
                  {favor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
