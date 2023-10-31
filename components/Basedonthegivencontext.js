import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Basedonthegivencontext = ({ propTop, propLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={[styles.groupChild, styles.groupBg]} />
      <View style={[styles.groupItem, styles.groupBg]} />
      <View style={[styles.groupWrapper, styles.wrapperPosition]}>
        <View style={styles.wrapperLayout}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text
              style={[styles.text, styles.wrapperPosition]}
            >{`-  1  +   `}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBg: {
    backgroundColor: Color.colorChocolate_100,
    position: "absolute",
  },
  wrapperPosition: {
    top: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 22,
    width: 33,
  },
  groupChild: {
    top: 2,
    left: 5,
    borderRadius: Border.br_26xl,
    width: 59,
    height: 18,
  },
  groupItem: {
    top: 442,
    borderRadius: Border.br_5xs,
    height: 23,
    left: 0,
    width: 82,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kanit,
    color: Color.colorWhite,
    textAlign: "center",
    left: 0,
  },
  wrapper: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  groupWrapper: {
    left: 14,
    width: 43,
  },
  rectangleParent: {
    top: 299,
    left: 242,
    height: 465,
    width: 82,
    position: "absolute",
  },
});

export default Basedonthegivencontext;
