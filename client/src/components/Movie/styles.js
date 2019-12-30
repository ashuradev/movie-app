import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 25px 32px 0;
  text-align: center;
  width: 22%;

  &:last-child {
    margin-right: 0;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 22px;
`;

export const Thumbnail = styled.img`
  height: 340px;
  max-width: 100%;
  object-fit: cover;
`;

export const Year = styled.p`
  margin-top: 10px;
`;
