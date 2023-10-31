import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Basedonthegivencontext from "./Basedonthegivencontext";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge3Default = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3default}>
      <View style={styles.androidLarge3defaultChild} />
      <View style={styles.androidLarge3defaultItem} />
      <Text style={[styles.pakistaniCuisineGosht, styles.pakistaniTypo]}>
        Pakistani cuisine Gosht Indian cuisine
      </Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.androidLarge3defaultInner, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={styles.download1Icon}
        contentFit="cover"
        source={require("../assets/download-11.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <Text style={[styles.vegetableCurry, styles.icon2Position]}>
        Vegetable Curry
      </Text>
      <Image
        style={[styles.icon2, styles.icon2Position]}
        contentFit="cover"
        source={require("../assets/10801392-11.png")}
      />
      <Text style={[styles.ratings, styles.pakistaniTypo]}>(59 ratings)</Text>
      <Text style={[styles.r16500, styles.r16500Typo]}>R165.00</Text>
      <Basedonthegivencontext propTop={299} propLeft={242} />
      <Text style={[styles.description, styles.descriptionTypo]}>
        Description
      </Text>
      <Text
        style={[styles.indianCuisinePakistaniContainer, styles.pakistaniTypo]}
      >
        <Text style={styles.indianCuisinePakistani}>
          Indian cuisine Pakistani cuisine Chicken tikka Vegetarian cuisine
          Kebab, chicken curry.
        </Text>
        <Text style={styles.eachServingContains}>
          (Each serving contains 248 calories)
        </Text>
      </Text>
      <Text style={[styles.recommendedSides, styles.descriptionTypo]}>
        Recommended sides
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Image
        style={styles.pngTransparentBrownCookingIcon}
        contentFit="cover"
        source={require("../assets/pngtransparentbrowncookingpotchickenkarahikormabiryanikebabbiryanifoodrecipechickenmeatthumbnail-1.png")}
      />
      <Image
        style={[styles.pngTransparentPeruvianCuisiIcon, styles.pngIconPosition]}
        contentFit="cover"
        source={require("../assets/pngtransparentperuviancuisinecevichelomosaltadoarrozconmariscoscomidafoodrecipecuisinethumbnail-1.png")}
      />
      <View
        style={[
          styles.androidLarge3defaultChild1,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Image
        style={[styles.pngTransparentVegetarianCuiIcon, styles.pngIconPosition]}
        contentFit="cover"
        source={require("../assets/pngtransparentvegetariancuisinebaklavakanafehasiancuisinedessertsweettoothleafvegetablefoodrecipethumbnail-1.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.r20000, styles.r16500Typo]}>R200.00</Text>
      <Text style={[styles.r17000, styles.r16500Typo]}>R170.00</Text>
      <Text style={[styles.r18595, styles.r16500Typo]}>R185.95</Text>
      <Image
        style={[styles.androidLarge3defaultChild2, styles.icon3Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.text1, styles.text1Typo]}>-</Text>
      <Text
        style={[styles.indianCuisinePakistani1, styles.pakistaniTypo]}
      >{`Indian cuisine Pakistani cuisine Chicken tikka Vegetarian cuisine `}</Text>
      <Image
        style={styles.androidLarge3defaultChild3}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      <Text
        style={[styles.ratingsReviews, styles.r16500Typo]}
      >{`Ratings & Reviews`}</Text>
      <Text style={styles.seeAll}>SEE ALL</Text>
      <Text style={[styles.totalR25000, styles.r16500Typo]}>
        Total: R250,00
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  pakistaniTypo: {
    fontFamily: FontFamily.kanit,
    textAlign: "center",
  },
  lineIconPosition: {
    height: 2,
    left: 0,
    position: "absolute",
  },
  icon2Position: {
    top: 245,
    position: "absolute",
  },
  r16500Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
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
  rectangleViewShadowBox: {
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
  pngIconPosition: {
    top: 461,
    height: 74,
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
  androidLarge3defaultChild: {
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
  androidLarge3defaultItem: {
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
  pakistaniCuisineGosht: {
    top: 532,
    width: 103,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    left: 26,
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
  androidLarge3defaultInner: {
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
  icon1: {
    top: 197,
    left: 278,
    width: 28,
    height: 27,
    position: "absolute",
  },
  vegetableCurry: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    left: 32,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
  },
  icon2: {
    left: 150,
    width: 82,
    height: 24,
  },
  ratings: {
    top: 250,
    left: 224,
    color: Color.colorGray_600,
    width: 51,
    height: 15,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  r16500: {
    top: 269,
    left: 32,
  },
  description: {
    top: 333,
    left: 34,
  },
  indianCuisinePakistani: {
    color: Color.colorBlack,
  },
  eachServingContains: {
    color: Color.colorChocolate_100,
  },
  indianCuisinePakistaniContainer: {
    top: 354,
    left: 28,
    fontSize: FontSize.size_2xs,
    width: 328,
    textAlign: "center",
    position: "absolute",
  },
  recommendedSides: {
    top: 420,
    left: 32,
  },
  rectangleView: {
    left: 153,
    width: 122,
    height: 123,
  },
  lineIcon: {
    top: 412,
    width: 360,
  },
  pngTransparentBrownCookingIcon: {
    left: 30,
    borderRadius: Border.br_6xl,
    height: 74,
    width: 104,
    top: 459,
    position: "absolute",
  },
  pngTransparentPeruvianCuisiIcon: {
    left: 164,
    borderRadius: 13,
    width: 104,
    top: 461,
  },
  androidLarge3defaultChild1: {
    left: 290,
    width: 127,
    height: 138,
  },
  pngTransparentVegetarianCuiIcon: {
    left: 296,
    width: 102,
  },
  ellipseIcon: {
    left: 116,
    width: 17,
    height: 17,
    top: 560,
    position: "absolute",
  },
  text: {
    top: 551,
    left: 120,
    width: 8,
    fontWeight: "300",
    color: Color.colorChocolate_100,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  r20000: {
    top: 560,
    left: 34,
  },
  r17000: {
    left: 165,
    top: 560,
  },
  r18595: {
    top: 571,
    left: 298,
  },
  androidLarge3defaultChild2: {
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
  indianCuisinePakistani1: {
    top: 529,
    left: 294,
    width: 107,
    height: 45,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  androidLarge3defaultChild3: {
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
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
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
  androidLarge3default: {
    borderRadius: Border.br_15xl,
    height: 800,
    overflow: "hidden",
    width: 360,
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge3Default;
