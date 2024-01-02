import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import { Avatar } from "react-native-paper";
import Home from "../../screens/Home";

const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerTitle: "",
          headerRight: () => (
            <Avatar.Image
              size={50}
              source={{
                uri: "https://github.com/Leodf.png",
              }}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
