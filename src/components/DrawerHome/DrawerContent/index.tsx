import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

// import { Container } from './styles';

export default function DrawerContent(props: any) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                size={50}
                source={{
                  uri: "https://github.com/Leodf.png",
                }}
              />
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>Leonardo de Faveri</Title>
                <Caption style={styles.caption}>Sales</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
            <Drawer.Section
              title="Menu"
              style={styles.drawerSection}
              showDivider={false}
            >
              <DrawerItem
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home-outline"
                    size={size}
                    color={color}
                  />
                )}
                label="Home"
                onPress={() => props.navigation.navigate("Home")}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={size}
                    color={color}
                  />
                )}
                label="Profile"
                onPress={() => {
                  setTimeout(() => props.navigation.closeDrawer(), 500);
                  props.navigation.navigate("Profile");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    size={size}
                    color={color}
                  />
                )}
                label="Clientes"
                onPress={() => {
                  setTimeout(() => props.navigation.closeDrawer(), 500);
                  props.navigation.navigate("Clientes");
                }}
              />
            </Drawer.Section>
            <Drawer.Section
              title="Preferences"
              style={styles.bottomDrawerSection}
              showDivider={false}
            >
              <TouchableRipple onPress={toggleTheme}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection} showDivider={false}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              size={size}
              color={color}
            />
          )}
          label="Log Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
