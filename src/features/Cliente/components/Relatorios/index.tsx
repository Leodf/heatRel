import React from "react";
import { View, Text } from "react-native";

import { Container } from "./styles";

export default function Relatorios() {
  function RenderItem() {
    for (let i = 0; i < 1000; i++) {
      return <Text>Relatorios</Text>;
    }
  }

  return (
    <Container>
      <RenderItem />
    </Container>
  );
}
