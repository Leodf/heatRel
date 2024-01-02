import React from "react";
import { Container, ButtonText } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

export default function Button({
  title,
  onPress,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <Container {...props}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
