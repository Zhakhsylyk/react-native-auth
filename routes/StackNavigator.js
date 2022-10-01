import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../pages/Login";
import Main from "../pages/Main";

const screens = {
  Login: {
    screen: Login,
  },
  Main: {
    screen: Main,
  },
};

const StackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: { headerShown: false },
});

export default createAppContainer(StackNavigator);
