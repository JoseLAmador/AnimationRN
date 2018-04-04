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
    Dimensions
} from 'react-native';

const {height} = Dimensions.get("window");

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.animatedValue1, {
                toValue: 300,
                duration: 300
            }),
            Animated.spring(this.animatedValue2, {
                toValue: 1.5,
            })
        ]).start();
    }


    render() {
        const animateStyles = {
            transform: [
                { translateY: this.animatedValue1},
                { scale: this.animatedValue2}
            ]
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animateStyles]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#333',
        width: 100,
        height: 100,
    }
});