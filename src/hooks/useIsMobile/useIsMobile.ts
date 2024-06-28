import { useDeviceWidth } from '../useDeviceWidth/useDeviceWidth';

import { DEVICE_MOBILE_MAX_WIDTH } from './const';

export const useIsMobile = () => {
  const deviceWidth = useDeviceWidth();
  return deviceWidth <= DEVICE_MOBILE_MAX_WIDTH;
};
