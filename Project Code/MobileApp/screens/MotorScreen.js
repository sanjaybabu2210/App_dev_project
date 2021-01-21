import React, { useEffect,useCallback,useState } from 'react';
import {View, Text , StyleSheet} from 'react-native';
// import { useSelector} from 'react-redux';
import { Switch } from 'react-native-paper';

import {HeaderButtons, Item} from  'react-navigation-header-buttons';
import ProgressBar from 'react-native-progress/Bar';
import HeaderButton from '../components/HeaderButton';
import {useSelector, useDispatch} from 'react-redux';

import * as valueActions from '../store/actions/farms'



const MotorSceen = props => {

  // const favMeals = useSelector(state => state.meals.favouriteMeals);

  const values = useSelector(state =>state.meals.moistures);

  console.log(values ,"Fsfdfdsf") ;
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const dispatch = useDispatch();
  // const vals = values[2]/100;
  var vals = 0.36;
  var val;
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

  const [status, setstate] = useState(0);

  const submitHandler = useCallback(() => {
   
    if (status == 0) {
      dispatch(
        valueActions.toggler(
         "true"
        )
      );
              setstate(1);

      console.log(status);
    } else {
      dispatch(
        valueActions.toggler(
          "false"
        )
      );
              setstate(0);

            console.log(status);

    }
    props.navigation.goBack();
  }, [dispatch, status]);

  useEffect(() => {
  }, [submitHandler]);


  return (
    <View style={styles.main}>
  <View style={styles.major}>
                <Text style={styles.text}>Motor Control</Text>

<View style={styles.progress1}>

               <Switch value={status} onValueChange={submitHandler}  />
</View>
    </View>
    <View style={styles.status}>
                <View >
                <Text style={styles.text}>Moisture  1</Text>

                </View>
                <View style={styles.progress}>
              <ProgressBar progress={0.62}  color="green"></ProgressBar>

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



MotorSceen.navigationOptions = navData=> {
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
    backgroundColor: "#005B00",
    borderRadius: 10
  },
  
  status:{
    width: '95%',
    marginLeft: "2.5%",
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 10,
        marginTop: 15,
    backgroundColor: "#4e9c81",
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
  },
   main : {
    backgroundImage: "url('https://i.pinimg.com/originals/46/da/c9/46dac9351feab803ccd7b4b57f17dca5.jpg')",
    backgroundSize: "cover",
        height: "110vh"

  }

});
export default MotorSceen;
