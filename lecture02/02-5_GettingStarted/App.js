import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

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
        <Button mode="contained" onPress={this.onPress}>
          Send
        </Button>
      </View>
      <Text style={styles.bottomSection}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
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
