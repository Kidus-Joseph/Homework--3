import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function Message() {
    return (
        <View style={style.messageContainer}>
            <Text style={style.textInput}>I am rich</Text>
            <Text style={style.textInput}>I deserv it {'\n'}</Text>
            <Text style={style.textInput}>I am good</Text>
            <Text style={style.textInput}>healthy &</Text>
            <Text style={style.textInput}>successful</Text>
        </View>
    );
}

const style=StyleSheet.create({
    messageContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        color: 'white',
        fontSize: 80,
    }
})