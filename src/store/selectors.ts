import { atom } from 'recoil';

// 현재 위치를 저장하는 Recoil 상태
export const currentLocationState: any = atom({
  key: 'currentLocation',
  default: {
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  },
});

// FIXME: kakao.maps.Map으로 지도 생성하기-실패...
export const kakaoMap = atom({
  key: 'kakaoMap',
  default: {},
});
