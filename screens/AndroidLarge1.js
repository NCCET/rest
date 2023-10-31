import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground,Pressable,Button,TextInput, TouchableOpacity } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"; 
import  { useState } from 'react';
import forgotPassword from '../screens/forgotpassword';

const AndroidLarge1 = ({navigation}) => {

  // State variable to hold the password 
  
  
  // State variable to track password visibility 
  const [showPassword, setShowPassword] = useState(false); 

  // Function to toggle the password visibility state 
  const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
  }; 
  
  
                <View style={[styles.frame2, styles.frameLayout1]}>
                  <TextInput 
  
                    // Set secureTextEntry prop to hide  
                    //password when showPassword is false 
                    secureTextEntry={!showPassword} 
                    value={password} 
                    onChangeText={setPassword} 
                    style={styles.input1} 
                    placeholder="Enter Password"
                    placeholderTextColor="#aaa"
                /> 
                <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleShowPassword} 
                />
                </View>
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const register = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Successful");
        navigation.navigate('AndroidLarge3');
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

   const [text, onChangeText] = React.useState('');
   const [number, onChangeNumber] = React.useState('');


  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  

  return (
    
    <View style={styles.androidLarge1}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={[styles.frame, styles.frameLayout3]}>
        <Text style={[styles.eMailAddress, styles.text1Typo]}>
          E-mail address
        </Text>
      </View>

      



      <View style={[styles.frame1, styles.frameLayout3]}>
        <Text style={[styles.eMailAddress, styles.text1Typo]}>
          Enter password
        </Text>
      </View>


      <View style={[styles.frame2, styles.frameLayout1]}>
        <View style={[styles.frameChild, styles.frameShadowBox]} />
      </View>

      <View style={[styles.frame2, styles.frameLayout1]}>
      <TextInput
        style={[styles.frameChild, styles.frameShadowBox]}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter e-mail"
      />
      </View>
      <View style={[styles.frame3, styles.frameLayout1]}>
      <TextInput
        style={[styles.frameItem, styles.frameShadowBox]}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter password"
        keyboardType="numeric"
      />  
      </View>

      


      <View style={[styles.frame4, styles.frameLayout2]}>

      <TouchableOpacity onPress={() => navigation.navigate('forgotpassword') }>
        <Text style={[styles.forgotPassword, styles.text1Typo]}>
          Forgot password?
        </Text>
        </TouchableOpacity>
        
      </View>


      <View style={[styles.frame5, styles.frameLayout3]}>
        <Text style={[styles.signInUsing, styles.text1Typo]}>
          Sign in using
        </Text>
      </View>

      
      <View style={[styles.frame6, styles.frameLayout3]}>
        <Text style={[styles.dontHaveAnContainer, styles.text1Typo]}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.signIn}>Sign in</Text>
        </Text>
      </View>
      <ImageBackground
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      >
        <Text style={[styles.text1, styles.text1Typo]} />
      </ImageBackground>
      <View style={[styles.frame7, styles.frameLayout1]}>
        <View style={[styles.frame8, styles.frameLayout1]}>
          <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AndroidLarge2') }>
            <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
          </TouchableOpacity >
        </View>
      </View>
      <View style={[styles.frame9, styles.frameLayout]}>
        <View style={[styles.frame10, styles.frameLayout]}>
          <View style={styles.frameInner} />


          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />

        
            
          <Text style={[styles.rememberMe, styles.orTypo]}>Remember me</Text>
        </View>
      </View>


    <View style={[styles.frame11, styles.frameLayout1]}>
    <View style={[styles.frame12, styles.framePosition]}>   
        <Button  style={[styles.login, styles.orTypo]}
        alert='Successful'
            onPress={register}
            title="Login"
            
          />
      </View>
    </View>


      <View style={[styles.frame13, styles.frameLayout3]}>
        <View style={[styles.frame14, styles.frameLayout3]}>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.frameChild1, styles.lineViewLayout]} />
          <Text style={[styles.or, styles.orTypo]}>OR</Text>
        </View>
      </View>
      <View style={styles.frame15}>
        <View style={[styles.frame16, styles.framePosition]}>
          <Image
            style={[styles.icons8Google481, styles.download1IconLayout]}
            contentFit="cover"
            source={require("../assets/icons8google48-1.png")}
          />
          <Image
            style={styles.icons8Facebook481}
            contentFit="cover"
            source={require("../assets/icons8facebook48-1.png")}
          />
          <Image
            style={[styles.download1Icon, styles.download1IconLayout]}
            contentFit="cover"
            source={require("../assets/download-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  frameLayout3: {
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  input1:{
    flex:1,
    color:'#333',
    paddingVertical:10,
    paddingRight:10,
    fontSize:16,
  },

icon:{
  marginLeft:10,
},

  frameLayout1: {
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },

  frameShadowBox: {
    width: 317,
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
    height: 29,
    top: 0,
    position: "absolute",
  },

  frameLayout2: {
    width: 373,
    left: -37,
  },

  signTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkorange,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: 0,
    position: "absolute",
  },

  frameLayout: {
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },

  orTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },

  framePosition: {
    width: 194,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },

  lineViewLayout: {
    width: 117,
    borderTopWidth: 1,
    top: 10,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 1,
    position: "absolute",
  },

  download1IconLayout: {
    width: 48,
    position: "absolute",
  },

  frameIcon: {
    top: 282,
    width: 189,
    height: 1,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },

  eMailAddress: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    left: 58,
    top: 0,
  },

  frame: {
    top: 324,
    width: 171,
    left: -37,
  },

  frame1: {
    top: 417,
    width: 176,
    left: -37,
  },

  frameChild: {
    left: 56,
  },

  frame2: {
    top: 349,
    width: 373,
    left: -37,
  },

  frameItem: {
    left: 58,
  },

  frame3: {
    top: 442,
    width: 375,
    left: -37,
  },

  forgotPassword: {
    left: 263,
    color: "rgba(0, 0, 0, 0.53)",
    fontSize: FontSize.size_smi,
    top: 0,
  },

  frame4: {
    top: 478,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },

  signInUsing: {
    left: 168,
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
    top: 0,
  },

  frame5: {
    top: 672,
    width: 264,
    left: -37,
  },

  dontHaveAn: {
    color: Color.colorGray_200,
  },

  signIn: {
    color: Color.colorDarkorange,
  },

  dontHaveAnContainer: {
    left: 110,
    fontSize: FontSize.size_base,
    top: 0,
  },

  frame6: {
    top: 771,
    width: 338,
    left: -37,
  },

  text1: {
    top: 53,
    fontSize: 12,
    color: Color.colorBlack,
    left: 58,
  },

  frameIcon1: {
    top: -21,
    borderRadius: 209,
    width: 220,
    height: 229,
    left: -37,
    position: "absolute",
    overflow: "hidden",
  },

  signIn1: {
    left: 0,
  },

  signUp: {
    left: 167,
  },

  frame8: {
    left: 85,
    width: 256,
    top: 0,
  },

  frame7: {
    top: 247,
    width: 341,
    left: -37,
  },

  frameInner: {
    borderWidth: 4,
    width: 32,
    borderColor: Color.colorBlack,
    height: 28,
    borderStyle: "solid",
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },

  vectorIcon: {
    left: 9,
    width: 16,
    height: 18,
    top: 5,
    position: "absolute",
  },

  rememberMe: {
    top: 6,
    left: 42,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
  },

  frame10: {
    width: 133,
    left: 58,
    top: 0,
  },

  frame9: {
    top: 500,
    width: 191,
    left: -37,
  },

  login: {
    left: 74,
    color: Color.colorWhite,
    width: 51,
    top: 5,
    fontSize: FontSize.size_base,
  },

  frame12: {
    left: 117,
    backgroundColor: Color.colorDarkorange,
    borderColor: Color.colorDarkorange,
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
    width: 194,
    height: 29,
  },

  frame11: {
    top: 563,
    width: 311,
    left: -37,
  },

  lineView: {
    left: 0,
  },

  frameChild1: {
    left: 199,
  },

  or: {
    left: 145,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: 0,
  },

  frame14: {
    width: 315,
    left: 56,
    top: 0,
  },

  frame13: {
    top: 631,
    width: 371,
    left: -37,
  },

  icons8Google481: {
    height: 48,
    top: 0,
    left: 0,
  },

  icons8Facebook481: {
    left: 70,
    width: 53,
    height: 48,
    top: 0,
    position: "absolute",
  },

  download1Icon: {
    top: 8,
    left: 146,
    height: 40,
  },

  frame16: {
    left: 127,
    height: 48,
  },

  frame15: {
    top: 707,
    width: 321,
    height: 48,
    left: -37,
    position: "absolute",
    overflow: "hidden",
  },

  androidLarge1: {
    borderRadius: Border.br_15xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },

});

export default AndroidLarge1;
