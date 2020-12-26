
import Moisture from "../../models/moist"
export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';

export const SET_VALUES = 'SET_VALUES';


export const toggleFavourite = (id) => {
    return {type: TOGGLE_SWITCH, mealId: id }
}


export const fetchvalues = () => {

      return async dispatch => {

      const response = await fetch(
          'https://blitzkrieg-afd58.firebaseio.com/Data.json');

        const resData = await response.json();

        console.log(resData);
        const loadedValues = [];
      
        var Obj1 = resData["1_Humidity"];
                var Obj2 = resData["2_Moisture level"];
        var Obj3 = resData["3_Tempreature C"];
        var Obj4 = resData["4_Temperature F"];


var result1 = Obj1[Object.keys(Obj1)[Object.keys(Obj1).length-1]] 
var result2 = Obj2[Object.keys(Obj2)[Object.keys(Obj2).length-1]] 
var result3 = Obj3[Object.keys(Obj3)[Object.keys(Obj3).length-1]] 
var result4 = Obj4[Object.keys(Obj4)[Object.keys(Obj4).length-1]] 

        // loadedValues.push( new Moisture("c1","https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", result1,result2,result3,result4));


        loadedValues.push("https://images.unsplash.com/photo-1515788455067-4d55ceb52197?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8aXJyaWdhdGlvbiUyMGNyb3BzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");

        loadedValues.push(result1);
loadedValues.push(result2);

loadedValues.push(result3);

loadedValues.push(result4);

         console.log(loadedValues,"fsdfd");
        dispatch({type: SET_VALUES, values: loadedValues })
    
}
}

export const toggler = (status)=> {

    return async dispatch => {

      const response = await fetch(
          'https://blitzkrieg-afd58.firebaseio.com/Motor.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status})
        });

        const resData = await response.json();

        console.log(resData);

        dispatch({
            type: TOGGLE_SWITCH, state: status
        })
    }

}