import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import Logo from "../../assets/Logo.svg";
import theme from "../../config/theme";
import Cliente from "../../features/Cliente";
import Home from "../../features/Home";
import AddClient from "../../features/AddClient";

const Stack = createNativeStackNavigator();

export default function RootRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        // animation: "fade",
        // animationDuration: 450,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: theme.COLORS.LIGHTWHITE },
          headerTitle: "",
          headerLeft: () => (
            <Logo color={theme.COLORS.GRAY} width={32} height={32} />
          ),
          headerRight: () => (
            <Avatar.Image
              size={42}
              source={{
                uri: "https://github.com/Leodf.png",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Cliente"
        component={Cliente}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerTitle: "",
          headerRight: () => (
            <Ionicons
              name="share-social-sharp"
              size={24}
              color={theme.COLORS.GRAY}
            />
          ),
        }}
      />
      <Stack.Screen
        name="AddClient"
        component={AddClient}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
