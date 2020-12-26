import { Platform, Text } from 'react-native';
import React from 'react';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import HomeScreen from '../screens/HomeScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const defaultStackNavOptions = {
      headerStyle: {
        backgroundColor:  Colors.primaryColor 
      },
      headerTitleStyle:{
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor:'white',
      headerTitle: 'A Screen'
    };


const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const FavNavigator = createStackNavigator({
  Favourites: FavoritesScreen,
  MealDetail: MealDetailScreen
},{
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  })




const tabScreenConfig = {
  Home: {screen:HomeScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <AntDesign name="home" size={25} color={tabInfo.tintColor} /> 
    },
    tabBarColor: Colors.primaryColor
  }},
   stats: {screen:MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <AntDesign name="barschart" size={25} color={tabInfo.tintColor} /> 
    },
    tabBarColor: Colors.primaryColor
  }},
  Motor: { screen: FavNavigator, navigationOptions: {
     tabBarIcon: (tabInfo) => {
      return <MaterialCommunityIcons name="water-pump" size={25} color={tabInfo.tintColor} />
    },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: <Text style={{fontFamily: 'open-sans-bold'}}>Motor Control</Text>

  }}

}


const MealsFavTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig,{
  activeTintColor: 'white',
  shifting: true
})
// : createBottomTabNavigator(tabScreenConfig,
//  {
//   tabBarOptions: {
//     activeTintColor: Colors.accentColor
//   }
// });

const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen
},{
  // navigationOptions: {
  //   drawerLabel: 'Filters'
  // },
  defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
      MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions :{
          drawerLabel: 'Meals'
        }
      },
      Filters:  FilterNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})



export default createAppContainer(MainNavigator);
