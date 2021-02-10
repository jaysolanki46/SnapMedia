import * as React from 'react';
import {StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, TouchableOpacity, Dimensions, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const headerImage = { uri: "https://images.unsplash.com/photo-1550082849-c4603c163b37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" };
const numColumns = 2;

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

export default class followers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        const followersAPI = "https://api.unsplash.com/users/unsplash/following?client_id=1bOOumUhBBK2nafMvUBFe8duLFslnv5oGs9VPR7uTpM";

        fetch(followersAPI)
            .then((response) => response.json())
            .then((json) => this.setState({ data: json }))
            .catch((error) => { console.log(error) });

    }

    render() {

        const result = this.state;
        var followers = result.data.map((follower) => {
                return {
                    "id": follower.id,
                    "name": follower.first_name,
                    "profile": follower.profile_image.large,
                }
        });

        //console.log(followers);

        return (
                <View style={styles.container}>
                       <View style={styles.headerDiv}>
                            <ImageBackground source={headerImage} style={styles.headerImage}>
                            </ImageBackground>
                       </View>

                        <FlatList
                            data={followers}
                            style={styles.blocks}
                            renderItem={this.renderItem}
                            numColumns={2}
                            />
                </View>
            );
    }

    renderItem = ({item, index}) => {

            return (
                //onPress={() => this.getFollowerImages(item.id)}
                <TouchableOpacity onPress={() => this.getFollowerImages(item.id)}
                style={styles.item}>
                       <ImageBackground source={{uri: item.profile}} style={styles.itemImage}>
                            <Text style={styles.itemText}>&nbsp;&nbsp;{item.name}</Text>
                       </ImageBackground>
                </TouchableOpacity>
            );
        };

    getFollowerImages(id) {
            alert(id);
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
        textAlign: 'center',
        color: 'white',
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

