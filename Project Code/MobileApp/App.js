import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import ReduxThunk from 'redux-thunk';

import FarmNavigator from './navigation/FarmNavigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import farmReducer from './store/reducers/farms';

// useScreens();

const rootReducer = combineReducers({
  meals: farmReducer
});

const store = createStore(rootReducer , applyMiddleware(ReduxThunk));


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <Provider store={store} ><FarmNavigator /></Provider>;
}
