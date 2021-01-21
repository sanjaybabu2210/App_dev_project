import React ,{ useEffect,useCallback } from 'react';
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
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import DefaultText from '../components/DefaultText';
import * as valueActions from '../store/actions/farms'
import {useSelector, useDispatch} from 'react-redux';
import { Moisture } from '../data/dummy-data';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
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

  const values = useSelector(state =>state.meals.moistures);

  console.log(values ,"Fsfdfdsf") ;
  const sensId = props.navigation.getParam('categoryId');

  const selectedMeal = Moisture.find(sensor => sensor.id === sensId);

  var moisture = [];
  var i = 0;
   for (var prop in values[2]) {
     i++;
     if(i==7){
       i = 0;
       break;
       moisture.reverse();

     }
moisture.push(values[2][prop]);
}
  var humidity = [];
   for (var prop in values[1]) {
     i++;
     if(i==7){
       i = 0;
       break;
       humidity.reverse();

     }
humidity.push((values[1][prop])/100.0);
}
  var celcius = [];
   for (var prop in values[3]) {
     i++;
     if(i==5){
       i = 0;
       break;
       celcius.reverse();

     }
celcius.push(values[3][prop]);
}
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch( valueActions.fetchvalues());
  },[dispatch]);

const data = {
  labels: ["Reading 1", "Reading 2", "Reading 3", "Reading 4", "Reading 5", "Reading 6"],
  datasets: [
    {
      data: moisture,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
      strokeWidth: 1 // optional
    }
  ],
  legend: ["Moisture"] // optional
};

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",

  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(12, 0, 0, ${opacity})`,
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const data2 = {
  labels: ["Reading 1", "Reading 2", "Reading 3", "Reading 4", "Reading 5", "Reading 6"],
  datasets: [
    {
      data: celcius
    }
  ]
};
const data1 = {
  labels: ["data 1", "data 2", "data 3", "data 4"],
  data: humidity
};
  return (
    
       <ScrollView style={styles.main}>
    
                               {/* <Image source={{uri: "https://i.ibb.co/p46vG0K/4072378-removebg-preview.png"}} style={styles.image} /> */}


<View style={styles.linechart}>
<LineChart 

  data={data}
  width={320}
  height={220}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>
</View>

<View style={styles.linechart}>

<ProgressChart
  data={data1}
  width={320}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
</View>
<View style={styles.linechart}>

<BarChart
  // style={graphStyle}
  data={data2}
  width={320}
  height={220}
  yAxisLabel="C "
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
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

  main: {
    backgroundColor: "#d6fa8c"
  },
  linechart: {
    margin: 20,
    backgroundImage: "url('https://i.pinimg.com/originals/46/da/c9/46dac9351feab803ccd7b4b57f17dca5.jpg')",
    borderRadius: 10
  
  }


});

export default Statuscreen;
