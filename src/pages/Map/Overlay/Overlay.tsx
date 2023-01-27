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
          <FaParking style={{ marginRight: '0.2rem' }} />
          <IoCafeOutline />
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
          <div>평일 9시~18시</div>
          <div>주말 9시~18시</div>
        </S.RowContent>
      </S.Row>
      <S.Row>
        <S.RowHeader>휴무</S.RowHeader>
        <S.RowContent>목요일 14:00~20:00, 일요일 정기휴무</S.RowContent>
      </S.Row>
      <S.Row>
        <S.RowHeader>전화</S.RowHeader>
        <S.RowContent>02)064-722-2654</S.RowContent>
      </S.Row>
    </S.Overlay>
  );
}
