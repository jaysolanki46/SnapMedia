import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
//npm install @react-navigation/native
import {StyleSheet, Text, View} from 'react-native';
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
import 'react-native-gesture-handler';
//npm install @react-navigation/material-top-tabs react-native-paper
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Appbar } from 'react-native-paper';


//Screens
import Gallery from './screens/gallery'
import Followers from './screens/followers'
import Topics from './screens/topics'


const Tab = createMaterialTopTabNavigator();

const App = () => {
    return (
        <View style={{flex: 1}}>
        <Text style={styles.header}>Unsplash Snap Media</Text>
        <NavigationContainer>{
            <Tab.Navigator
                initialRoute = "Gallery"
                activeColor = "#02ad94"
                inactiveColor = "#dedede"
                style={{backgroundColor: '#000'}}>
                  <Tab.Screen name="Gallery" component={Gallery}/>
                  <Tab.Screen name="Followers" component={Followers} />
                  <Tab.Screen name="Topics" component={Topics} />
            </Tab.Navigator>
        }</NavigationContainer>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        width: '100%',
        height: '7%',
        backgroundColor: '#30475e',
        color: '#f4f4f2',
        fontSize: 15,
        padding: 10,
        alignSelf: 'flex-start',
    }
})

export default App;