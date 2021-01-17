import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Topics = () => {
    return (
        <View style={styles.container}>
                <Text>Hello Topics</Text>
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

export default Topics;