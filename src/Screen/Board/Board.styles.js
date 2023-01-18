import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: '#fff'
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Square = styled.TouchableOpacity`
  background-color: ${props => (props.selected ? '#000' : '#fff')};
  border-color: #000;
  border-width: 1;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90;
  height: 90;
  ${props =>
    props.selected &&
    `background-color: #77ccff;`
    }
`;

export const SquareText = styled.Text`
  font-size: 18;
  color: ${props => (props.selected ? '#fff' : '#000')};
`;

export const Result = styled.Text`
  flex-direction: row;
  font-size: 40px;
  padding-top: 25px;
`;
