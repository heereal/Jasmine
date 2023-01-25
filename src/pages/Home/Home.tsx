import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <MainImageLocation>
        <BackGroundImage src="images/mainimage.png" alt="" />
      </MainImageLocation>

      <MoveToFindBookstore>
        <BTNMoveToFindBookstore> 🔍독립서점 찾기 </BTNMoveToFindBookstore>
      </MoveToFindBookstore>

      <SectorIntroduceNewBookStore>
        <H1IntroduceNewBookStore></H1IntroduceNewBookStore>
      </SectorIntroduceNewBookStore>

      <SectorSubscribeOurLetter>
        <H1SubscribeOurLetter></H1SubscribeOurLetter>

        <SubscribeInputBox>
          <InputSubscriberName></InputSubscriberName>
          <InputSubscriberEmail></InputSubscriberEmail>
          <BTNSubscribeSubmit></BTNSubscribeSubmit>
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

const MoveToFindBookstore = styled.div``;
const BTNMoveToFindBookstore = styled.button`
  width: 300px;
  height: 80px;
  background: linear-gradient(
    86.82deg,
    #406ab3 1.82%,
    #ee3897 51.06%,
    #fcaf17 101.85%
  );
  border-radius: 80px;
  border: none;
  font-size: large;
  color: white;
`;
const SectorIntroduceNewBookStore = styled.div``;
const H1IntroduceNewBookStore = styled.div``;
const SectorSubscribeOurLetter = styled.div``;
const H1SubscribeOurLetter = styled.div``;
const SubscribeInputBox = styled.div``;
const InputSubscriberName = styled.div``;
const InputSubscriberEmail = styled.div``;
const BTNSubscribeSubmit = styled.div``;
