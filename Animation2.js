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
    TouchableWithoutFeedback
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
        this.animatedValue = new Animated.Value(1);
    };

    handlePressIn=()=>{
        Animated.spring(this.animatedValue,{
            toValue:.5,
        }).start();
    };

    handlePressOut=()=>{
        Animated.spring(this.animatedValue,{
            toValue:1,
            friction:3,
            tension:40
        }).start();

    };

    render() {
        const animatedStyle={
            transform:[{scale:this.animatedValue}]
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                >

                    <Animated.View style={[styles.button, animatedStyle]}>
                        <Text style={styles.text}>
                            Press me!
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
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
    button:{
        backgroundColor:"#333",
        width: 100,
        height:50,
        alignItems:"center",
        justifyContent:"center",

    },
    text:{
        color:"#FFF"

    }
});
