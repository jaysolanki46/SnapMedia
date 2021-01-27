import * as React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

const data = [
            {id:1, title: "Topic 1"},
            {id:2, title: "Topic 2"},
            {id:3, title: "Topic 3"},
            {id:4, title: "Topic 4"},
            {id:5, title: "Topic 5"},
            {id:6, title: "Topic 6"},
            {id:7, title: "Topic 7"},
];

export default class topics extends React.Component {
    render() {
        return (
              <View style={styles.container}>
                    {this.renderKeywordBoxes("Test")}
                    {this.renderKeywordBoxes("Test2")}
                    {this.renderKeywordBoxes("da")}
                    {this.renderKeywordBoxes("da")}
              </View>
        );
    }

    renderKeywordBoxes(name) {

        return <TouchableHighlight style={styles.box}><Text style={styles.white}>Topic {name}</Text></TouchableHighlight>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        //borderWidth: 1,
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        margin: 5,
        //borderWidth: 2,
        alignItems: 'center',
        padding: 10,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#30475e',

    },
    white: {
        color: 'white',
    }
})