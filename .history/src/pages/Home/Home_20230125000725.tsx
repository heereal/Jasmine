import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <MainImageLocation>
        <BackGroundImage src="images/mainpageimage.png" alt="" />
        <JasmineImage src="images/princessJasmine.png" alt="" />
      </MainImageLocation>
      <BTNMoveToFindBookstore></BTNMoveToFindBookstore>

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
  width: 100%;
  height: 70%;
`;
const MainImageLocation = styled.div``;
const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;
const JasmineImage = styled.img`
  width: 10%;
  height: 50%;
  position: relative;
  float: right;
  z-index: 1;
`;
const BTNMoveToFindBookstore = styled.div``;
const SectorIntroduceNewBookStore = styled.div``;
const H1IntroduceNewBookStore = styled.div``;
const SectorSubscribeOurLetter = styled.div``;
const H1SubscribeOurLetter = styled.div``;
const SubscribeInputBox = styled.div``;
const InputSubscriberName = styled.div``;
const InputSubscriberEmail = styled.div``;
const BTNSubscribeSubmit = styled.div``;
