import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Clientes from "../screens/Clientes";
import DrawerHome from "../screens/Home/components/DrawerHome";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Clientes"
        component={Clientes}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
