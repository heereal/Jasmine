import styled from 'styled-components';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../../common/colors';

export const SectorSubscribeOurLetter = styled.div`
  font-family: 'Pretendard-Regular';
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1SubscribeOurLetter = styled.div`
  position: absolute;
  left: 0;
  margin-left: 30px;
  font-size: x-large;
`;

export const SubscribeInputBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InputSubscriberName = styled.input`
  padding: 0 10px;
  margin-right: 10px;
  width: 250px;
  height: 40px;
  font-size: 16px;
`;
export const InputSubscriberEmail = styled.input`
  padding: 0 10px;
  margin-right: 10px;
  width: 250px;
  height: 40px;
  font-size: 16px;
`;
export const BTNSubscribeSubmit = styled.button`
  width: 60px;
  height: 40px;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid ${BLACK_COLOR};
  cursor: pointer;
  :hover {
    background-color: ${LIGHT_GRAY_COLOR};
  }
`;

export const SeeOurAgreement = styled.div`
  margin: 10px 0 0 5px;
  font-size: 13px;
`;

export const SmallCheckBox = styled.input`
  width: 13px;
  height: 13px;
  margin-left: 5px;
`;
