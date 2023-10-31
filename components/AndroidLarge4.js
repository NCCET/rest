import * as React from "react";
import { StyleSheet, View } from "react-native";
import FormContainer1 from "./FormContainer1";
import { Border, Color } from "../GlobalStyles";

const AndroidLarge4 = () => {
  return (
    <View style={styles.androidLarge4}>
      <FormContainer1 />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge4: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 400,
    height: 1660,
    overflow: "hidden",
  },
});

export default AndroidLarge4;
