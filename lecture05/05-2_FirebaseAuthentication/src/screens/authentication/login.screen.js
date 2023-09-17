import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { Spacer } from "../../components/spacer.component";
import { Text } from "../../infrastructure/typography/text";

import {
  AuthenticationBackground,
  AuthenticationCover,
  AuthenticationContainer,
  AuthenticationButton,
  AuthenticationInput,
  AuthenticationTitle,
  AuthenticationAccount,
  AuthenticationLink,
  ErrorContainer,
} from "./authentication.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AuthenticationBackground>
      <AuthenticationCover />
      <AuthenticationContainer>
        <AuthenticationTitle>Firebase Authentication</AuthenticationTitle>
        <Spacer size="large">
          <AuthenticationInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(user) => setEmail(user)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthenticationInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(pass) => setPassword(pass)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthenticationButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthenticationButton>
          ) : (
            <ActivityIndicator animating={true} />
          )}
        </Spacer>
        <Spacer size="large">
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <AuthenticationAccount>
              Don't have an account?{"  "}
              <AuthenticationLink>Sign Up</AuthenticationLink>
            </AuthenticationAccount>
          </TouchableOpacity>
        </Spacer>
      </AuthenticationContainer>
    </AuthenticationBackground>
  );
};
