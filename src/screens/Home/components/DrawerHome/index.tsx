import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import Home from "../..";

const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true, headerTitleAlign: "center" }}
      />
    </Drawer.Navigator>
  );
}
