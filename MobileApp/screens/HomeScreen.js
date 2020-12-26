import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

// import { Sensors } from '../data/dummy-data';
// import CategoryGridTile from '../components/CategoryGridTile';

// import {HeaderButtons, Item} from  'react-navigation-header-buttons';

// import HeaderButton from '../components/HeaderButton';

const Statuscreen = props => {
  const renderGridItem = itemData => {
    return (
              <View>

              </View>

    //   <CategoryGridTile
    //     title={itemData.item.title}
    //     color={itemData.item.color}
    //     onSelect={() => {
    //       props.navigation.navigate({
    //         routeName: 'MealDetail',
    //         params: {
    //           categoryId: itemData.item.id,
    //           fieldTitle: (itemData.item.id).slice(-1)
    //         }
    //       });
    //     }}
    //   />

    );
  };

  return (
       <ScrollView>
    
                               <Image source={{uri: "https://i.ibb.co/p46vG0K/4072378-removebg-preview.png"}} style={styles.image} />

 <View   >
<Text>About Us</Text>
<Text>fsdfsdffsdfsdf</Text>
</View>
         

    </ScrollView>
  );
};

Statuscreen.navigationOptions = (navData)=> {
  return {
headerTitle: 'Moisture Status'
  
  }
  
};

const styles = StyleSheet.create({
  screen: {
   
    marginTop: 70
  },
  image:{
    width: '95%',
    marginLeft: "2.5%",
    height: 200,
        marginTop: 15,

    borderRadius: 10
  }



});

export default Statuscreen;
