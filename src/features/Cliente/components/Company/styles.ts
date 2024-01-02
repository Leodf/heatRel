import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.LIGHTWHITE};
  padding: 5px;
`;

export const LogoBox = styled.View`
  width: 100%;
  height: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.LIGHTWHITE};
`;

export const LogoImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const JobTitleBox = styled.View`
  margin-top: ${({ theme }) => theme.SIZES.SMALL}px;
`;

export const JobTitle = styled.Text`
  font-size: ${({ theme }) => theme.SIZES.LARGE}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  text-align: center;
`;

export const CompanyInfoBox = styled.View`
  margin-top: ${({ theme }) => theme.SIZES.SMALL / 2}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CompanyName = styled.Text`
  font-size: ${({ theme }) => theme.SIZES.MEDIUM - 2}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const LocationBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LocationImage = styled.Image`
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const LocationName = styled.Text`
  font-size: ${({ theme }) => theme.SIZES.MEDIUM - 2}px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  margin-left: 2px;
`;
