import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
//npm install @react-navigation/native
import {StyleSheet, Text, View} from 'react-native';
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
import 'react-native-gesture-handler';
//npm install @react-navigation/material-bottom-tabs react-native-paper
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Screens
import Gallery from './screens/gallery'
import Followers from './screens/followers'
import Topics from './screens/topics'


const Tab = createMaterialBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>{
            <Tab.Navigator
                initialRoute = "Gallery"
                activeColor = "#02ad94"
                inactiveColor = "#dedede"
                style={{backgroundColor: '#000'}}
            >
                  <Tab.Screen name="Gallery" component={Gallery} />
                  <Tab.Screen name="Followers" component={Followers} />
                  <Tab.Screen name="Topics" component={Topics} />
            </Tab.Navigator>
        }</NavigationContainer>
      );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;