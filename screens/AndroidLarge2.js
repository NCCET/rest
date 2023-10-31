import * as React from "react";
import { Image } from "expo-image";
import  { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import {collection, getDocs} from "firebase/firestore";

const AndroidLarge2 = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [text, onChangeText] = useState('');
   const [number, onChangeNumber] = useState('');
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Successful");
        navigation.navigate('AndroidLarge1');
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };


  return (
    
    <View style={styles.androidLarge2}>
      <Image
        style={styles.images2Icon}
        contentFit="cover"
        source={require("../assets/images-2.png")}
      />
      <Text style={[styles.createAccount, styles.rememberMeFlexBox]}>
        Create Account
      </Text>

      <Text style={[styles.fullName, styles.passwordTypo]}>{`Full Name `}</Text>

      <View style={[styles.androidLarge2Child, styles.androidShadowBox]} />
      <View style={[styles.androidLarge2Item, styles.androidShadowBox]} />
      <View style={[styles.androidLarge2Inner, styles.androidShadowBox]} />
      <View style={[styles.rectangleView, styles.androidShadowBox]} />

      <Text style={[styles.eMailAddress, styles.passwordTypo]}>
        E-mail address
      </Text>

      <Text style={[styles.enterPassword, styles.passwordTypo]}>
        Enter password
      </Text>

      <Text style={[styles.confirmPassword, styles.passwordTypo]}>
        Confirm password
      </Text>

      <View style={styles.androidLarge2Child1} />

      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.rememberMe, styles.orTypo1]}>Remember me</Text>


      <View >
      <TextInput
        style={[styles.androidLarge2Child, styles.androidShadowBox]}
        onChangeText={onChangeText}
        value={text}
        placeholder="User Name "
      />
      </View>

      
        <View >
              <TextInput
                style={[styles.androidLarge2Item, styles.androidShadowBox]}
                onChangeText={setEmail}
                value={email}
                placeholder="Enter E-mail"
              />
              </View>
      


      <View >
      <TextInput
        style={[styles.androidLarge2Inner, styles.androidShadowBox]}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
        keyboardType="numeric"
      />  
      </View>

      <View >
      <TextInput
        style={[styles.rectangleView, styles.androidShadowBox]}
        onChangeText={setPassword}
        value={password}
        placeholder="Confirm Password"
        keyboardType="numeric"
      />  
      </View>

      


     





      <View style={[styles.frame11, styles.frameLayout1]}>
    <View style={[styles.frame12, styles.framePosition]}>   
        <Button  style={[styles.login, styles.orTypo]}
            onPress={register}
            title="Login"
          />
      </View>
    </View>
      

      <View style={styles.androidLarge2Child2} />
      <Text style={[styles.login, styles.orTypo]}>Login</Text>


      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.androidLarge2Child3, styles.lineViewLayout]} />
      <Text style={[styles.or, styles.orTypo]}>OR</Text>

      <Image
        style={[styles.icons8Google481, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8google48-11.png")}
      />

      <Image
        style={[styles.icons8Facebook481, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8facebook48-11.png")}
      />

      <Image
        style={styles.download1Icon}
        contentFit="cover"
        source={require("../assets/download-11.png")}
      />

      <Text style={[styles.signInUsing, styles.orTypo]}>Sign in using</Text>
      <Text style={[styles.dontHaveAnContainer, styles.orTypo]}>
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <Text style={styles.signIn}>Sign in</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rememberMeFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_xl,
    left: 34,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidShadowBox: {
    height: 29,
    width: 309,
    borderColor: Color.colorGray_100,
    backgroundColor: Color.colorWhitesmoke,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    left: 34,
    position: "absolute",
  },
  orTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "700",
  },
  orTypo: {
    height: 16,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 99,
    borderTopWidth: 1,
    top: 658,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  icons8Position: {
    height: 41,
    top: 714,
    position: "absolute",
  },
  images2Icon: {
    top: 0,
    left: 0,
    borderRadius: 99,
    width: 254,
    height: 199,
    position: "absolute",
  },
  createAccount: {
    top: 189,
    left: 83,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 187,
  },
  fullName: {
    top: 246,
    fontWeight: "700",
    fontFamily: FontFamily.interMedium,
  },
  androidLarge2Child: {
    top: 276,
  },
  androidLarge2Item: {
    top: 354,
  },
  androidLarge2Inner: {
    top: 432,
  },
  rectangleView: {
    top: 510,
  },
  eMailAddress: {
    top: 324,
    fontFamily: FontFamily.interRegular,
  },
  enterPassword: {
    top: 402,
    fontFamily: FontFamily.interRegular,
  },
  confirmPassword: {
    top: 480,
    fontFamily: FontFamily.interRegular,
  },
  androidLarge2Child1: {
    top: 550,
    borderWidth: 4,
    width: 32,
    height: 28,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 34,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    top: 556,
    left: 43,
    width: 16,
    height: 18,
    position: "absolute",
  },
  rememberMe: {
    top: 557,
    left: 72,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge2Child2: {
    top: 592,
    left: 86,
    backgroundColor: Color.colorDarkorange,
    borderColor: Color.colorDarkorange,
    width: 164,
    height: 25,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  login: {
    top: 596,
    color: Color.colorWhite,
    width: 44,
    left: 148,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "700",
  },
  lineView: {
    left: 34,
    height: 1,
    width: 99,
    borderTopWidth: 1,
    top: 658,
  },
  androidLarge2Child3: {
    left: 203,
  },
  or: {
    top: 650,
    left: 157,
    width: 35,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "700",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  icons8Google481: {
    left: 94,
    width: 47,
  },
  icons8Facebook481: {
    width: 50,
    left: 148,
  },
  download1Icon: {
    left: 211,
    width: 41,
    height: 34,
    top: 714,
    position: "absolute",
  },
  signInUsing: {
    top: 685,
    left: 129,
    width: 144,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
  },
  dontHaveAn: {
    color: Color.colorGray_200,
  },
  signIn: {
    color: Color.colorDarkorange,
  },
  dontHaveAnContainer: {
    top: 769,
    left: 59,
    width: 242,
    fontFamily: FontFamily.interRegular,
  },
  
  androidLarge2: {
    borderRadius: Border.br_15xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge2;
