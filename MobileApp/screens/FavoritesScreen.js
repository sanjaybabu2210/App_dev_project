import React, { useEffect,useCallback } from 'react';
import MealList from '../components/MealList';
import {View, Text , StyleSheet} from 'react-native';
// import { useSelector} from 'react-redux';
import { Switch } from 'react-native-paper';

import {HeaderButtons, Item} from  'react-navigation-header-buttons';
import ProgressBar from 'react-native-progress/Bar';
import HeaderButton from '../components/HeaderButton';
import {useSelector, useDispatch} from 'react-redux';

import * as valueActions from '../store/actions/farms'



const FavoritesScreen = props => {

  // const favMeals = useSelector(state => state.meals.favouriteMeals);

 const values = useSelector(state =>state.meals.meals);

  console.log(values ,"Fsfdfdsf") ;
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const dispatch = useDispatch();
  const vals = values[2]/100;
  var val = 0.36;
  if(parseFloat(vals/100)=== 0.36){
      console.log(true);
  }
  if(vals){
  val= parseFloat(vals);

  }
      // console.log(parseFloat(vals));
      // console.log( val);

  useEffect(()=>{
    dispatch( valueActions.fetchvalues());
  },[dispatch]);




  return (
    <View>
  <View style={styles.major}>
                <Text style={styles.text}>Motor Control</Text>

<View style={styles.progress1}>

               <Switch value={isSwitchOn} onValueChange={onToggleSwitch}  />
</View>
    </View>
    <View style={styles.status}>
                <View >
                <Text style={styles.text}>Moisture  1</Text>

                </View>
                <View style={styles.progress}>
              <ProgressBar progress={val}  color="green"></ProgressBar>

                </View>
    </View>
      <View style={styles.status}>
                <View >
                <Text style={styles.text}>Moisture  2</Text>

                </View>
                <View style={styles.progress}>
              <ProgressBar progress={0.5} color="green"></ProgressBar>

                </View>
    </View>
      <View style={styles.status}>
                <View >
                <Text style={styles.text}>Moisture  3</Text>

                </View>
                <View style={styles.progress}>
              <ProgressBar progress={0.7} color="green"></ProgressBar>

                </View>
    </View>
      <View style={styles.status}>
                <View >
                <Text style={styles.text}> Moisture  4</Text>

                </View>
                <View style={styles.progress}>
              <ProgressBar progress={0.3} color="green"></ProgressBar>

                </View>
    </View>
    
    </View>
  
  );
};



FavoritesScreen.navigationOptions = navData=> {
  return {
headerTitle: 'Motor Control',
  headerLeft:( <HeaderButtons   HeaderButtonComponent={HeaderButton} >
    <Item title="Menu" iconName = 'ios-menu' onPress={()=> {
      navData.navigation.toggleDrawer();
    }} />
  </HeaderButtons>)
  }
  
};


const styles = StyleSheet.create({
  major:{
    width: '95%',
    marginLeft: "2.5%",
    height: 130,
        marginTop: 15,
            paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "pink",
    borderRadius: 10
  },
  
  status:{
    width: '95%',
    marginLeft: "2.5%",
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 10,
        marginTop: 15,
    backgroundColor: "#E4E7F7",
    borderRadius: 10
  },
  text: {
    fontSize: 20,
        marginVertical: 10,

    fontWeight: "bold"
  },
  progress:{
    position: "absolute",
    right: 10,
    height: 40,
    marginVertical: 20
  },
 progress1:{
    position: "absolute",
    right: 40,
    height: 40,
    marginVertical: 20
  }

});
export default FavoritesScreen;
