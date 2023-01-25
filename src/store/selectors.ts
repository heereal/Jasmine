import { atom } from 'recoil';

// 현재 위치를 저장하는 Recoil 상태
export const currentLocationState: any = atom({
  key: 'currentLocation',
  default: {
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  },
});

// 리스트에서 특정 서점을 클릭했을 때 위도, 경도 데이터
export const bookstorePositionState = atom({
  key: "bookstorePosition",
  default: {
    lat: 0, lng: 0
  }
});