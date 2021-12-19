
import React from 'react';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const Input = (props) => {
    return (
        <TextInput
            style={styles.input}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            placeholderTextColor={props.placeholderTextColor}
        />
    )
}
const styles = StyleSheet.create({

    input: {

        width: width / 1.2,
        height: 50,
        color: '#FFf',
        borderColor: '#9A9483',
        margin: 10,
        borderWidth: 1,
        backgroundColor:'rgba(0,0,0,0)',
        borderRadius: 15,
        padding: 15,
        fontSize: 18,


    }
})

