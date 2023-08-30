import React, { useState } from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  onPress = () => {
    setText(`Hello, ${name.trim() === "" ? "World" : name}!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <TextInput
          style={styles.input}
          label="Enter your name"
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <Button mode="contained" onPress={this.onPress} title="Send" />
      </View>
      <Text style={styles.bottomSection}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topSection: {
    padding: 16,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomSection: {
    fontSize: 20,
    textAlign: "center",
  },
});
