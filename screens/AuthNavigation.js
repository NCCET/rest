import { createStackNavigator } from 'react-navigation-stack'
import AndroidLarge1 from './AndroidLarge1';
import AndroidLarge1 from './AndroidLarge2';
import ForgotPassword from '../screens/forgotpassword';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: AndroidLarge1 },
    Signup: { screen: AndroidLarge1 },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation