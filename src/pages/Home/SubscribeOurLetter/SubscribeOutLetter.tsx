import * as S from './SubscribeOurLetter.styles';

export default function SubscribeOurLetter() {
  return (
    <S.SectorSubscribeOurLetter>
      <S.H1SubscribeOurLetter>소식지를 구독하세요.</S.H1SubscribeOurLetter>
      <S.SubscribeInputBox>
        <S.InputSubscriberName placeholder="이름" />
        <S.InputSubscriberEmail placeholder="이메일" />
        <S.BTNSubscribeSubmit> 구독 </S.BTNSubscribeSubmit>
      </S.SubscribeInputBox>
    </S.SectorSubscribeOurLetter>
  );
}
