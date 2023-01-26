import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LIGHT_GRAY_COLOR, GREEN_COLOR } from '../../../../common/colors';
import { isOpensState } from '../../../../store/selectors';
import * as S from './ResultItem.style';
import { useEffect } from 'react';
import { getCurrentTime } from '../../../../common/utils';

export interface ResultItemProps {
  info: {
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
  };
}

export default function ResultItem({ info }: ResultItemProps) {
  const {
    ESNTL_ID: id,
    FCLTY_NM: name,
    MLSFC_NM: category,
    FCLTY_ROAD_NM_ADDR: address,
    OPTN_DC: description,
    WORKDAY_OPN_BSNS_TIME: weekdayOpenTime,
    WORKDAY_CLOS_TIME: weekdayCloseTime,
    SAT_OPN_BSNS_TIME: weekendOpenTime,
    SAT_CLOS_TIME: weekendCloseTime,
  } = info;

  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useRecoilState(isOpensState);

  // 현재 시간, 현재 요일
  const { currentTime, day } = getCurrentTime();

  // 현재 시간, 요일에 따라 영업 중, 영업 종료 구분
  const handleIsOpen = () => {
    // 토요일, 일요일인 경우
    if ( day === 0 || day === 7) {
      return currentTime >= weekendOpenTime && currentTime <= weekendCloseTime

    // 평일인 경우  
    } else {
      return currentTime >= weekdayOpenTime && currentTime <= weekdayCloseTime
    }
  };

  // useEffect(() => {
  //   const open = handleIsOpen()
  //   setIsOpen(open);
    
  // }, []);

  return (
    <S.Container onClick={() => navigate(`/map/${id}`)}>
      <S.NameRow>
        <S.IconsContainer>
          <MdCircle
            style={{
              color: handleIsOpen() ? GREEN_COLOR : LIGHT_GRAY_COLOR,
              marginRight: '0.5rem',
            }}
          />
          <S.Name>{name}</S.Name>
          <FaParking style={{ marginRight: '0.2rem' }} />
          <IoCafeOutline />
        </S.IconsContainer>
        <S.Category>{category}</S.Category>
      </S.NameRow>
      <S.Address>{address}</S.Address>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
