import * as S from './Home.styles';
import IntroduceNewBookstore from './introduceNewBookstore/introduceNewBookstore';
import SubscribeOurLetter from './SubscribeOurLetter/SubscribeOutLetter';

export default function Home() {
  return (
    <S.HomeContainer>
      <S.MainImageLocation>
        <S.BackGroundImage
          src={require('../../assets/images/mainimage.png')}
          alt=""
        />
      </S.MainImageLocation>

      {/* NEW : 따끈따끈 신규 서점  */}
      <IntroduceNewBookstore />

      {/* 소식지를 구독하세요. */}
      <SubscribeOurLetter />
    </S.HomeContainer>
  );
}
