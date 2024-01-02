import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootRoutes from "./root-routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <RootRoutes />
    </NavigationContainer>
  );
}
