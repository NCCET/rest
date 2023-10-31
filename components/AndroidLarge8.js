import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Basedonthegivencontext from "./Basedonthegivencontext";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge8}>
      <View style={styles.androidLarge8Child} />
      <View style={styles.androidLarge8Item} />
      <Text style={[styles.creamyGarlicParmesan, styles.textFlexBox]}>
        Creamy Garlic Parmesan Shrimp
      </Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.androidLarge8Inner, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <Text style={styles.shrimpPasta}>Shrimp Pasta</Text>
      <Image
        style={[styles.icon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/10801392-1.png")}
      />
      <Text style={[styles.ratings, styles.textFlexBox]}>(59 ratings)</Text>
      <Text style={[styles.r15000, styles.r5000Typo]}>R150.00</Text>
      <Basedonthegivencontext propTop={295} propLeft={241} />
      <Text style={[styles.description, styles.descriptionTypo]}>
        Description
      </Text>
      <Text style={styles.scampiIsActuallyContainer}>
        <Text style={styles.scampiIsActually}>
          Scampi is actually the name of a prawn or small lobster found in the
          Mediterranean and Northeastern Atlantic. It is also called the Dublin
          Bay Prawn or Norway Lobster.
        </Text>
        <Text style={styles.eachServingContains}>
          (Each serving contains 880 - 500 calories)
        </Text>
      </Text>
      <Text style={[styles.recommendedSides, styles.descriptionTypo]}>
        Recommended sides
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.kotabunnyChow, styles.kotabunnyChowTypo]}>
        Kota/Bunny chow
      </Text>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <View
        style={[styles.androidLarge8Child1, styles.rectangleViewShadowBox]}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.r12500, styles.r5000Typo]}>R125.00</Text>
      <Text style={[styles.r5000, styles.r5000Typo]}>R50.00</Text>
      <Image
        style={styles.b14ab581812da60418443030fa0327Icon}
        contentFit="cover"
        source={require("../assets/86b14ab581812da60418443030fa0327-1.png")}
      />
      <Text style={[styles.r10000, styles.r5000Typo]}>R100.00</Text>
      <Image
        style={[styles.androidLarge8Child2, styles.icon3Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.text1, styles.text1Typo]}>-</Text>
      <Text style={[styles.capeMalayBollas, styles.kotabunnyChowTypo]}>
        Cape Malay Bollas
      </Text>
      <Image
        style={styles.androidLarge8Child3}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      <Text
        style={[styles.ratingsReviews, styles.r5000Typo]}
      >{`Ratings & Reviews`}</Text>
      <Text style={[styles.seeAll, styles.textFlexBox]}>SEE ALL</Text>
      <Text style={[styles.totalR25000, styles.r5000Typo]}>Total: R250,00</Text>
      <Text style={[styles.addToCart, styles.text1Typo]}>Add to Cart</Text>
      <Image
        style={[styles.icon3, styles.icon3Layout]}
        contentFit="cover"
        source={require("../assets/4893746-1.png")}
      />
      <Image
        style={styles.f303057896Uoqpwealaewrvflh5oIcon}
        contentFit="cover"
        source={require("../assets/240-f-303057896-uoqpwealaewrvflh5ouq0rib3efhnnai-1.png")}
      />
      <Image
        style={styles.images3Icon}
        contentFit="cover"
        source={require("../assets/images-3.png")}
      />
      <Image
        style={styles.creamyGarlicParmesanShrimpIcon}
        contentFit="cover"
        source={require("../assets/creamygarlicparmesanshrimppastarecipeimage12-1.png")}
      />
      <Image
        style={styles.goldBunnyChow1Icon}
        contentFit="cover"
        source={require("../assets/goldbunnychow-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  lineIconPosition: {
    height: 2,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 116,
    position: "absolute",
  },
  r5000Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  descriptionTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 32,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 123,
    top: 459,
    borderColor: Color.colorGray_600,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mid,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  kotabunnyChowTypo: {
    top: 534,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    fontWeight: "300",
  },
  icon3Layout: {
    width: 18,
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  androidLarge8Child: {
    top: 716,
    borderRadius: Border.br_4xs,
    borderColor: Color.colorGray_500,
    height: 84,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    width: 360,
    backgroundColor: Color.colorWhite,
  },
  androidLarge8Item: {
    top: 455,
    width: 112,
    height: 127,
    borderColor: Color.colorGray_600,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mid,
    left: 26,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  creamyGarlicParmesan: {
    top: 532,
    width: 103,
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    fontSize: FontSize.size_3xs,
    left: 26,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 31,
    top: 38,
    width: 26,
    height: 22,
    position: "absolute",
  },
  androidLarge8Inner: {
    top: 81,
    width: 358,
  },
  icon1: {
    top: 197,
    left: 278,
    width: 28,
    height: 27,
    position: "absolute",
  },
  shrimpPasta: {
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 32,
    top: 246,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  icon2: {
    width: 75,
    height: 24,
    top: 246,
    left: 116,
  },
  ratings: {
    top: 250,
    left: 183,
    color: Color.colorGray_600,
    width: 51,
    height: 15,
    fontFamily: FontFamily.kanit,
    fontSize: FontSize.size_3xs,
  },
  r15000: {
    top: 270,
    left: 32,
  },
  description: {
    top: 317,
  },
  scampiIsActually: {
    color: Color.colorBlack,
  },
  eachServingContains: {
    color: Color.colorChocolate_100,
  },
  scampiIsActuallyContainer: {
    top: 331,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    width: 328,
    left: 32,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  recommendedSides: {
    top: 420,
  },
  rectangleView: {
    left: 153,
    width: 122,
  },
  kotabunnyChow: {
    left: 174,
  },
  lineIcon: {
    top: 412,
    width: 360,
  },
  androidLarge8Child1: {
    left: 290,
    width: 127,
  },
  ellipseIcon: {
    width: 17,
    height: 17,
    top: 560,
  },
  text: {
    top: 551,
    left: 120,
    width: 8,
    fontWeight: "300",
    color: Color.colorChocolate_100,
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.kanit,
  },
  r12500: {
    left: 37,
    top: 560,
  },
  r5000: {
    left: 168,
    top: 560,
  },
  b14ab581812da60418443030fa0327Icon: {
    top: 465,
    left: 298,
    width: 86,
    height: 67,
    position: "absolute",
  },
  r10000: {
    left: 296,
    top: 560,
  },
  androidLarge8Child2: {
    left: 249,
    height: 18,
    top: 560,
  },
  text1: {
    top: 552,
    left: 253,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
  },
  capeMalayBollas: {
    left: 293,
    width: 61,
    height: 45,
    fontWeight: "300",
  },
  androidLarge8Child3: {
    top: 620,
    height: 1,
    left: 0,
    position: "absolute",
    width: 360,
  },
  ratingsReviews: {
    top: 634,
    left: 26,
  },
  seeAll: {
    top: 641,
    left: 308,
    fontFamily: FontFamily.inter,
    color: Color.colorChocolate_200,
    fontSize: FontSize.size_3xs,
  },
  totalR25000: {
    top: 742,
    left: 26,
  },
  addToCart: {
    top: 746,
    left: 264,
    fontSize: FontSize.size_3xs,
  },
  icon3: {
    top: 744,
    left: 245,
    height: 16,
  },
  f303057896Uoqpwealaewrvflh5oIcon: {
    top: 35,
    left: 307,
    width: 32,
    height: 28,
    position: "absolute",
  },
  images3Icon: {
    top: 90,
    left: 93,
    borderRadius: Border.br_13xl,
    width: 179,
    height: 139,
    position: "absolute",
  },
  creamyGarlicParmesanShrimpIcon: {
    top: 460,
    left: 44,
    width: 76,
    height: 72,
    position: "absolute",
  },
  goldBunnyChow1Icon: {
    top: 464,
    left: 165,
    width: 97,
    height: 68,
    position: "absolute",
  },
  androidLarge8: {
    borderRadius: Border.br_15xl,
    height: 800,
    overflow: "hidden",
    width: 360,
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge8;
