import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenSearch from './src/screens/ScreenSearch';
import ShowsResultScreen from './src/screens/ShowsResultScreen';

const navigator = createStackNavigator(
  {
    Search: ScreenSearch,
    Detail: ShowsResultScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
