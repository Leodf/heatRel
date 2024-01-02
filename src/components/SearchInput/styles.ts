import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const SearchContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.SIZES.LARGE}px;
  margin-bottom: ${({ theme }) => theme.SIZES.LARGE}px;
  height: 50px;
`;

export const SearchWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  /* margin-right: ${({ theme }) => theme.SIZES.MEDIUM}px; */
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.SIZES.SMALL}px;
  height: 100%;
  padding: ${({ theme }) => theme.SIZES.SMALL}px;
`;

export const InputField = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${({ theme }) => theme.SIZES.MEDIUM}px;
  width: 100%;
  height: 100%;
`;

export const SearchBtn = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.TERTIARY};
  border-radius: ${({ theme }) => theme.SIZES.MEDIUM}px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.SIZES.LARGE}px;
`;
