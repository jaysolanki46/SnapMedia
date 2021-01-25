import * as React from 'react';
import {StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, TouchableOpacity, Dimensions, Image} from 'react-native';

const data = [
        { key: '1', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'Ravi Kishan'},
        { key: '2', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'B'},
        { key: '3', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'C'},
        { key: '4', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '5', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '6', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '7', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '8', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '9', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '10', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '11', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},
        { key: '12', image: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png', name: 'D'},

     ];

const headerImage = { uri: "https://images.unsplash.com/photo-1550082849-c4603c163b37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" };
const numColumns = 2;

export default class followers extends React.Component {

    renderItem = ({item, index}) => {

        return (
            <TouchableOpacity style={styles.item}>
                   <ImageBackground source={{uri: item.image}} style={styles.itemImage}>
                        <Text style={styles.itemText}>&nbsp;&nbsp;{item.name}</Text>
                   </ImageBackground>
            </TouchableOpacity>
        );
    };


    render() {
        return (
                <View style={styles.container}>
                       <View style={styles.headerDiv}>
                            <ImageBackground source={headerImage} style={styles.headerImage}>
                            </ImageBackground>
                       </View>

                        <FlatList
                            data={data}
                            style={styles.blocks}
                            renderItem={this.renderItem}
                            numColumns={2}
                            />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },

    headerDiv: {
            margin: '3%',
            height: '30%',
    },

    headerImage: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          borderRadius: 15,
          overflow: 'hidden',
    },

    item: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: '3%',
        height: Dimensions.get('window').width / numColumns,
        borderRadius: 10,
        overflow: 'hidden',
    },

    itemImage: {
        width: '100%',
        height: '100%',
    },

    itemText: {
        marginTop: 'auto',
        //textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: '#000',
        opacity: .5,
    },


    blocks: {
        flex: 1,
        marginVertical: 20,
    }

    /*bodyDiv: {
          flex: 1,
          borderWidth: 2,
          margin: '3%',
    },

    profileBlock: {
        width: '45%',
        height: '50%',
        borderWidth: 1,
    }*/

})

