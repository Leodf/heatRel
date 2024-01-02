import React from "react";
import { Container } from "./styles";
import Text from "../../../../components/Text";
import { ListRenderItemInfo, FlatList } from "react-native";
import useClientViewModel from "../../hooks/useClientViewModel";
import { Client } from "../../models/Client";
import ListClients from "../ListClients";
import SearchInput from "../../../../components/SearchInput";
import Error from "../../../../components/Error";
import Loading from "../../../../components/Loading";

export default function Clientes() {
  const { data, error, isLoading, handleSearch, searchQuery, onPressClient } =
    useClientViewModel();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function renderItem({ item }: ListRenderItemInfo<Client>) {
    return (
      <ListClients
        name={item.name}
        imagemUrl={item.imagemUrl}
        segment={item.segment}
        onPress={() => onPressClient(item)}
      />
    );
  }

  return (
    <Container>
      <SearchInput
        text={searchQuery}
        onChangeText={(query) => handleSearch(query)}
      />
      <FlatList
        ListHeaderComponent={<Text isTitle>Clientes</Text>}
        keyExtractor={(item: any) => String(item.id)}
        data={data}
        renderItem={renderItem}
      />
    </Container>
  );
}
