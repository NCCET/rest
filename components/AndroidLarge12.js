import React, { useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet } from "react-native";

const AndroidLarge12 = () => {
  const [androidLarge12Animating, setAndroidLarge12Animating] = useState(true);

  return (
    <ActivityIndicator
      style={styles.androidLarge12}
      animating={androidLarge12Animating}
      size="[object Object]"
      color="#fff"
    />
  );
};

const styles = StyleSheet.create({
  androidLarge12: {
    width: 360,
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge12;
