import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../../screens/authentication/login.screen";
import { RegisterScreen } from "../../screens/authentication/register.screen";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AuthenticationNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
