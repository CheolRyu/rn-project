<<<<<<< HEAD
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenSearch from './src/screens/ScreenSearch';
import ShowsResultScreen from './src/screens/ShowsResultScreen';
=======
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ScreenSearch from "./src/screens/ScreenSearch";
import ResultShowScreen from "./src/screens/ResultShowScreen";
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668

const navigator = createStackNavigator(
  {
    Search: ScreenSearch,
<<<<<<< HEAD
    Detail: ShowsResultScreen,
=======
    ResultsShowScreen: ResultShowScreen,
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
<<<<<<< HEAD
      title: 'Business Search',
=======
      title: "BusinessSearch",
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
    },
  }
);

export default createAppContainer(navigator);
