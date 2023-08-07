import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.DANGER};
`;
