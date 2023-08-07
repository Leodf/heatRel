import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Container, Text, LogoIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoIcon width={24} height={24} />
      <Text>Home</Text>
      <View style={{ width: "80%" }}>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            borderRadius: 5,
            backgroundColor: "#f6f6f6",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
          onPress={() => navigation.navigate("Clientes" as never)}
        >
          <Text>Teste</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
