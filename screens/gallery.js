import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';

const Gallery = () => {
    return (

        <View style={styles.container}>
                <Text>Hello Gallery</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Gallery;