import { Platform, Text } from 'react-native';
import React from 'react';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SensorScreen from '../screens/SensorScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import HomeScreen from '../screens/HomeScreen';
import MoistureDetail from '../screens/MoistureDetail';
import Colors from '../constants/Colors';
import MotorScreen from '../screens/MotorScreen';
import SensorGraph from '../screens/SensorGraph';

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


const MoistNavigator = createStackNavigator(
  {
    Categories: SensorScreen,
    
     GraphStats: SensorGraph,

    MoistDetail: MoistureDetail
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const MotorNavigator = createStackNavigator({
  Favourites: MotorScreen,
  MoistDetail: MoistureDetail
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
   stats: {screen:MoistNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <AntDesign name="barschart" size={25} color={tabInfo.tintColor} /> 
    },
    tabBarColor: Colors.primaryColor
  }},
  Motor: { screen: MotorNavigator, navigationOptions: {
     tabBarIcon: (tabInfo) => {
      return <MaterialCommunityIcons name="water-pump" size={25} color={tabInfo.tintColor} />
    },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: <Text style={{fontFamily: 'open-sans-bold'}}>Motor Control</Text>

  }}

}


const SensorMainNavigator = createMaterialBottomTabNavigator(tabScreenConfig,{
  activeTintColor: 'white',
  shifting: true
})
// : createBottomTabNavigator(tabScreenConfig,
//  {
//   tabBarOptions: {
//     activeTintColor: Colors.accentColor
//   }
// });

// const FilterNavigator = createStackNavigator({
//   Filters: FiltersScreen
// },{
//   // navigationOptions: {
//   //   drawerLabel: 'Filters'
//   // },
//   defaultNavigationOptions: defaultStackNavOptions
// })

// const MainNavigator = createDrawerNavigator({
//       MealsFavs: {
//         screen: SensorMainNavigator,
//         navigationOptions :{
//           drawerLabel: 'Meals'
//         }
//       },
//       Filters:  FilterNavigator
// }, {
//   contentOptions: {
//     activeTintColor: Colors.accentColor,
//     labelStyle: {
//       fontFamily: 'open-sans-bold'
//     }
//   }
// })



export default createAppContainer(SensorMainNavigator);
