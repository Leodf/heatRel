import React from "react";
import { Container, HomeContent } from "./styles";
import Welcome from "./components/Welcome";
import Clientes from "./components/Clientes";
import FabButton from "../../components/FabButton";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <HomeContent>
        <Welcome />
        <Clientes />
        <FabButton onPress={() => navigation.navigate("AddClient" as never)} />
      </HomeContent>
    </Container>
  );
}
