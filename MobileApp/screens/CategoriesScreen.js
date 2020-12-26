import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Sensors } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

import {HeaderButtons, Item} from  'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const Statuscreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              categoryId: itemData.item.id,
              fieldTitle: (itemData.item.id).slice(-1)
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
    style={styles.screen}
      keyExtractor={(item, index) => item.id}
      data={Sensors}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

Statuscreen.navigationOptions = (navData)=> {
  return {
headerTitle: 'Moisture Status',
  headerLeft:( <HeaderButtons   HeaderButtonComponent={HeaderButton} >
    <Item title="Menu" iconName = 'ios-menu' onPress={()=> {
      navData.navigation.toggleDrawer();
    }} />
  </HeaderButtons>)
  }
  
};

const styles = StyleSheet.create({
  screen: {
   
    marginTop: 70
  }
});

export default Statuscreen;
