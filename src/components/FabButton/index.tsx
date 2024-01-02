import React from "react";

import { FabContainer, TextButon } from "./styles";
import { GestureResponderEvent } from "react-native";

type FabButtonProps = {
  onPress: any;
};

export default function FabButton({ onPress }: FabButtonProps) {
  return (
    <FabContainer onPress={onPress}>
      <TextButon>+</TextButon>
    </FabContainer>
  );
}
