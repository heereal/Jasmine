import { getCurrentTime } from './utils';

// 현재 시간, 요일에 따라 영업 중, 영업 종료 구분
export const handleIsOpen = (
  weekdayOpenTime: string | number,
  weekdayCloseTime: string | number,
  weekendOpenTime: string | number,
  weekendCloseTime: string | number,
) => {
  // 현재 시간, 현재 요일
  const { currentTime, day } = getCurrentTime();

  // 토요일, 일요일인 경우
  if (day === 0 || day === 7) {
    return currentTime >= weekendOpenTime && currentTime <= weekendCloseTime;

    // 평일인 경우
  } else {
    return currentTime >= weekdayOpenTime && currentTime <= weekdayCloseTime;
  }
};
