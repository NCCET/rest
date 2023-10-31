import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuContainer from "./MenuContainer";
import { Border, Color } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <MenuContainer
        priceText="R150.00"
        dishName="Spicy Noodles"
        itemPrice="R140.00"
        foodItemName="Chicken Pasta Salad"
        dishImageUrl="Shrimp Pasta"
        menuItemPrice="R180.00"
        menuPrice="R165.00"
        menuItems="Vegetable Curry"
        dishDescription="Mixed Salad"
        priceLabel="R145.00"
        saladImageUrl="Beef Salad"
        showLineView
        showImages2Icon
        showImages5Icon
        showImages3Icon
        showDownload1Icon
        showImages4Icon
        showImages6Icon
        onProperty1DefaultPress={() => navigation.navigate("GroupComponent")}
        onSidesPress={() => navigation.navigate("AndroidLarge10")}
        onFramePressablePress={() => navigation.navigate("AndroidLarge12")}
        onFramePressablePress1={() => navigation.navigate("AndroidLarge8")}
        onFramePressablePress2={() =>
          navigation.navigate("AndroidLarge3Default")
        }
        onFramePressablePress3={() => navigation.navigate("AndroidLarge14")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge2: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 400,
    height: 1660,
    overflow: "hidden",
  },
});

export default AndroidLarge2;
