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

    componentWillMount(){
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);


    };

    componentDidMount(){
        Animated.stagger(300,[
            Animated.timing(this.animatedValue1,{
                toValue:height,
                //duration:1000
                duration:1500

            }),
            Animated.timing(this.animatedValue2,{
                toValue:height,
                //duration:1000,
                duration:3000,
            }),
            Animated.timing(this.animatedValue3,{
                //toValue:height,
                //duration:1000,
                toValue:500,
                duration:400,
            })


        ]).start()

    }



    render() {



        const animatedStyle1={
            height:this.animatedValue1
        };
        const animatedStyle2={
            height:this.animatedValue2
        };
        const animatedStyle3={
            height:this.animatedValue3
        };

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle1]} />
                <Animated.View style={[styles.box, animatedStyle2]} />
                <Animated.View style={[styles.box, animatedStyle3]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
    },
    box:{
        flex:1,
        backgroundColor:"#333",
        marginHorizontal:5
    },
    text:{
        color:"#FFF"

    }
});