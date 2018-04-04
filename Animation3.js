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
    PanResponder
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
        this.animatedValue = new Animated.ValueXY();
        this._value={x:0, y:0};
        this.animatedValue.addListener((value)=>this._value=value);

        this.panResponder = PanResponder.create({
            onStartShouldSetResponder:(evt, gestureState)=>true,
            onMoveShouldSetPanResponder:(evt, gestureState)=>true,
            onPanResponderGrant:(e, gestureState)=>{
                this.animatedValue.setOffset({
                    x:this._value.x,
                    y:this._value.y
                })
                this.animatedValue.setValue({x:0, y:0})

            },

            onPanResponderMove:Animated.event([
                null, {dx:this.animatedValue.x, dy:this.animatedValue.y}
            ]),

            onPanResponderRelease:(e, gestureState)=>{
                //Para aventarlo...
                this.animatedValue.flattenOffset();
                Animated.decay(this.animatedValue,{
                    deceleration:0.997,
                    velocity:{x:gestureState.vx, y:gestureState.vy}
                }).start();
//Hasta aqui
            }
        })
    };


    render() {
        const animatedStyle={
            transform:this.animatedValue.getTranslateTransform()
        };

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
                    <Text style={styles.text}>
                        Drag me!
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
