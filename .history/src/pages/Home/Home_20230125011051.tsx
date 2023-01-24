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
          NEW : 따끈따끈 신규서점
        </H1IntroduceNewBookStore>
        <ListNewBookStore>
          <NewBookStoreCard>
            <NewBookStoreName>서점이름</NewBookStoreName>
            <NewBookStorePhoto>서점사진</NewBookStorePhoto>
          </NewBookStoreCard>
        </ListNewBookStore>
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
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
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

const H1IntroduceNewBookStore = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const ListNewBookStore = styled.div``;
const NewBookStoreCard = styled.div``;

const NewBookStoreName = styled.div``;
const NewBookStorePhoto = styled.div``;

const SectorSubscribeOurLetter = styled.div``;
const H1SubscribeOurLetter = styled.div``;
const SubscribeInputBox = styled.div``;
const InputSubscriberName = styled.div``;
const InputSubscriberEmail = styled.div``;
const BTNSubscribeSubmit = styled.div``;
