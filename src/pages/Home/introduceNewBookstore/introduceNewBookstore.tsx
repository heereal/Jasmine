import { useNavigate } from 'react-router-dom';
import newBookstores from '../../../newBookstores';
import * as S from './introduceNewBookstore.styles';

export default function IntroduceNewBookstore() {
  const navigate = useNavigate();

  return (
    <>
      <S.MoveToFindBookstore>
        <S.BTNMoveToFindBookstore> 🔍 독립서점 찾기 </S.BTNMoveToFindBookstore>
      </S.MoveToFindBookstore>

      <S.SectorIntroduceNewBookStore>
        <S.H1IntroduceNewBookStore>
          NEW : 따끈따끈 신규 서점
        </S.H1IntroduceNewBookStore>
        <S.WrapperCardsIntroduceNewBookStore>
          {newBookstores.map(({ name, imgSrc, id }) => (
            <S.CardIntroductNewBookStore onClick={() => navigate(`/map/${id}`)}>
              <S.H2IntroduceNewBookStore> {name} </S.H2IntroduceNewBookStore>
              <S.IMGIntroduceNewBookStore src={imgSrc} alt="" />
            </S.CardIntroductNewBookStore>
          ))}
        </S.WrapperCardsIntroduceNewBookStore>
      </S.SectorIntroduceNewBookStore>
    </>
  );
}
