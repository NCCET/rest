import * as React from "react";
import { StyleSheet, View,Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import MenuContainer from "..//components/Basedonthegivencontext"
import { Border, Color } from "../GlobalStyles";

const AndroidLarge10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge10}>
      <MenuContainer
        priceText="R80.00"
        dishName="Ultimate Nachos"
        itemPrice="R35.00"
        foodItemName="Fresh fruit"
        dishImageUrl={`Mac & Cheese`}
        menuItemPrice="R60.00"
        menuPrice="R75.00"
        menuItems="Mcalister’s Club"
        dishDescription={`Tomato & Cucumber`}
        priceLabel="R55.00"
        saladImageUrl="Potato Salad"
        showLineView={false}
        showImages2Icon={false}
        showImages5Icon={false}
        showImages3Icon={false}
        showDownload1Icon={false}
        showImages4Icon={false}
        showImages6Icon={false}
        groupViewTop={0}
        groupViewLeft={0}
        iconLeft={37}
        images2IconLeft={14}
        chickenPastaSaladLeft={38}
        images5IconLeft={38}
        images3IconLeft={220}
        framePressableLeft={230}
        vegetableCurryLeft={38}
        iconLeft1={20}
        iconLeft2={198}
        images4IconLeft={239}
        images6IconLeft={221}
        onProperty1DefaultPress={() => navigation.navigate("GroupComponent")}
        onSidesPress={() => navigation.navigate("AndroidLarge10")}
        onFramePressablePress={() => navigation.navigate("AndroidLarge12")}
        onFramePressablePress1={() => navigation.navigate("AndroidLarge8")}
        onFramePressablePress3={() => navigation.navigate("AndroidLarge14")}
      ></MenuContainer>
      <View style={styles.androidLarge10Child} />
      <Image
        style={[styles.shareablesUltimateNachosThuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/shareables-ultimate-nachos-thumbnail-664x440-1.png")}
      />
      <Image
        style={[styles.sidesmaccheesethumbnail664x440Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sidesmaccheesethumbnail664x440-1.png")}
      />
      <Image
        style={[
          styles.sandwichesMcaClubThumbnail,
          styles.sandwichesMcaClubThumbnailLayout,
        ]}
        contentFit="cover"
        source={require("../assets/sandwiches-mca-club-thumbnail-664x440-1.png")}
      />
      <Image
        style={[styles.sidestomatocucumberthumbnail66Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sidestomatocucumberthumbnail664x440-1.png")}
      />
      <Image
        style={[
          styles.sidesFruitCupThumbnail664x,
          styles.sandwichesMcaClubThumbnailLayout,
        ]}
        contentFit="cover"
        source={require("../assets/sides-fruit-cup-thumbnail-664x440-1.png")}
      />
      <Image
        style={[styles.sidesPotatoSaladThumbnail6, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sides-potato-salad-thumbnail-664x440-1.png")}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    borderRadius: Border.br_15xl,
    position: "absolute",
  },
  sandwichesMcaClubThumbnailLayout: {
    width: 113,
    left: 42,
    borderRadius: Border.br_15xl,
    position: "absolute",
  },
  androidLarge10Child: {
    top: 127,
    left: 140,
    borderStyle: "solid",
    borderColor: Color.colorChocolate_100,
    borderTopWidth: 3,
    width: 81,
    height: 3,
    position: "absolute",
  },
  shareablesUltimateNachosThuIcon: {
    top: 187,
    left: 40,
    width: 129,
    height: 83,
  },
  sidesmaccheesethumbnail664x440Icon: {
    top: 185,
    left: 205,
    width: 121,
    height: 81,
  },
  sandwichesMcaClubThumbnail: {
    top: 357,
    height: 81,
  },
  sidestomatocucumberthumbnail66Icon: {
    top: 354,
    left: 215,
    width: 97,
    height: 84,
  },
  sidesFruitCupThumbnail664x: {
    top: 545,
    height: 85,
  },
  sidesPotatoSaladThumbnail6: {
    top: 543,
    left: 220,
    width: 103,
    height: 87,
  },
  androidLarge10: {
    backgroundColor: Color.colorWhite,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge10;
