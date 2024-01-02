import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

// import { Container } from './styles';

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        <ActivityIndicator size={"large"} color="red" />
      </Text>
    </View>
  );
}
