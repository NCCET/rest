import * as React from "react";
import { StyleSheet, View } from "react-native";
import SignInFormContainer from "./SignInFormContainer";
import { Border, Color } from "../GlobalStyles";

const GroupComponentSet = () => {
  return (
    <View style={styles.property1defaultParent}>
      <SignInFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 400,
    height: 1660,
    overflow: "hidden",
  },
});

export default GroupComponentSet;
