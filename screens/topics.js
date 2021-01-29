import * as React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

export default class topics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        const topicsAPI = "https://api.unsplash.com/topics?client_id=1bOOumUhBBK2nafMvUBFe8duLFslnv5oGs9VPR7uTpM";

        fetch(topicsAPI)
            .then((response) => response.json())
            .then((json) => this.setState({ data: json}))
            .catch((error) => console.log(error));
    }

    render() {

        const result = this.state;
        //console.log(result);

        var topics = result.data.map((topic) => {
            return {
                "topic": topic.title,
            }
        })
        //console.log(topics);

        return (
              <View style={styles.container}>
                    {result.data.map((topic) => {
                                return this.renderKeywordBoxes(topic.id, topic.title)
                                //console.log(topic.title)
                    })}
              </View>
        );
    }

    renderKeywordBoxes(id, name) {

        return <TouchableHighlight key={id} onPress={() => this.getTopicImages(id)} style={styles.box}><Text style={styles.white}>{name}</Text></TouchableHighlight>
    }

    getTopicImages(id) {
        alert(id);
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