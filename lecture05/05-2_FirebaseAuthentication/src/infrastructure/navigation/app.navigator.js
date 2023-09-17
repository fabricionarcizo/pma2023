import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { ArticlesScreen } from "../../screens/articles/articles.screen";
import { ContactsScreen } from "../../screens/contacts/contacts.screen";
import { AlbumsScreen } from "../../screens/albums/albums.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Articles: "newspaper",
  Contacts: "people",
  Albums: "albums",
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    <Ionicons name={iconName} size={size} color={color} />;

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const { onLogout } = useContext(AuthenticationContext);

  return {
    headerShown: true,
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "#2182BD",
    tabBarInactiveTintColor: "gray",
    headerRight: () => (
      <TouchableOpacity onPress={onLogout} style={{ marginRight: 10 }}>
        <Text style={{ color: "#2182BD" }}>Logout</Text>
      </TouchableOpacity>
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Articles" component={ArticlesScreen} />
    <Tab.Screen name="Contacts" component={ContactsScreen} />
    <Tab.Screen name="Albums" component={AlbumsScreen} />
  </Tab.Navigator>
);
