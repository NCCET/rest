import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  price,
  dishDescription,
  showImages5Icon,
  propLeft,
  propLeft1,
}) => {
  const r14000Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const chickenPastaSaladStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <Text style={[styles.r14000, styles.r14000Typo, r14000Style]}>
        {itemPrice}
      </Text>
      <Text
        style={[
          styles.chickenPastaSalad,
          styles.r14000Typo,
          chickenPastaSaladStyle,
        ]}
      >
        {foodItemName}
      </Text>
      {showImages5Icon && (
        <Image
          style={[styles.images5Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images-5.png")}
        />
      )}
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  r14000Typo: {
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconPosition: {
    top: 17,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_8xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 147,
    height: 168,
    zIndex: 0,
  },
  r14000: {
    top: 134,
    left: 34,
    color: Color.colorBlack,
    zIndex: 1,
  },
  chickenPastaSalad: {
    top: 115,
    left: 5,
    color: Color.colorGray_300,
    zIndex: 2,
  },
  images5Icon: {
    left: 27,
    borderRadius: Border.br_4xs,
    width: 71,
    height: 77,
    zIndex: 3,
  },
  icon: {
    left: 113,
    width: 28,
    height: 27,
    zIndex: 4,
  },
  rectangleParent: {
    top: 518,
    left: 28,
    flexDirection: "row",
    position: "absolute",
  },
});

export default FormContainer;
