/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Easing
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    componentWillMount(){
        this.animatedValue = new Animated.Value(100);
    }

    componentDidMount(){
        Animated.timing(this.animatedValue, {
            toValue:150,
            duration: 3000,
            easing:Easing.bounce
        }).start()
    }

    render() {
        const animatedStyle={width:this.animatedValue};
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    box:{
        backgroundColor:"#333",
        width:100,
        height:100,
    }
});
