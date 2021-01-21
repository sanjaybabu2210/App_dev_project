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
import { HiddenItem } from 'react-navigation-header-buttons';

// import { Sensors } from '../data/dummy-data';
// import CategoryGridTile from '../components/CategoryGridTile';

// import {HeaderButtons, Item} from  'react-navigation-header-buttons';

// import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

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
       <ScrollView style={styles.main}>
    
                               <Image source={{uri: "https://i.ibb.co/p46vG0K/4072378-removebg-preview.png"}} style={styles.image} />

 <View   >
<Text style={styles.about} >About Us</Text>
<Text style={styles.para} >By FarmEZ Farmers can irrigate the crops in more feasible and productive manner results in higher revenue and productivity. This System analyses the concern of farmers and optimised their way of irrigation on accordance with moisture content of the soil.</Text>
</View>
 <View   >
<Text style={styles.about} >Features</Text>
<View style={styles.sec} >
                                 <Image source={{uri: "https://img.freepik.com/free-vector/farmers-working-farm-cartoons_18591-51897.jpg?size=338&ext=jpg&ga=GA1.2.1805166190.1608955737"}} style={styles.image} />


</View>
                                 <Text style={styles.para} >Motor Control</Text>

<View style={styles.sec} >
                                 {/* <Image source={{uri: "https://img.freepik.com/free-vector/mulching-plants-abstract-concept-vector-illustration-soil-covering-plant-protection-weed-control-retain-moisture-garden-bed-wood-chips-landscape-fabric-decorative-mulch-abstract-metaphor_335657-1669.jpg?size=338&ext=jpg&ga=GA1.2.1805166190.1608955737"}} style={styles.image} /> */}


</View>
                                                                  <Text style={styles.para} >Sensor stats</Text>

</View>
   <View   >
<Text style={styles.about} >How it works?</Text>
<Text style={styles.para} >The system integrates the Iot with the traditional irrigation methods. Our system featuring an App,  an arraybof sensors spread throughout the field. The app powers the farmers to control the water flowing through the fields just by pressing single button on the home screen. 
No need to go to the field in person to check if the field is watered properly the app does for farmers at fingertips.</Text>
</View>      
 <View   >
<Text style={styles.about} >Contact </Text>
<Text style={styles.para} >Ananvadya Softech, Bangalore</Text>
<Text style={styles.para} >VIT VELLORE INTERN</Text>

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
    marginLeft: 8,
    height: 300,
        marginTop: 15,

    borderRadius: 10
  },
  about:{
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontFamily: "open-sans"
  },
    para:{
    textAlign: "center",
    marginHorizontal: 15,

    fontSize: 18,
    fontWeight: "300",
    fontFamily: "open-sans"
  },
  sec:{
    textAlign: "center",
    marginHorizontal: "25%",
    height: 200,
    overflow: "hidden",
    width: 200,
    backgroundImage: "url('https://img.freepik.com/free-vector/mulching-plants-abstract-concept-vector-illustration-soil-covering-plant-protection-weed-control-retain-moisture-garden-bed-wood-chips-landscape-fabric-decorative-mulch-abstract-metaphor_335657-1669.jpg?size=338&ext=jpg&ga=GA1.2.1805166190.1608955737')",
    borderRadius: "50%",
    backerSize: "cover",
    margin: 15,
    // border: "4px solid red"
  },
  main : {
    backgroundImage: "url('https://i.pinimg.com/originals/46/da/c9/46dac9351feab803ccd7b4b57f17dca5.jpg')",
    backgroundSize: "cover"
  }




});

export default Statuscreen;
