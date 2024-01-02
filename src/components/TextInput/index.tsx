import React from "react";
import { Container, InputField } from "./styles";

type TextInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
};

const HRTextInput = ({ label, value, onChangeText }: TextInputProps) => {
  return (
    <Container>
      <InputField
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
      />
    </Container>
  );
};

export default HRTextInput;
