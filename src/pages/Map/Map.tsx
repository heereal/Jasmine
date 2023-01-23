import styled from 'styled-components';
import InfoWrapper from './InfoWrapper/InfoWrapper';
import MapWrapper from './MapWrapper/MapWrapper';

export default function Map() {
  return (
    <Container>
      <InfoWrapper />
      <MapWrapper />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
