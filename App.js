/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import hm from './Screens/homeScreen';
import detailScreen from './Screens/detailScreen';
import sp from './Screens/DetailScreenComponent/splashScreen';
import PdfViewer from './Screens/pdfViewer';

const Stack = createStackNavigator();

function App(route) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#003e51'},
          headerTitleStyle: {
            textAlign: 'center',
            color: 'white',
          },
        }}
        initialRouteName="sp">
        <Stack.Screen name="DetailScreen" component={detailScreen} />
        <Stack.Screen name="sp" component={sp} options={{headerShown: false}} />
        <Stack.Screen
          name="Menu"
          component={hm}
          //options={{headerTitleStyle: {marginRight: 30}}}
        />
        <Stack.Screen name="PDF" component={PdfViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
