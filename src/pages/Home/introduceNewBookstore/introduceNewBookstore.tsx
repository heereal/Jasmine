import { useNavigate } from 'react-router-dom';
import newBookstores from '../../../newBookstores';
import * as S from './introduceNewBookstore.styles';

export default function IntroduceNewBookstore() {
  const navigate = useNavigate();

  return (
    <>
      <S.MoveToFindBookstore>
        <S.BTNMoveToFindBookstore onClick={() => navigate(`/map/`)}>
          π λλ¦½μμ  μ°ΎκΈ°
        </S.BTNMoveToFindBookstore>
      </S.MoveToFindBookstore>

      <S.SectorIntroduceNewBookStore>
        <S.H1IntroduceNewBookStore>
          NEW : λ°λλ°λ μ κ· μμ 
        </S.H1IntroduceNewBookStore>
        <S.WrapperCardsIntroduceNewBookStore>
          {newBookstores.map(({ name, imgSrc, id }, idx) => (
            <S.CardIntroductNewBookStore
              onClick={() => navigate(`/map/${id}`)}
              key={idx}
            >
              <S.H2IntroduceNewBookStore> {name} </S.H2IntroduceNewBookStore>
              <S.IMGIntroduceNewBookStore src={imgSrc} alt="" />
            </S.CardIntroductNewBookStore>
          ))}
        </S.WrapperCardsIntroduceNewBookStore>
      </S.SectorIntroduceNewBookStore>
    </>
  );
}
