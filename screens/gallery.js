import * as React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer'

const data = [
        { image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'},
        { image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'},
        { image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'},
        { image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'},
     ];

const Gallery = () => {

    return (
        <View style={styles.container}>
                <GridImageView data={data}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

export default Gallery;