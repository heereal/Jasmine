import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { LIGHT_GRAY_COLOR, GREEN_COLOR } from '../../../common/colors';
import * as S from './Overlay.style';

export default function Overlay({ info }: any) {
  const {
    FCLTY_NM: name,
    MLSFC_NM: category,
    FCLTY_ROAD_NM_ADDR: address,
    OPTN_DC: description,
    RSTDE_GUID_CN: closeDay,
    TEL_NO: tel,
    WORKDAY_OPN_BSNS_TIME: weekdayOpenTime,
    WORKDAY_CLOS_TIME: weekdayCloseTime,
    SAT_OPN_BSNS_TIME: weekendOpenTime,
    SAT_CLOS_TIME: weekendCloseTime,
    isOpen,
  } = info;

  return (
    <S.Overlay>
      <S.NameRow>
        <S.IconsContainer>
          <MdCircle
            style={{
              color: isOpen ? GREEN_COLOR : LIGHT_GRAY_COLOR,
              marginRight: '0.5rem',
            }}
          />
          <S.Name>{name}</S.Name>
          {info.ADIT_DC.includes('주차') ? (
            <FaParking style={{ marginRight: '0.2rem' }} />
          ) : (
            <></>
          )}
          {info.ADIT_DC.includes('카페') ? <IoCafeOutline /> : <></>}
        </S.IconsContainer>
        <S.Category>{category}</S.Category>
      </S.NameRow>
      <S.Description>{description}</S.Description>

      <S.Row>
        <S.RowHeader>주소</S.RowHeader>
        <S.RowContent>{address}</S.RowContent>
      </S.Row>
      <S.Row>
        <S.RowHeader>운영시간</S.RowHeader>
        <S.RowContent>
          {
            // 운영시간이 없는 경우 '정보 없음' 표시
            weekdayOpenTime === '' ? (
              '정보 없음'
            ) : (
              <>
                <div>
                  평일 {`${weekdayOpenTime}`.slice(0, 2)}시~
                  {`${weekdayCloseTime}`.slice(0, 2)}시
                </div>
                <div>
                  주말 {`${weekendOpenTime}`.slice(0, 2)}시~
                  {`${weekendCloseTime}`.slice(0, 2)}시
                </div>
              </>
            )
          }
        </S.RowContent>
      </S.Row>
      <S.Row>
        <S.RowHeader>휴무</S.RowHeader>
        <S.RowContent>{closeDay === '' ? '정보 없음' : closeDay}</S.RowContent>
      </S.Row>
      <S.Row>
        <S.RowHeader>전화</S.RowHeader>
        <S.RowContent>{tel === '' ? '정보 없음' : tel}</S.RowContent>
      </S.Row>
    </S.Overlay>
  );
}
