import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <MainImageLocation>
        <BackGroundImage src="images/mainimage.png" alt="" />
      </MainImageLocation>

      <MoveToFindBookstore>
        <BTNMoveToFindBookstore> 독립서점 찾기 </BTNMoveToFindBookstore>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const MainImageLocation = styled.div`
  width: 100%;
  height: 800px;
`;
const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

const MoveToFindBookstore = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
`;
const BTNMoveToFindBookstore = styled.button`
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  z-index: 1;
`;
const SectorIntroduceNewBookStore = styled.div``;
const H1IntroduceNewBookStore = styled.div``;
const SectorSubscribeOurLetter = styled.div``;
const H1SubscribeOurLetter = styled.div``;
const SubscribeInputBox = styled.div``;
const InputSubscriberName = styled.div``;
const InputSubscriberEmail = styled.div``;
const BTNSubscribeSubmit = styled.div``;
