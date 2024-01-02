import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import theme from "../../config/theme";
import Contatos from "../../features/Cliente/components/Contatos";
import Equipamentos from "../../features/Cliente/components/Equipamentos";
import Relatorios from "../../features/Cliente/components/Relatorios";
import Orcamentos from "../../features/Cliente/components/Orcamentos";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const screenOptions: MaterialTopTabNavigationOptions = {
  tabBarActiveTintColor: theme.COLORS.PRIMARY,
  tabBarShowLabel: false,
  tabBarLabelStyle: {
    fontSize: theme.SIZES.SMALL,
    fontFamily: theme.FONTS.MEDIUM,
  },
  tabBarStyle: { backgroundColor: theme.COLORS.LIGHTWHITE },
  tabBarIndicatorStyle: { backgroundColor: theme.COLORS.TERTIARY },
};

export function ClientTabRoutes() {
  const tabs = [
    {
      name: "Relatorios",
      component: Relatorios,
      icon: "md-document-text",
    },
    {
      name: "Contatos",
      component: Contatos,
      icon: "md-people",
    },
    {
      name: "Orcamentos",
      component: Orcamentos,
      icon: "layers",
    },
    {
      name: "Equipamentos",
      component: Equipamentos,
      icon: "construct",
    },
  ];

  return (
    <Tab.Navigator initialRouteName="Relatorios" screenOptions={screenOptions}>
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.name,
            tabBarIcon: () => (
              <Ionicons
                name={tab.icon as any}
                size={24}
                color={theme.COLORS.TERTIARY}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
