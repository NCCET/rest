const Stack = createNativeStackNavigator();

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge3 from "./screens/AndroidLarge3";
import AndroidLarge2 from "./screens/AndroidLarge2";
import SpicyNoodles from "./components/SpicyNoodlesContainer";
import ShoppingCart from "./screens/ShoppingCart";
import SpicyNoodlesContainer from "./components/SpicyNoodlesContainer"
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity,Dimensions } from "react-native";
import Forgotpassword from "./screens/forgotpassword";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import AndroidLarge15Default from "./components/AndroidLarge15Default";
import AndroidLarge10 from "./components/AndroidLarge10";
import AndroidLarge12 from "./components/AndroidLarge12";
import AndroidLarge13 from "./components/AndroidLarge13";
import AndroidLarge14 from "./components/AndroidLarge14";



const App = () => {

  const [isChecked, setChecked] = useState(false);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AndroidLarge1">
        <Stack.Screen
          name="AndroidLarge1"
          component={AndroidLarge1}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AndroidLarge2"
          component={AndroidLarge2}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AndroidLarge3"
          component={AndroidLarge3}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={Forgotpassword}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SpicyNoodles"
          component={SpicyNoodles}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />

<Stack.Screen
          name="SpicyNoodlesContainer"
          component={SpicyNoodlesContainer}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
        <Stack.Screen
          name="AndroidLarge15Default"
          component={AndroidLarge15Default}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
        <Stack.Screen
          name="AndroidLarge10"
          component={AndroidLarge10}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
        <Stack.Screen
          name="AndroidLarge12"
          component={AndroidLarge12}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AndroidLarge13"
          component={AndroidLarge13}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AndroidLarge14"
          component={AndroidLarge14}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
