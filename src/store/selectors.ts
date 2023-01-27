import { data } from '../bookstore';
import { atom } from 'recoil';
import { handleIsOpen } from '../common/api';

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
  isOpen:  boolean;
};

// 현재 위치를 저장하는 Recoil 상태
export const currentLocationState: any = atom({
  key: 'currentLocation',
  default: {
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  },
});

// 전역 DB
export const dbState: any = atom<IdbState[]>({
  key: 'dbState',
  default: data.map((item) => ({...item, isOpen:
    handleIsOpen(item.WORKDAY_OPN_BSNS_TIME, item.WORKDAY_CLOS_TIME, item.SAT_OPN_BSNS_TIME, item.SAT_CLOS_TIME)})),
});

// default 전역 DB
export const dbDefaultState: any = atom<IdbState[]>({
  key: 'dbDefaultState',
  default: data.map((item) => ({...item, isOpen:
    handleIsOpen(item.WORKDAY_OPN_BSNS_TIME, item.WORKDAY_CLOS_TIME, item.SAT_OPN_BSNS_TIME, item.SAT_CLOS_TIME)})),
});
