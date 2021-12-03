import styled from 'styled-components';

export const Container = styled.View`
  box-shadow: 0px 4px 16px rgba(99, 99, 99, 0.2);
  height: 110px;
  border: 1px solid #001230;
  margin: 8px 24px;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  border-radius: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #002d77;
  font-weight: 500;
`;

export const Content = styled.Text`
  font-size: 10px;
  color: #002d77;
`;

export const ColumnContainer = styled.View`
  flex-direction: column;
`;
