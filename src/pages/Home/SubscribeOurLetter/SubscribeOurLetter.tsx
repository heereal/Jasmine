import * as S from './SubscribeOurLetter.styles';
import * as React from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useState } from 'react';

export default function SubscribeOurLetter() {
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [submitTime, setSubmitTime] = useState('');

  // 구독자 추가 함수 // Trigger Email 이 포함되어 있음
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (subscriberEmail.match(emailRegex) === null) {
      e.preventDefault();
      alert('이메일을 형식에 맞게 입력해주세요.');
    } else {
      e.preventDefault();
      const subscriberRef = collection(db, 'subscriber');
      const subscriber = {
        to: subscriberEmail,
        name: subscriberName,
        submitTime: submitTime,

        message: {
          subject: '[쟈스민 독립서점 소식지]를 구독해주셔서 감사합니다.',
          text: '',
          html: ' <img src ="https://user-images.githubusercontent.com/78587041/214996034-50d81353-fcc8-48da-8694-7dd2e04dfc40.png" alt ="Thank you for subscribing out Letter" width ="650px" height="1000px"> ',
        },
      };

      await addDoc(subscriberRef, subscriber);
      setSubscriberName('');
      setSubscriberEmail('');

      alert('구독이 완료되었습니다.');
    }
  };

  return (
    <S.SectorSubscribeOurLetter>
      <S.H1SubscribeOurLetter>소식지를 구독하세요.</S.H1SubscribeOurLetter>
      <S.SubscribeInputBox>
        <form onSubmit={handleSubmit}>
          <S.InputSubscriberName
            type={'text'}
            name={'subscriberName'}
            value={subscriberName}
            placeholder="이름"
            onChange={(e) => setSubscriberName(e.currentTarget.value)}
          />
          <S.InputSubscriberEmail
            type={'text'}
            name={'subscriberEmail'}
            value={subscriberEmail}
            placeholder="이메일"
            onChange={(e) => setSubscriberEmail(e.currentTarget.value)}
          />
          <S.BTNSubscribeSubmit
            type="submit"
            disabled={subscriberName && subscriberEmail ? false : true}
            onClick={() => setSubmitTime(new Date().toLocaleString())}
          >
            구독
          </S.BTNSubscribeSubmit>
        </form>
      </S.SubscribeInputBox>
    </S.SectorSubscribeOurLetter>
  );
}
