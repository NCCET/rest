import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Basedonthegivencontext from "./Basedonthegivencontext";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge15Default = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge15default}>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <Image
        style={styles.f303057896Uoqpwealaewrvflh5oIcon}
        contentFit="cover"
        source={require("../assets/240-f-303057896-uoqpwealaewrvflh5ouq0rib3efhnnai-1.png")}
      />
      <Image
        style={[styles.androidLarge15defaultChild, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={styles.images6Icon}
        contentFit="cover"
        source={require("../assets/images-61.png")}
      />
      <Text style={[styles.beefSalad, styles.seeAllFlexBox]}>Beef Salad</Text>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/10801392-11.png")}
      />
      <Text style={[styles.ratings, styles.seeAllFlexBox]}>(59 ratings)</Text>
      <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <Text style={[styles.r19000, styles.r19000Typo]}>R190.00</Text>
      <View style={styles.androidLarge15defaultItem} />
      <Basedonthegivencontext propTop={299} propLeft={242} />
      <Text style={[styles.totalR23000, styles.r19000Typo]}>
        Total: R230,00
      </Text>
      <Text style={[styles.addToCart, styles.seeAllFlexBox]}>Add to Cart</Text>
      <Image
        style={styles.icon3}
        contentFit="cover"
        source={require("../assets/4893746-1.png")}
      />
      <View style={styles.androidLarge15defaultInner} />
      <Text style={[styles.grilledMeatWith, styles.withTypo]}>
        grilled meat with tomato and sauce
      </Text>
      <Text style={[styles.recommendedSides, styles.descriptionTypo]}>
        Recommended sides
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <View
        style={[
          styles.androidLarge15defaultChild1,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Image
        style={[styles.ellipseIcon, styles.r23000Position]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.r23000, styles.r23000Position]}>R230.00</Text>
      <Text style={[styles.r13043, styles.r23000Position]}>R130.43</Text>
      <Text style={[styles.r15095, styles.r19000Typo]}>R150.95</Text>
      <Image
        style={[styles.androidLarge15defaultChild2, styles.r23000Position]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>-</Text>
      <Text style={[styles.musselRedCurry, styles.textTypo]}>
        Mussel Red Curry Vegetarian Cuisine
      </Text>
      <Image
        style={styles.androidLarge15defaultChild3}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      <Text
        style={[styles.ratingsReviews, styles.ratingsReviewsPosition]}
      >{`Ratings & Reviews`}</Text>
      <Text style={[styles.seeAll, styles.seeAllFlexBox]}>SEE ALL</Text>
      <Text style={[styles.mixedRiceWith, styles.rectangleViewPosition]}>
        mixed rice with chicken,biryani
      </Text>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Description
      </Text>
      <Text style={[styles.grilledMeatWithContainer, styles.seeAllFlexBox]}>
        <Text style={styles.grilledMeatWith1}>
          grilled meat with tomato and sauce, Chapli kebab cuisine Chicken tikka
          .
        </Text>
        <Text style={styles.eachServingContains}>
          (Each serving contains 262 calories)
        </Text>
      </Text>
      <Image
        style={styles.pngTransparentGrilledMeatWIcon}
        contentFit="cover"
        source={require("../assets/pngtransparentgrilledmeatwithtomatoandsaucechaplikebabpakistanicuisinechickentikkakebabfoodrecipechickenmeatthumbnail-1.png")}
      />
      <Image
        style={styles.pngTransparentMixedRiceWitIcon}
        contentFit="cover"
        source={require("../assets/pngtransparentmixedricewithchickenbiryanidampokhtakchickentikkakebabpunjabicuisinebiryanifoodanimalsrecipethumbnail-1.png")}
      />
      <Image
        style={styles.musselRedCurryVegetarianCuIcon}
        contentFit="cover"
        source={require("../assets/musselredcurryvegetariancuisinethaicuisinegreencurrypngfavpngpridjyenqaq0vzpwtsrgbw6mq-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    height: 2,
    position: "absolute",
  },
  seeAllFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  r19000Typo: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  withTypo: {
    top: 533,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  descriptionTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 154,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    top: 460,
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
    backgroundColor: Color.colorWhite,
  },
  r23000Position: {
    top: 561,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "300",
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  ratingsReviewsPosition: {
    left: 27,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 25,
    top: 39,
    width: 26,
    height: 22,
    position: "absolute",
  },
  f303057896Uoqpwealaewrvflh5oIcon: {
    top: 34,
    left: 307,
    width: 32,
    height: 28,
    position: "absolute",
  },
  androidLarge15defaultChild: {
    top: 81,
    width: 358,
    left: 0,
  },
  images6Icon: {
    top: 82,
    left: 83,
    borderRadius: Border.br_7xl,
    width: 183,
    height: 142,
    position: "absolute",
  },
  beefSalad: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorGray_300,
    fontFamily: FontFamily.kanit,
    textAlign: "center",
    left: 36,
    top: 243,
  },
  icon1: {
    width: 82,
    height: 24,
    left: 121,
    top: 243,
    position: "absolute",
  },
  ratings: {
    top: 246,
    left: 190,
    color: Color.colorGray_200,
    width: 100,
    height: 100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.kanit,
    textAlign: "center",
  },
  icon2: {
    top: 197,
    left: 274,
    width: 28,
    height: 27,
    position: "absolute",
  },
  r19000: {
    top: 267,
    left: 35,
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge15defaultItem: {
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
  totalR23000: {
    top: 740,
    left: 27,
    color: Color.colorBlack,
    position: "absolute",
  },
  addToCart: {
    top: 746,
    left: 264,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.kanit,
    textAlign: "center",
  },
  icon3: {
    top: 744,
    left: 245,
    height: 16,
    width: 18,
    position: "absolute",
  },
  androidLarge15defaultInner: {
    top: 456,
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
    left: 27,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  grilledMeatWith: {
    width: 109,
    left: 23,
    position: "absolute",
  },
  recommendedSides: {
    top: 421,
    left: 33,
  },
  rectangleView: {
    width: 122,
    height: 123,
    top: 460,
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
    backgroundColor: Color.colorWhite,
  },
  lineIcon: {
    top: 413,
    left: 1,
    width: 359,
  },
  androidLarge15defaultChild1: {
    left: 291,
    width: 127,
    height: 138,
    position: "absolute",
  },
  ellipseIcon: {
    left: 117,
    width: 17,
    height: 17,
  },
  text: {
    top: 552,
    width: 8,
    color: Color.colorChocolate_100,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    left: 121,
  },
  r23000: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    left: 36,
  },
  r13043: {
    left: 168,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  r15095: {
    top: 572,
    left: 299,
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge15defaultChild2: {
    left: 250,
    height: 18,
    width: 18,
  },
  text1: {
    top: 553,
    left: 254,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    color: Color.colorWhite,
  },
  musselRedCurry: {
    top: 530,
    left: 295,
    width: 107,
    height: 85,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  androidLarge15defaultChild3: {
    top: 621,
    height: 1,
    left: 0,
    position: "absolute",
    width: 360,
  },
  ratingsReviews: {
    top: 635,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  seeAll: {
    top: 642,
    left: 309,
    fontFamily: FontFamily.inter,
    color: Color.colorChocolate_200,
    fontSize: FontSize.size_3xs,
  },
  mixedRiceWith: {
    width: 120,
    top: 527,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  description: {
    top: 328,
    left: 36,
  },
  grilledMeatWith1: {
    color: Color.colorBlack,
  },
  eachServingContains: {
    color: Color.colorChocolate_100,
  },
  grilledMeatWithContainer: {
    top: 349,
    left: 30,
    fontSize: FontSize.size_2xs,
    width: 328,
    fontFamily: FontFamily.kanit,
    textAlign: "center",
  },
  pngTransparentGrilledMeatWIcon: {
    top: 462,
    width: 98,
    height: 61,
    left: 36,
    position: "absolute",
  },
  pngTransparentMixedRiceWitIcon: {
    top: 465,
    left: 179,
    width: 63,
    height: 65,
    position: "absolute",
  },
  musselRedCurryVegetarianCuIcon: {
    top: 468,
    left: 297,
    width: 102,
    height: 62,
    position: "absolute",
  },
  androidLarge15default: {
    borderRadius: Border.br_15xl,
    height: 1000,
    overflow: "hidden",
    width: 400,
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge15Default;
