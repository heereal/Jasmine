import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LIGHT_GRAY_COLOR } from '../../../../common/colors';
import * as S from './ResultItem.style';
import { bookstorePositionState } from '../../../../store/selectors';

interface ResultItemProps {
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
    FCLTY_LA: lat,
    FCLTY_LO: lng
  } = info;

  const navigate = useNavigate();

  // FIXME: useSetRecoilState로 수정?
  const [position, setPosition] = useRecoilState(bookstorePositionState);

  // FIXME: 왜 lat, lng type number가 안 먹지?
  const hadleClickBookstore = (lat: any, lng: any): void => {
    navigate(`/map/${id}`);
    setPosition({lat, lng})
  };

  return (
    <S.Container onClick={() => hadleClickBookstore(lat, lng)}>
      <S.NameRow>
        <S.IconsContainer>
          <MdCircle
            style={{
              color: LIGHT_GRAY_COLOR,
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
