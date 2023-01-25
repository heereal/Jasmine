import { data } from '../bookstore';
import { atom } from 'recoil';

export interface IdbState {
  ESNTL_ID: number | string;
  FCLTY_NM: number | string;
  LCLAS_NM: number | string;
  MLSFC_NM: number | string;
  ZIP_NO: number | string;
  FCLTY_ROAD_NM_ADDR: number | string;
  FCLTY_LA: number | string;
  FCLTY_LO: number | string;
  WORKDAY_OPN_BSNS_TIME: number | string;
  WORKDAY_CLOS_TIME: number | string;
  SAT_OPN_BSNS_TIME: number | string;
  SAT_CLOS_TIME: number | string;
  SUN_OPN_BSNS_TIME: number | string;
  SUN_CLOS_TIME: number | string;
  RSTDE_OPN_BSNS_TIME: number | string;
  RSTDE_CLOS_TIME: number | string;
  RSTDE_GUID_CN: number | string;
  TEL_NO: number | string;
  OPTN_DC: number | string;
  ADIT_DC: number | string;
}

// 현재 위치를 저장하는 Recoil 상태
export const currentLocationState: any = atom({
  key: 'currentLocation',
  default: {
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  },
});

export const dbState: any = atom<IdbState[]>({
  key: 'dbState',
  default: data,
});
