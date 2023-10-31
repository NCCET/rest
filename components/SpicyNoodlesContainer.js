import * as React from "react";
import { StyleSheet, View, Text,Dimensions, ScrollView } from "react-native";
import { Image } from "expo-image";
import Basedonthegivencontext from "./Basedonthegivencontext";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";



const SpicyNoodlesContainer = ({route,navigation}) => {
  const {data} = route.params; 
  console.log(data);
  const navigateToSpicyNoodles = () => {
    navigation.navigate("SpicyNoodlesContainer");
  };



  return (
    <View style={styles.androidLarge3default}>
     
      <View style={styles.androidLarge3defaultChild} />
      <View style={styles.androidLarge3defaultItem} />
      <Text style={styles.pakistaniCuisineGosht}>
        {data.name1}
      </Text>
      <Image
        style={styles.androidLarge3defaultInner}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={styles.download1Icon}
        contentFit="cover"
        source={data.image}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/833472-1.png")}
      />
      <Text style={[styles.vegetableCurry, styles.icon1Position]}>
        {data.name}
      </Text>
      <Image
        style={[styles.icon1, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/10801392-1.png")}
      />

      <Text style={styles.ratings}>{data.Text}</Text>
      <Text style={[styles.r16500, styles.r16500Typo]}>{data.price}</Text>
      <Basedonthegivencontext propTop={299} propLeft={242} />
      <Text style={[styles.description, styles.descriptionTypo]}>
       {data.Description2}
      </Text>
      <Text style={styles.indianCuisinePakistaniContainer}>
        <Text style={styles.indianCuisinePakistani}>
          {data.Description}

        </Text>
        <Text style={styles.eachServingContains}>
          {data.Description1}
        </Text>
      </Text>
      <Text style={[styles.recommendedSides, styles.descriptionTypo]}>
        Recommended Sides
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.androidLarge3defaultChild1, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Image
        style={styles.pngTransparentBrownCookingIcon}
        contentFit="cover"
        source={data.image1}
      />
      <Image
        style={[styles.pngTransparentPeruvianCuisiIcon, styles.pngIconPosition]}
        contentFit="cover"
        source={data.image2}
      />
      <View
        style={[
          styles.androidLarge3defaultChild2,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Image
        style={[styles.pngTransparentVegetarianCuiIcon, styles.pngIconPosition]}
        contentFit="cover"
        source={data.image3}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.r20000, styles.r16500Typo]}>{data.price}</Text>
      <Text style={[styles.r17000, styles.r16500Typo]}>{data.price2}</Text>
      <Text style={[styles.r18595, styles.r16500Typo]}>{data.price3}</Text>
      <Image
        style={[styles.androidLarge3defaultChild3, styles.icon2Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.text1, styles.text1Clr]}>-</Text>
      <Text
        style={[styles.indianCuisinePakistani1, styles.textTypo]}
      >{data.name3}</Text>
      <Image
        style={styles.androidLarge3defaultChild4}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      {/* <Text
        style={[styles.ratingsReviews, styles.r16500Typo]}
      >Ratings & Reviews</Text>
      <Text style={styles.seeAll}>SEEALL</Text>
      <Text style={[styles.totalR25000, styles.r16500Typo]}>
        Total:R25000
      </Text> */}


      <TouchableOpacity    />
         <Text style={styles.cart}
         onPress={() => navigation.navigate("ShoppingCart", {items:data, })}
         >AddtoCart</Text>
      
      
     
      <Image
        style={[styles.icon2, styles.icon2Layout]}
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
  lineIconPosition: {
    height: 2,
    left: 0,
    position: "absolute",
  },
  icon1Position: {
    top: 245,
    position: "absolute",
  },
  r16500Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanitRegular,
    position: "absolute",
  },
  descriptionTypo: {
    fontFamily: FontFamily.kanitSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
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
    fontFamily: FontFamily.kanitLight,
    fontWeight: "300",
  },
  icon2Layout: {
    width: 18,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  androidLarge3defaultChild: {
    top: 716,
    borderRadius: Border.br_4xs,
    borderColor: Color.colorGray_500,
    height: 84,
    width: 360,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
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
    fontFamily: FontFamily.kanitRegular,
    fontSize: FontSize.size_3xs,
    left: 26,
    position: "absolute",
  },
  androidLarge3defaultInner: {
    top: 39,
    left: 27,
    width: 26,
    height: 22,
    position: "absolute",
  },
  lineIcon: {
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
    top: 197,
    left: 278,
    width: 28,
    height: 27,
    position: "absolute",
  },
  vegetableCurry: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.kanitMedium,
    left: 32,
    textAlign: "center",
    color: Color.colorBlack,
  },
  icon1: {
    left: 172,
    width: 82,
    height: 24,
  },
  ratings: {
    top: 247,
    left: 230,
    color: Color.colorGray_600,
    width: 105,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.kanitRegular,
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
    fontFamily: FontFamily.kanitRegular,
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
  androidLarge3defaultChild1: {
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
  androidLarge3defaultChild2: {
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
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kanitLight,
    fontWeight: "300",
    color: Color.colorChocolate_100,
    textAlign: "center",
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
  androidLarge3defaultChild3: {
    left: 249,
    height: 18,
    top: 560,
  },
  text1: {
    top: 552,
    left: 253,
    fontFamily: FontFamily.kanitLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
  },
  indianCuisinePakistani1: {
    top: 529,
    left: 294,
    width: 107,
    height: 45,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  androidLarge3defaultChild4: {
    top: 620,
    height: 1,
    width: 360,
    left: 0,
    position: "absolute",
  },
  ratingsReviews: {
    top: 634,
    left: 26,
  },
  seeAll: {
    top: 641,
    left: 308,
    fontFamily: FontFamily.interRegular,
    color: "#C75F00",
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
    fontFamily: FontFamily.kanitRegular,
    fontSize: FontSize.size_3xs,
  },
  icon2: {
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
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },

  cart: {
    marginTop: 600,
    backgroundColor: 'orange',
    width: 100,
    height: 40,
    color: '#fff',
    paddingTop: 10,
    textAlign: 'center',
    borderRadius: 20,

  },
});

export default SpicyNoodlesContainer;