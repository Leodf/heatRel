import styled from "styled-components/native";

export const ClientContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 17px;
  margin-left: 10px;
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: grey;
`;
