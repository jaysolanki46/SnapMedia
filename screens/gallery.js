import * as React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer'

export default class gallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        const apiUrl = "https://api.unsplash.com/photos/random?count=100&client_id=1bOOumUhBBK2nafMvUBFe8duLFslnv5oGs9VPR7uTpM";
        fetch(apiUrl)
                .then((response) => response.json())
                .then((json) =>
                    this.setState({
                        data: json,
                    })
                    //console.log(json)
                )
                .catch( (error) => {
                    console.log(error)
                });
    }


    render() {

        const result = this.state;
        var images = result.data.map((data) => {
            return {
                "image" : data.urls.full
            }
        });
        //console.log(images);

        return (
            <View style={styles.container}>
                <GridImageView data={images}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})