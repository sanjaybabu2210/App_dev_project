import React, { useEffect,useCallback } from 'react';
import {ScrollView, View, Text, Button,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';
import { Moisture } from '../data/dummy-data';
import { CircularProgressbar } from 'react-circular-progressbar';
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



  // const toggleFavouriteHandler = useCallback(() =>{
  //     dispatch(toggleFavourite(mealId));
  // },[dispatch, mealId]);


  // useEffect(()=>{
  //   props.navigation.setParams({toggleFav: toggleFavouriteHandler});
  // },[toggleFavouriteHandler]);

  return (
    
    <ScrollView>
      <Image source={{uri: values[0]}} style={styles.image} />
    
         
 <View  style={styles.progress} >
<CircularProgressbar value={values[2]} text={`${values[2] + " %"}`} circleRatio={1}	 />; 

</View>
         <View style={styles.temps}>

 
            <AppButtonmini title={values[3] + " C"}></AppButtonmini>
                        <AppButtonmini2 title={values[4] + " F"}></AppButtonmini2>

          </View>
        <AppButton title={values[1] + " H"}></AppButton>

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
    marginVertical: 10,
    margingHorizontan: 20,
    borderColor: '#ccc',
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
    backgroundColor: "#009688",
    borderRadius: 5,
    marginLeft: "5%",
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
        marginBottom: 10

  },
     appButtonContainer1: {
    width: "45%",
    backgroundColor: "#009688",
    borderRadius: 5,
        marginTop: 15,
    marginLeft: 0,

    paddingVertical: 10,
    paddingHorizontal: 12
  },
     appButtonContainer2: {
    width: "45%",
    backgroundColor: "#009688",
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
  }
});

export default MoistDetailScreen;
