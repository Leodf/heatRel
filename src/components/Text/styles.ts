import styled from "styled-components/native";

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.SIZES.LARGE}px;
`;

export const BodyText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${({ theme }) => theme.SIZES.MEDIUM}px;
`;
