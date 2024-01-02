import styled from "styled-components/native";

export const ContatosLista = styled.FlatList`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.LIGHTWHITE};
`;

export const Contato = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  padding: 16px;
  margin-bottom: 12px;
`;

export const ContatoName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
