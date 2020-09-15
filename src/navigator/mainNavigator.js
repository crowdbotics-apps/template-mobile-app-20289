import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList101577Navigator from '../features/ArticleList101577/navigator';
import ArticleList101576Navigator from '../features/ArticleList101576/navigator';
import ArticleList101575Navigator from '../features/ArticleList101575/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList101577: { screen: ArticleList101577Navigator },
ArticleList101576: { screen: ArticleList101576Navigator },
ArticleList101575: { screen: ArticleList101575Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
