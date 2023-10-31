import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignInFormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.property1default}>
      <View style={styles.androidLarge1}>
        <View style={styles.images1Parent}>
          <Image
            style={styles.images1Icon}
            contentFit="cover"
            source={require("../assets/images-11.png")}
          />
          <View style={styles.signInParent}>
            <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
            <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/line-1.png")}
            />
          </View>
          <Text style={[styles.eMailAddress, styles.eMailAddressTypo]}>
            E-mail address
          </Text>
          <Text style={[styles.enterPassword, styles.eMailAddressTypo]}>
            Enter password
          </Text>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <Pressable
            style={[styles.rectangleParent, styles.rectangleLayout]}
            onPress={() => navigation.navigate("GroupComponent")}
          >
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.login, styles.orTypo]}>Login</Text>
          </Pressable>
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
          <Text style={[styles.forgotPassword, styles.signTypo]}>
            Forgot password?
          </Text>

          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            contentFit="cover"
            source={require("../assets/line-2.png")}
          />

          <Image
            style={[styles.groupChild1, styles.lineIconPosition]}
            contentFit="cover"
            source={require("../assets/line-3.png")}
          />

          <Text style={[styles.or, styles.orTypo]}>OR</Text>
          <Text style={[styles.signInUsing, styles.orTypo]}>
            Sign in using:
          </Text>

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
        </View>
        <Text style={[styles.dontHaveAnContainer, styles.orTypo]}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.signIn1}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  eMailAddressTypo: {
    fontSize: FontSize.size_mini,
    left: 31,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  groupShadowBox: {
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
    left: 28,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rectangleLayout: {
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
    top: 456,
    position: "absolute",
  },
  lineIconPosition: {
    height: 1,
    top: 625,
    position: "absolute",
  },
  icons8Layout: {
    width: 48,
    height: 48,
    top: 0,
    position: "absolute",
  },
  images1Icon: {
    top: 16,
    left: 15,
    borderTopRightRadius: Border.br_62xl_5,
    borderBottomRightRadius: Border.br_62xl_5,
    borderBottomLeftRadius: Border.br_62xl_5,
    width: 163,
    height: 180,
    position: "absolute",
  },
  signIn: {
    left: 36,
    color: Color.colorDarkorange_100,
    fontSize: FontSize.size_5xl,
    top: 0,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  signUp: {
    left: 198,
    color: Color.colorDarkorange_200,
    fontSize: FontSize.size_5xl,
    top: 0,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  groupChild: {
    top: 40,
    width: 151,
    height: 3,
    left: 0,
    position: "absolute",
  },
  signInParent: {
    top: 209,
    width: 280,
    height: 43,
    left: 28,
    position: "absolute",
  },
  eMailAddress: {
    top: 281,
    color: Color.colorBlack,
  },
  enterPassword: {
    top: 367,
    color: Color.colorBlack,
  },
  groupItem: {
    top: 305,
  },
  groupInner: {
    top: 394,
  },
  rectangleView: {
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
    top: 540,
    left: 76,
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
    left: 6,
    width: 11,
    height: 9,
    zIndex: 1,
    position: "absolute",
  },
  rectangleGroup: {
    width: 24,
    height: 19,
    left: 28,
  },
  rememberMe: {
    left: 52,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  forgotPassword: {
    top: 428,
    left: 252,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_100,
    position: "absolute",
  },
  lineIcon: {
    width: 128,
    left: 28,
  },
  groupChild1: {
    left: 212,
    width: 143,
  },
  or: {
    top: 613,
    left: 173,
    color: Color.colorBlack,
  },
  signInUsing: {
    top: 668,
    left: 140,
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
    top: 711,
    left: 94,
    width: 183,
    height: 48,
    position: "absolute",
  },
  images1Parent: {
    top: -16,
    left: -15,
    width: 355,
    height: 759,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.colorGray_900,
  },
  text: {
    color: Color.colorBlack,
  },
  signIn1: {
    color: Color.colorChocolate_100,
  },
  dontHaveAnContainer: {
    top: 769,
    left: 73,
  },
  androidLarge1: {
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
  property1default: {
    top: 20,
    left: 20,
    width: 360,
    height: 800,
    position: "absolute",
  },
});

export default SignInFormContainer;
