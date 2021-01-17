import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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