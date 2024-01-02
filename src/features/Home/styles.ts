import styled from "styled-components/native";
import Logo from "../../assets/Logo.svg";

export const LogoIcon = styled(Logo)`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.LIGHTWHITE};
`;

export const HomeContent = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.SIZES.MEDIUM}px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.DANGER};
`;
