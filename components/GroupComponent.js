import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.androidLarge9Parent}>
      <View style={styles.androidLarge9}>
        <Image
          style={styles.images1Icon}
          contentFit="cover"
          source={require("../assets/images-1.png")}
        />
        <Text style={[styles.eMailAddress, styles.passwordTypo]}>
          E-mail address
        </Text>
        <Text style={[styles.fullName, styles.passwordTypo]}>Full Name</Text>
        <Text style={[styles.enterPassword, styles.passwordTypo]}>
          Enter password
        </Text>
        <Text style={[styles.confirmPassword, styles.passwordTypo]}>
          Confirm Password
        </Text>
        <View style={[styles.androidLarge9Child, styles.androidShadowBox]} />
        <View style={[styles.androidLarge9Item, styles.androidShadowBox]} />
        <View style={[styles.androidLarge9Inner, styles.androidShadowBox]} />
        <View style={[styles.rectangleView, styles.androidShadowBox]} />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.login, styles.orTypo]}>Login</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rememberMePosition]}>
          <View style={styles.frameChild} />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <Text style={[styles.rememberMe, styles.rememberMePosition]}>
          Remember me
        </Text>
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
        <Image
          style={[styles.androidLarge9Child1, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
        <Text style={[styles.signInUsing, styles.orTypo]}>Sign in using:</Text>
        <View style={styles.icons8Facebook481Parent}>
          <Image
            style={[styles.icons8Facebook481, styles.icons8Layout]}
            contentFit="cover"
            source={require("../assets/icons8facebook48-1.png")}
          />
          <Image
            style={[styles.icons8Google481, styles.icons8Layout]}
            contentFit="cover"
            source={require("../assets/icons8google48-1.png")}
          />
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/733579-1.png")}
          />
        </View>
        <Text style={[styles.createAccount, styles.passwordTypo]}>
          Create Account
        </Text>
        <Text style={[styles.alreadyHaveAContainer, styles.orTypo]}>
          <Text style={styles.alreadyHaveA}>Already have a account?</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.signIn}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    color: Color.colorBlack,
  },
  androidShadowBox: {
    height: 29,
    width: 326,
    borderBottomWidth: 1,
    borderColor: Color.colorGray_700,
    borderStyle: "dashed",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    left: 6,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChildLayout: {
    width: 206,
    height: 29,
    position: "absolute",
  },
  orTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  rememberMePosition: {
    top: 535,
    position: "absolute",
  },
  lineIconPosition: {
    height: 1,
    top: 647,
    position: "absolute",
  },
  icons8Layout: {
    width: 48,
    height: 48,
    top: 0,
    position: "absolute",
  },
  images1Icon: {
    borderTopRightRadius: Border.br_62xl_5,
    borderBottomRightRadius: Border.br_62xl_5,
    borderBottomLeftRadius: Border.br_62xl_5,
    width: 163,
    height: 180,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eMailAddress: {
    top: 339,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kanit,
    left: 9,
    position: "absolute",
  },
  fullName: {
    top: 277,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kanit,
    left: 9,
    position: "absolute",
  },
  enterPassword: {
    top: 402,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kanit,
    left: 9,
    position: "absolute",
  },
  confirmPassword: {
    top: 466,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kanit,
    left: 9,
    position: "absolute",
  },
  androidLarge9Child: {
    top: 363,
  },
  androidLarge9Item: {
    top: 301,
  },
  androidLarge9Inner: {
    top: 429,
  },
  rectangleView: {
    top: 495,
  },
  groupChild: {
    backgroundColor: Color.colorChocolate_100,
    borderRadius: Border.br_4xs,
    width: 206,
    left: 0,
    top: 0,
  },
  login: {
    top: 2,
    left: 79,
    color: Color.colorWhite,
    width: 46,
  },
  rectangleParent: {
    top: 577,
    left: 77,
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 3,
    width: 22,
    height: 22,
    zIndex: 0,
    backgroundColor: Color.colorWhite,
  },
  frameItem: {
    top: 6,
    width: 11,
    height: 9,
    zIndex: 1,
    left: 6,
    position: "absolute",
  },
  rectangleGroup: {
    width: 24,
    height: 19,
    left: 9,
  },
  rememberMe: {
    left: 33,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    color: Color.colorBlack,
  },
  lineIcon: {
    width: 128,
    left: 9,
  },
  androidLarge9Child1: {
    left: 193,
    width: 143,
  },
  or: {
    top: 635,
    left: 154,
    color: Color.colorBlack,
  },
  signInUsing: {
    top: 661,
    left: 117,
    color: Color.colorGray_800,
  },
  icons8Facebook481: {
    left: 84,
  },
  icons8Google481: {
    left: 0,
  },
  icon: {
    top: 8,
    left: 149,
    width: 34,
    height: 33,
    position: "absolute",
  },
  icons8Facebook481Parent: {
    top: 698,
    left: 66,
    width: 183,
    height: 48,
    position: "absolute",
  },
  createAccount: {
    top: 198,
    left: 101,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    position: "absolute",
  },
  alreadyHaveA: {
    color: Color.colorGray_900,
  },
  text: {
    color: Color.colorBlack,
  },
  signIn: {
    color: Color.colorChocolate_100,
  },
  alreadyHaveAContainer: {
    top: 754,
    left: 59,
  },
  androidLarge9: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_15xl,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  androidLarge9Parent: {
    width: 360,
    height: 800,
  },
});

export default GroupComponent;
