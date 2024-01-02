import React, { useState } from "react";
import { Container } from "./styles";
import { Text } from "react-native-paper";
import HRTextInput from "../../components/TextInput";
import Button from "../../components/Button";

export default function AddClient() {
  const [name, setName] = useState("");

  return (
    <Container>
      <Text>AddClient</Text>
      <HRTextInput label="name" value={name} onChangeText={setName} />
      <Button title="clique" onPress={() => {}} />
    </Container>
  );
}
