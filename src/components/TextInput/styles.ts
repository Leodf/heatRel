import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  /* margin-right: ${({ theme }) => theme.SIZES.MEDIUM}px; */
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.SIZES.SMALL}px;
  padding: ${({ theme }) => theme.SIZES.SMALL}px;
`;

export const InputField = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${({ theme }) => theme.SIZES.MEDIUM}px;
  width: 100%;
`;
