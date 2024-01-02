import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

export default function Error() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Erro no carregamento...</Text>
    </View>
  );
}
