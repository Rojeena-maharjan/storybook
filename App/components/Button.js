import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: colors.button,
        padding: 20,
        alignItems: "center",
        marginTop: 20
    },
    containerOutline:{
        backgroundColor: 'transparent',
        borderColor: colors.button,
        borderWidth:1
    },
    text: {
        color: colors.white,
        alignSelf: 'center',
    },
    textOutline:{
        color: colors.button
    }
})

export const Button =({ onPress = () => {}, children = "", outline= false })=> {
    const containerStyles = [styles.conatiner];
    const textStyles = [styles.text];

    if(outline){
        containerStyles.push(styles.containerOutline);
        textStyles.push(styles.textOutline)
    }
    return(
        <TouchableOpacity onPress={onPress} style={containerStyles}>
            <Text style={textStyles}>{children}</Text>
        </TouchableOpacity>
    )
};

//import { Button } from './Button';