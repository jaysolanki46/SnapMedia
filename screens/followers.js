import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const data = [
        { id: '1', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'A'},
        { id: '2', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'B'},
        { id: '3', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'C'},
        { id: '4', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
     ];


const Followers = () => {
    return (
        <View style={styles.container}>
                <Text>Hello Followers</Text>
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

export default Followers;