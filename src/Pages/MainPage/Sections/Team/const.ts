import { Settings } from 'react-slick';

import { SLIDER_DEFAULT_SETTINGS } from '@/utils/slider';

export const TEAM_CAROUSEL_SETTINGS: Settings = {
  ...SLIDER_DEFAULT_SETTINGS,
  slidesToShow: 2,
  autoplay: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const TEAM_MODAL_CAROUSEL_SETTINGS: Settings = {
  ...SLIDER_DEFAULT_SETTINGS,
  slidesToShow: 1,
  autoplay: false,
};
