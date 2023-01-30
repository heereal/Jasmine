import styled from 'styled-components';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../../common/colors';

export const SectorSubscribeOurLetter = styled.div`
  font-family: 'Pretendard-Regular';
  height: 200px;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
`;
export const H1SubscribeOurLetter = styled.div`
  margin-left: 5px;
  font-size: x-large;
  padding: 0 30px 20px;
`;
export const SubscribeInputBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const InputSubscriberName = styled.input`
  padding: 0 10px;
  margin: 0 10px 10px 0;
  width: 250px;
  height: 40px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
export const InputSubscriberEmail = styled.input`
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 250px;
  height: 40px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
export const BTNSubscribeSubmit = styled.button`
  width: 60px;
  height: 40px;
  background-color: transparent;
  font-size: 14px;
  border: 1px solid ${BLACK_COLOR};
  color: ${BLACK_COLOR};
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background-color: ${LIGHT_GRAY_COLOR};
  }
  :disabled {
    cursor: default;
    :hover {
      background-color: transparent;
    }
  }
`;

export const SeeOurAgreement = styled.div`
  margin: 10px 0 0 0;
  font-size: 13px;
`;

export const SmallCheckBox = styled.input`
  width: 13px;
  height: 13px;
  margin-left: 5px;
`;
