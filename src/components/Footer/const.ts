import { Settings } from 'react-slick';

import { SLIDER_DEFAULT_SETTINGS } from '@/utils/slider';

export const consultationFormEndpoint =
  'https://api.sheetmonkey.io/form/dMgdgss9vcZ2adcrMAUwFn';

export const FOOTER_CAROUSEL_SETTINGS: Settings = {
  ...SLIDER_DEFAULT_SETTINGS,
  slidesToShow: 1,
  rows: 2,
  autoplay: false,
  responsive: [],
};
