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



const Statuscreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MoistDetail',
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
headerTitle: 'Moisture Status'
 
  }
  
};

const styles = StyleSheet.create({
  screen: {
    backgroundImage: "url('https://i.pinimg.com/originals/46/da/c9/46dac9351feab803ccd7b4b57f17dca5.jpg')",
    backgroundSize: "cover",
    paddingTop: 70
  }
});

export default Statuscreen;
