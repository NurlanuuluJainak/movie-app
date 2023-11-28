import React from "react";
import { View, StyleSheet, ProgressBarAndroid, Text } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.example}>
        <ProgressBarAndroid />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  example: {
    marginVertical: 24,
  },
});

export default Loader;
