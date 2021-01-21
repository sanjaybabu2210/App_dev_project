import React, { useEffect,useCallback } from 'react';
import {ScrollView, View, Text, Button,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';
import { Moisture } from '../data/dummy-data';
import { CircularProgressbar ,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DefaultText from '../components/DefaultText';
import {toggleFavourite} from '../store/actions/farms';
import * as valueActions from '../store/actions/farms'
const ListItem = props => {

  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}


const AppButton = ( props ) => {
  return <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{props.title}</Text>
  </TouchableOpacity>
};
const AppButtonmini = ( props ) => {
  return <TouchableOpacity style={styles.appButtonContainer1}>
    <Text style={styles.appButtonText}>{props.title}</Text>
  </TouchableOpacity>
};
const AppButtonmini2 = ( props ) => {
  return <TouchableOpacity style={styles.appButtonContainer2}>
    <Text style={styles.appButtonText}>{props.title}</Text>
  </TouchableOpacity>
};
const MoistDetailScreen = props => {

  const values = useSelector(state =>state.meals.moistures);

  console.log(values ,"Fsfdfdsf") ;
  const sensId = props.navigation.getParam('categoryId');

  const selectedMeal = Moisture.find(sensor => sensor.id === sensId);

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch( valueActions.fetchvalues());
  },[dispatch]);


const percentage = 66;

// console.log( values[2][Object.keys(values[2])[0]], typeof values[2], "major");

  // const toggleFavouriteHandler = useCallback(() =>{
  //     dispatch(toggleFavourite(mealId));
  // },[dispatch, mealId]);
  for (var prop in values[2]) {
var moisture =  values[2][prop];
    break;
}
for (var prop in values[3]) {
var celcius =  values[3][prop];
    break;
}

for (var prop in values[1]) {
var humidity =  values[1][prop];
    break;
}

console.log(values[4]);

  // useEffect(()=>{
  //   props.navigation.setParams({toggleFav: toggleFavouriteHandler});
  // },[toggleFavouriteHandler]);

  return (
    
    <ScrollView style={styles.main}>
      <Image source={{uri: values[0]}} style={styles.image} />
  
         
 <View  style={styles.progress} >
<CircularProgressbar value={moisture} text={`${moisture + " %"}`} circleRatio={1} styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,
 
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
 
    // Text size
    textSize: '16px',
 
    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,
 
    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',
 
    // Colors
    pathColor: `rgba(68,107,106, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
	 />; 

</View>
         <View style={styles.temps}>

 
            <AppButtonmini title={celcius + " C"}></AppButtonmini>
                        <AppButtonmini2 title={values[4] + " F"}></AppButtonmini2>

          </View>
        <AppButton title={humidity + " H"}></AppButton>
        <View style={styles.viewer}>

  <Button  color="#446b6a" title="View Graph" onPress={() => {
          props.navigation.navigate({
            routeName: 'GraphStats'
            // params: {
            //   categoryId: itemData.item.id
            // }
          });
        }} ></Button>

        </View>

      

    </ScrollView>
   
  );
};

MoistDetailScreen.navigationOptions = navigationData => {
  
  const fieldTitle = navigationData.navigation.getParam('fieldTitle');
  // const toggleFavourite = navigationData.navigation.getParam('toggleFav');
  return {
    headerTitle: "Field " + fieldTitle,
 
  };
};

const styles = StyleSheet.create({
  image:{
    width: '95%',
    marginLeft: "2.5%",
    height: 200,
        marginTop: 15,

    borderRadius: 10
  },
  details:{
    flexDirection:'row',
    padding: 15,
    justifyContent: 'space-around'

  },
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center'

  },
  progress:{
    marginLeft:"25%",
        marginTop: 15,

    width: "50%",
    height: 200
  },
  listItem:{
    marginVertical: 20,
    margingHorizontan: 20,
    borderColor: '#002D00',
    borderRadius: 10,
    borderWidth: 1,
    padding: 8
  },
  temps :{
    textAlign: "center",
    marginLeft: "5%",

        width: "90%",

  },
    appButtonContainer: {
    elevation: 8,
    width: "90%",
    backgroundColor: "#002D00",
    borderRadius: 5,
    marginLeft: "5%",
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
        marginBottom: 10

  },
  viewer: {
    elevation: 8,
    width: "90%",
    backgroundColor: "#446b6a",
    borderRadius: 5,
    marginLeft: "5%",
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
        marginBottom: 10

  },
     appButtonContainer1: {
    width: "45%",
    backgroundColor: "#002D00",
    borderRadius: 5,
        marginTop: 15,
    marginLeft: 0,

    paddingVertical: 10,
    paddingHorizontal: 12
  },
     appButtonContainer2: {
    width: "45%",
    backgroundColor: "#002D00",
    borderRadius: 5,
        marginTop: 15,
        position:"absolute",
    right: 0,

    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
   main : {
    backgroundImage: "url('https://i.pinimg.com/originals/46/da/c9/46dac9351feab803ccd7b4b57f17dca5.jpg')",
    backgroundSize: "cover"
  }
});

export default MoistDetailScreen;
