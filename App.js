import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import MoreLessColor from "./src/screens/MoreLessColor";
import InputScreen from "./src/screens/InputScreen";
import BoxModelScreen from "./src/screens/BoxModelScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    MoreLessColor: MoreLessColor,
    Input: InputScreen,
    Box: BoxModelScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);


