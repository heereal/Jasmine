import * as S from './introduceNewBookstore.styles';

export default function IntroduceNewBookstore() {
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
          <S.CardIntroductNewBookStore>
            <S.H2IntroduceNewBookStore>헬로인디</S.H2IntroduceNewBookStore>
            <S.IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </S.CardIntroductNewBookStore>

          <S.CardIntroductNewBookStore>
            <S.H2IntroduceNewBookStore>헬로인디</S.H2IntroduceNewBookStore>
            <S.IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </S.CardIntroductNewBookStore>

          <S.CardIntroductNewBookStore>
            <S.H2IntroduceNewBookStore>헬로인디</S.H2IntroduceNewBookStore>
            <S.IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </S.CardIntroductNewBookStore>

          <S.CardIntroductNewBookStore>
            <S.H2IntroduceNewBookStore>헬로인디</S.H2IntroduceNewBookStore>
            <S.IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </S.CardIntroductNewBookStore>
        </S.WrapperCardsIntroduceNewBookStore>
      </S.SectorIntroduceNewBookStore>
    </>
  );
}
