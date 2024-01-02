import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { ClientContainer, Image, SubTitle, Title } from "./styles";
import { Avatar } from "react-native-paper";

export type ListClientProps = {
  name: string;
  segment: string;
  imagemUrl?: string;
  onPress?: () => void;
};

export default function ListClients({
  name,
  segment,
  imagemUrl,
  onPress,
}: ListClientProps) {
  const personIcon = () => <Ionicons name="person" size={32} />;

  return (
    <ClientContainer onPress={onPress}>
      {imagemUrl ? (
        <Image source={{ uri: imagemUrl }} />
      ) : (
        <Avatar.Icon icon={personIcon} />
      )}
      <View>
        <Title>{name}</Title>
        <SubTitle>{segment}</SubTitle>
      </View>
    </ClientContainer>
  );
}
