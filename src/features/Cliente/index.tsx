import React from "react";
import { Container, Text } from "./styles";
import Company from "./components/Company";
import { NavigationProps } from "../../config/@types/navigation";
import { ClientTabRoutes } from "../../routes/client-routes";
import { isLoading } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import useClientViewModel from "./hooks/useClientViewModel";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function Cliente({ route }: NavigationProps<"Cliente">) {
  const clientId = route?.params?.clientId;
  if (!clientId) return;
  const { data, isLoading, error } = useClientViewModel(clientId);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container>
      <Company
        companyName={data?.name}
        salesmanName="Leonardo"
        companyLogo={data?.imagemUrl}
      />
      <ClientTabRoutes />
    </Container>
  );
}
