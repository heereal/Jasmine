import * as S from './Home.styles';
import IntroduceNewBookstore from './introduceNewBookstore/introduceNewBookstore';
import SubscribeOurLetter from './SubscribeOurLetter/SubscribeOurLetter';

export default function Home() {
  return (
    <S.HomeContainer>
      <S.MainImageLocation>
        <S.BackGroundImage src={getRandomImage()} alt="background" />
        <S.Jasmin
          src={require('../../assets/images/jasmin.png')}
          alt="jasmin"
        />
      </S.MainImageLocation>

      {/* NEW : 따끈따끈 신규 서점  */}
      <IntroduceNewBookstore />

      {/* 소식지를 구독하세요. */}
      <SubscribeOurLetter />
    </S.HomeContainer>
  );
}

// 배경 이미지 배열
const backgroundImages = [
  require('../../assets/images/mainimage1.jpeg'),
  require('../../assets/images/mainimage2.jpeg'),
  require('../../assets/images/mainimage3.jpeg'),
  require('../../assets/images/mainimage4.jpeg'),
  require('../../assets/images/mainimage5.jpeg'),
];

// 배경 이미지 중 랜덤으로 하나를 선택
const getRandomImage = () => {
  const idx = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[idx];
};
