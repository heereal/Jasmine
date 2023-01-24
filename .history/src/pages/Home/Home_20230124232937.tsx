// import { PAGE_HEIGHT } from '../../common/layout';
import styled from 'styled-components';
import BGImage from '../../../public/images/mainpageimage.png';

export default function Home() {
  return (
    <HomeContainer>
      <MainImageLocation>
        <BackGroundImage></BackGroundImage>
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

const HomeContainer = styled.div``;
const MainImageLocation = styled.div``;
const BackGroundImage = styled.div`
  background-image: url(${BGImage});
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
