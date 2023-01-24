import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <MainImageLocation>
        <BackGroundImage src="images/mainpageimage.png" alt="" />
        <JasmineImage src="images/princessJasmine.png" alt="" />
      </MainImageLocation>

      <BTNMoveToFindBookstore />

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
  overflow: hidden;
  width: 100%;
  height: 1200px;
`;
const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
`;
const JasmineImage = styled.img`
  width: 80;
  height: 160;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  pedding: 0;
  z-index: 1;
`;
const BTNMoveToFindBookstore = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  margin: 0;
  pedding: 0;
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
