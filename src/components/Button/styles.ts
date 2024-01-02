import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  padding: ${({ theme }) => theme.SIZES.MEDIUM}px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.SIZES.MEDIUM}px;
`;
