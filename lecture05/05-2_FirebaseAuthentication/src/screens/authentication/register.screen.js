import React, { useState, useContext } from "react";
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
  ErrorContainer,
} from "./authentication.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AuthenticationBackground>
      <AuthenticationCover />
      <AuthenticationContainer>
        <AuthenticationTitle>Firebase Authentication</AuthenticationTitle>
        <AuthenticationInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthenticationInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthenticationInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
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
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Sign Up
            </AuthenticationButton>
          ) : (
            <ActivityIndicator animating={true} />
          )}
        </Spacer>
      </AuthenticationContainer>
      <Spacer size="large">
        <AuthenticationButton
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthenticationButton>
      </Spacer>
    </AuthenticationBackground>
  );
};
