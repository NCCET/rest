import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import SpicyNoodlesContainer from "../components/SpicyNoodlesContainer";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

const AndroidLarge3 = ({ navigation }) => {
  // The navigation code should be inside a function or event handler
  const navigateToSpicyNoodles = () => {
    navigation.navigate("SpicyNoodlesContainer");
  };

  const [menu, setMenu] = useState([]);
  const [sides, setSides] = useState([]);
  const fetchMenu = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "menu"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMenu(newData);
      console.log(newData);
    } catch (error) {
      alert("error");
      console.error("Error fetching menu: ", error);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  console.log("setMenu");
  return (
    <View style={styles.androidLarge3}>
      <Image
        style={styles.androidLarge3Child}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Text style={styles.menu}>Our Menu</Text>

      <TouchableOpacity>
        <Text style={[styles.meals, styles.mealsTypo]}>Meals</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={[styles.sides, styles.mealsTypo]}
          onPress={() => navigation.navigate("AndroidLarge10")}
        >
          Sides
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={[styles.snacks, styles.mealsTypo]}>Snacks</Text>
      </TouchableOpacity>

      <Image
        style={[styles.f303057896uoqwealaewrvflh5oIcon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />

      <View style={[styles.vegetableCurry, styles.mixedSaladTypo]}>
      <View style={styles.menuContainer}>
        {menu.map((menuItem) => (
          <TouchableOpacity
            key={menuItem.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("SpicyNoodlesContainer", { data: menuItem })
            }
          >
             <Image style={styles.img} source={menuItem.image} />
            <Text>{menuItem.name}</Text>
            <Text>{menuItem.price}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealsTypo: {
    top: 103,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_15xl,
  },

  mixedSaladTypo: {
    top: 460,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },

  menu: {
    top: 33,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 145,
    position: "absolute",
  },

  meals: {
    left: 38,
  },
  sides: {
    left: 145,
    top: 103,
  },
  snacks: {
    left: 260,
  },
  androidLarge3Item: {
    top: 126,
    left: 16,
    width: 90,
    height: 3,
    position: "absolute",
  },

  androidLarge3Inner: {
    top: 142,
    left: 0,
    width: 362,
    height: 1,
    position: "absolute",
  },
  androidLarge3: {
    borderRadius: Border.br_15xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },

  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    top: -340,
  },
  card: {
    width: 147,
    height: 168,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  img: {
    width: 104,
    height: 93,
    borderRadius: 75,
  },
});

export default AndroidLarge3;
//box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25), border: 1px rgba(0, 0, 0, 0.17) solid

//<img style="width: 104; height: 93; border-radius: 75px
