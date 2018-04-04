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
        this.animatedValue = new Animated.Value(0);

    };

    componentDidMount(){
        Animated.timing(this.animatedValue,{
            toValue:1,
            duration:1500,

        }).start()
    }



    render() {
        const interpolationRotation = this.animatedValue.interpolate({
            inputRange: [0, 1],
            //outputRange: ['0deg', '360deg'],
            outputRange: ['0rad', '10rad'],
        });


        const animatedStyle={
            transform:[
                {rotate: interpolationRotation}
            ]
        };

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <Text style={styles.text}>
                        Spinner!
                    </Text>
                </Animated.View>
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
    },
    text:{
        color:"#FFF"

    }
});
