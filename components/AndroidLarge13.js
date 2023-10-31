import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Basedonthegivencontext from "./Basedonthegivencontext";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge13}>
      <View style={styles.androidLarge13Child} />
      <Image
        style={[styles.androidLarge13Item, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={styles.download1Icon}
        contentFit="cover"
        source={require("../assets/download-11.png")}
      />
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
      <Text style={[styles.vegetableCurry, styles.vegetableCurryTypo]}>
        Vegetable Curry
      </Text>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("../assets/10801392-12.png")}
      />
      <Text style={[styles.ratings, styles.seeAllTypo]}>(59 ratings)</Text>
      <Basedonthegivencontext />
      <Text
        style={[
          styles.indianCuisinePakistaniContainer,
          styles.vegetableCurryTypo,
        ]}
      >
        <Text style={styles.indianCuisinePakistani}>
          Indian cuisine Pakistani cuisine Chicken tikka Vegetarian cuisine
          Kebab, chicken curry.
        </Text>
        <Text style={styles.eachServingContains}>
          (Each serving contains 248 calories)
        </Text>
      </Text>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Description
      </Text>
      <Image
        style={[styles.androidLarge13Inner, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Image
        style={[styles.lineIcon, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.recommendedSides, styles.descriptionTypo]}>
        Recommended sides
      </Text>
      <View style={styles.rectangleView} />
      <Image
        style={styles.pngTransparentBrownCookingIcon}
        contentFit="cover"
        source={require("../assets/pngtransparentbrowncookingpotchickenkarahikormabiryanikebabbiryanifoodrecipechickenmeatthumbnail-1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.pakistaniCuisineGosht, styles.grilledMeatWithTypo]}>
        Pakistani cuisine Gosht Indian cuisine
      </Text>
      <Text style={[styles.r20000, styles.r20000Typo]}>R200.00</Text>
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <View
        style={[styles.androidLarge13Child1, styles.androidChildShadowBox]}
      />
      <Image
        style={styles.pngTransparentGrilledMeatWIcon}
        contentFit="cover"
        source={require("../assets/pngtransparentgrilledmeatwithtomatoandsaucechaplikebabpakistanicuisinechickentikkakebabfoodrecipechickenmeatthumbnail-1.png")}
      />
      <Text style={[styles.grilledMeatWith, styles.grilledMeatWithTypo]}>
        grilled meat with tomato and sauce
      </Text>
      <Text style={[styles.r23000, styles.r20000Typo]}>R230.00</Text>
      <Image
        style={[styles.androidLarge13Child2, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>+</Text>
      <View
        style={[styles.androidLarge13Child3, styles.androidChildShadowBox]}
      />
      <Image
        style={[
          styles.b14ab581812da60418443030fa0327Icon,
          styles.r10000Position,
        ]}
        contentFit="cover"
        source={require("../assets/86b14ab581812da60418443030fa0327-1.png")}
      />
      <Text style={styles.capeMalayBollas}>Cape Malay Bollas</Text>
      <Text style={[styles.r10000, styles.r10000Position]}>R100.00</Text>
      <Text style={[styles.addToCart, styles.seeAllTypo]}>Add to Cart</Text>
      <Image
        style={styles.icon3}
        contentFit="cover"
        source={require("../assets/4893746-1.png")}
      />
      <Text style={[styles.totalR25000, styles.r20000Typo]}>
        Total: R250,00
      </Text>
      <Text
        style={[styles.ratingsReviews, styles.r20000Typo]}
      >{`Ratings & Reviews`}</Text>
      <Text style={[styles.seeAll, styles.seeAllTypo]}>SEE ALL</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  androidPosition: {
    height: 2,
    left: 0,
    position: "absolute",
  },
  vegetableCurryTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  seeAllTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    position: "absolute",
  },
  descriptionTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 17,
    width: 17,
    top: 560,
    position: "absolute",
  },
  grilledMeatWithTypo: {
    width: 103,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  r20000Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
  },
  textTypo: {
    width: 8,
    fontSize: FontSize.size_xl,
    top: 552,
    fontWeight: "300",
    color: Color.colorChocolate_100,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  androidChildShadowBox: {
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
  r10000Position: {
    left: 298,
    position: "absolute",
  },
  androidLarge13Child: {
    top: 717,
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
  androidLarge13Item: {
    top: 81,
    width: 358,
  },
  download1Icon: {
    top: 82,
    left: 70,
    borderRadius: Border.br_22xl,
    width: 208,
    height: 163,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 27,
    top: 39,
    width: 26,
    height: 22,
    position: "absolute",
  },
  f303057896Uoqpwealaewrvflh5oIcon: {
    top: 35,
    left: 307,
    width: 32,
    height: 28,
    position: "absolute",
  },
  vegetableCurry: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorBlack,
    left: 32,
    top: 245,
  },
  icon1: {
    top: 197,
    left: 278,
    width: 28,
    height: 27,
    position: "absolute",
  },
  icon2: {
    left: 150,
    width: 82,
    height: 24,
    top: 245,
    position: "absolute",
  },
  ratings: {
    top: 416,
    left: 129,
    color: Color.colorGray_600,
    width: 51,
    height: 15,
    fontFamily: FontFamily.kanit,
    fontSize: FontSize.size_3xs,
  },
  indianCuisinePakistani: {
    color: Color.colorBlack,
  },
  eachServingContains: {
    color: Color.colorChocolate_100,
  },
  indianCuisinePakistaniContainer: {
    top: 354,
    left: 25,
    fontSize: FontSize.size_2xs,
    width: 328,
  },
  description: {
    top: 333,
    left: 34,
  },
  androidLarge13Inner: {
    top: 412,
    width: 360,
  },
  lineIcon: {
    top: 619,
    width: 360,
  },
  recommendedSides: {
    top: 420,
    left: 32,
  },
  rectangleView: {
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
  pngTransparentBrownCookingIcon: {
    left: 30,
    borderRadius: Border.br_6xl,
    width: 104,
    height: 74,
    top: 459,
    position: "absolute",
  },
  ellipseIcon: {
    left: 116,
  },
  pakistaniCuisineGosht: {
    top: 523,
    left: 29,
  },
  r20000: {
    top: 560,
    fontSize: FontSize.size_mini,
    left: 34,
    position: "absolute",
  },
  text: {
    left: 121,
  },
  androidLarge13Child1: {
    left: 153,
    width: 122,
  },
  pngTransparentGrilledMeatWIcon: {
    top: 461,
    left: 164,
    width: 98,
    height: 61,
    position: "absolute",
  },
  grilledMeatWith: {
    top: 521,
    left: 169,
  },
  r23000: {
    left: 165,
    top: 560,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  androidLarge13Child2: {
    left: 249,
  },
  text1: {
    left: 253,
  },
  androidLarge13Child3: {
    left: 290,
    width: 127,
  },
  b14ab581812da60418443030fa0327Icon: {
    top: 465,
    width: 86,
    height: 67,
  },
  capeMalayBollas: {
    top: 534,
    left: 296,
    width: 61,
    height: 45,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  r10000: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    top: 560,
  },
  addToCart: {
    top: 746,
    left: 264,
    color: Color.colorWhite,
    fontFamily: FontFamily.kanit,
    fontSize: FontSize.size_3xs,
  },
  icon3: {
    top: 744,
    left: 245,
    width: 18,
    height: 16,
    position: "absolute",
  },
  totalR25000: {
    top: 742,
    fontSize: FontSize.size_mini,
    left: 26,
    position: "absolute",
  },
  ratingsReviews: {
    top: 634,
    fontSize: FontSize.size_mini,
    left: 26,
    position: "absolute",
  },
  seeAll: {
    top: 642,
    left: 309,
    fontFamily: FontFamily.inter,
    color: Color.colorChocolate_200,
  },
  androidLarge13: {
    height: 800,
    overflow: "hidden",
    width: 360,
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge13;
