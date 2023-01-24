// import { PAGE_HEIGHT } from '../../common/layout';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <MainImageLocation></MainImageLocation>
      <BTNMoveToFindBookstore></BTNMoveToFindBookstore>

      <SectorIntroduceNewBookStore>
        <H1IntroduceNewBookStore></H1IntroduceNewBookStore>
      </SectorIntroduceNewBookStore>

      <SectorSubscribeOurLetter>
        <H1SubscribeOurLetter></H1SubscribeOurLetter>

        <SubscribeInputBox>
          <InputSubscriberName></InputSubscriberName>
        </SubscribeInputBox>
      </SectorSubscribeOurLetter>
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
const MainImageLocation = styled.div``;
const BTNMoveToFindBookstore = styled.div``;
const SectorIntroduceNewBookStore = styled.div``;
const H1IntroduceNewBookStore = styled.div``;
const SectorSubscribeOurLetter = styled.div``;
const H1SubscribeOurLetter = styled.div``;
const SubscribeInputBox = styled.div``;
