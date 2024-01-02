import React from "react";
import { View } from "react-native";
import { BodyText, TitleText } from "./styles";

type TextProps = {
  children: any;
  isTitle?: boolean;
};

export default function Text({ children, isTitle = false }: TextProps) {
  return (
    <View>
      {isTitle ? (
        <TitleText>{children}</TitleText>
      ) : (
        <BodyText>{children}</BodyText>
      )}
    </View>
  );
}
