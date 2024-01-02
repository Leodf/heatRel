import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Container } from "./styles";

export default function Orcamentos() {
  function RenderItem() {
    for (let i = 0; i < 1000; i++) {
      return <Text>Orçamentos</Text>;
    }
  }

  return (
    <Container>
      <RenderItem />
    </Container>
  );
}
