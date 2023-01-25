import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <MainImageLocation>
        <BackGroundImage src="images/mainimage.png" alt="" />
      </MainImageLocation>

      <MoveToFindBookstore>
        <BTNMoveToFindBookstore> 🔍 독립서점 찾기 </BTNMoveToFindBookstore>
      </MoveToFindBookstore>

      <SectorIntroduceNewBookStore>
        <H1IntroduceNewBookStore>
          NEW : 따끈따끈 신규 서점
        </H1IntroduceNewBookStore>
        <WrapperCardsIntroduceNewBookStore>
          <CardIntroductNewBookStore>
            <H2IntroduceNewBookStore>헬로인디</H2IntroduceNewBookStore>
            <IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </CardIntroductNewBookStore>

          <CardIntroductNewBookStore>
            <H2IntroduceNewBookStore>헬로인디</H2IntroduceNewBookStore>
            <IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </CardIntroductNewBookStore>

          <CardIntroductNewBookStore>
            <H2IntroduceNewBookStore>헬로인디</H2IntroduceNewBookStore>
            <IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </CardIntroductNewBookStore>

          <CardIntroductNewBookStore>
            <H2IntroduceNewBookStore>헬로인디</H2IntroduceNewBookStore>
            <IMGIntroduceNewBookStore src="images/mainimage.png" alt="" />
          </CardIntroductNewBookStore>
        </WrapperCardsIntroduceNewBookStore>
      </SectorIntroduceNewBookStore>

      <SectorSubscribeOurLetter>
        <H1SubscribeOurLetter>소식지를 구독하세요.</H1SubscribeOurLetter>

        <SubscribeInputBox>
          <InputSubscriberName placeholder="이름" />
          <InputSubscriberEmail placeholder="이메일" />
          <BTNSubscribeSubmit> 구독 </BTNSubscribeSubmit>
        </SubscribeInputBox>
      </SectorSubscribeOurLetter>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const MainImageLocation = styled.div`
  height: 100%;
  width: 100%;
`;
const BackGroundImage = styled.img`
  height: 100%;
  width: 100%;
`;

const MoveToFindBookstore = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BTNMoveToFindBookstore = styled.button`
  width: 400px;
  height: 80px;
  background: linear-gradient(
    86.82deg,
    #406ab3 1.82%,
    #ee3897 51.06%,
    #fcaf17 101.85%
  );
  border-radius: 80px;
  border: none;
  font-size: x-large;
  color: white;
`;
const SectorIntroduceNewBookStore = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const H1IntroduceNewBookStore = styled.div`
  left: 0;
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
  position: absolute;
  font-size: xx-large;
  font-weight: 900;
`;

const WrapperCardsIntroduceNewBookStore = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const CardIntroductNewBookStore = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 220px;
  padding: 20px;
  margin: 15px;
`;
const H2IntroduceNewBookStore = styled.div`
  font-size: xx-large;
  font-weight: 900;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const IMGIntroduceNewBookStore = styled.img`
  width: 100%;
  height: 100%;
`;

const SectorSubscribeOurLetter = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1SubscribeOurLetter = styled.div`
  position: absolute;
  left: 0;
  margin-left: 30px;
  font-size: x-large;
`;

const SubscribeInputBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const InputSubscriberName = styled.input`
  margin-right: 10px;
  width: 250px;
  height: 40px;
`;
const InputSubscriberEmail = styled.input`
  margin-right: 10px;
  width: 250px;
  height: 40px;
  ::placeholder {
  }
`;
const BTNSubscribeSubmit = styled.button`
  width: 60px;
  height: 40px;
  ::placeholder {
  }
`;
