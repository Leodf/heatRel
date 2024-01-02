import styled from "styled-components/native";

export const FabContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: ${({ theme }) => theme.COLORS.TERTIARY};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const TextButon = styled.Text`
  color: ${({ theme }) => theme.COLORS.LIGHTWHITE};
  font-size: 32px;
`;
