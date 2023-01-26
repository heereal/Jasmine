import * as S from './SubscribeOurLetter.styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { collection, addDoc } from 'firebase/firestore';
import { Form } from 'react-router-dom';
import { db } from '../../../firebase';
import { useState } from 'react';

export default function SubscribeOurLetter() {
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [submitTime, setSubmitTime] = useState('');

  // 구독자 추가

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subscriberRef = collection(db, 'subscriber');
    const subscriber = {
      name: subscriberName,
      email: subscriberEmail,
      submitTime: submitTime,
    };
    await addDoc(subscriberRef, subscriber);
    setSubscriberName('');
    setSubscriberEmail('');
  };

  // 이메일 형식 검사 name이 subscriberEmail인 input에만 적용
  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const subscriberEmail = e.currentTarget.value;
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!emailReg.test(subscriberEmail)) {
      alert('이메일 형식이 올바르지 않습니다.');
      e.currentTarget.value = '';
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
            onClick={() => setSubmitTime(new Date().toLocaleString())}
          >
            구독
          </S.BTNSubscribeSubmit>
        </form>
      </S.SubscribeInputBox>
    </S.SectorSubscribeOurLetter>
  );
}
