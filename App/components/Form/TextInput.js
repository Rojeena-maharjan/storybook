import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import FieldWrapper from './FieldWrapper'
import colors from '../../config/colors';

const styles = StyleSheet.create({
    textInput:{
        fontSize: 14,
        fontWeight: "500",
        paddingBottom: 10
    },
    border:{
        height:1,
        backgroundColor: colors.border
    } 

})

export default ({ label, message, messageType, ...rest })=> {
    return(
    <FieldWrapper label={label} message={message} messageType={messageType}>
        <TextInput style= {styles.textInput} {...rest}/>
        <View style={styles.border}/>
    </FieldWrapper>
    )
};