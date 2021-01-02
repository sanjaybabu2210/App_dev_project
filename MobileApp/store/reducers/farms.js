
import {Moisture} from '../../data/dummy-data';
import { TOGGLE_SWITCH , SET_VALUES } from '../actions/farms';




const initialState = {
    moistures: [] 
};




const farmReducer = (state = initialState, action) => {
    switch (action.type){

        case SET_VALUES:
            return {
                 moistures: action.values 

            }
         case TOGGLE_SWITCH:
            return {
                 status: action.state 

            }


        // case TOGGLE_FAVOURITE:
        //     const existingIndex =  state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
        //     if(existingIndex>=0){

        //         const updatedFavMeals = [...state.favouriteMeals];
        //         updatedFavMeals.splice(existingIndex, 1);
        //         return {...state, favouriteMeals:updatedFavMeals };
        //     }else{
        //         const meal = state.meals.find(meal=> meal.id ===action.mealId);
        //         return {...state,favouriteMeals: state.favouriteMeals.concat(meal)};
        //     }
        default:
            return state;
    }
}


export default farmReducer;