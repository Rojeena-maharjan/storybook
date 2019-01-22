import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex:1
    },
    headerText: {
        color: colors.button,
        fontWeight: 'bold',
        fontSize: 24
    },
    topRow:{
        marginTop: 30,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    footerText:{
        marginTop: 50,
        fontSize: 16,
        alignSelf: "center",
        textDecorationLine: "underline"
    }
})

export default ({children, header, footer}) => (
    <View style={styles.container}>
        {(header) && (
            <View style={styles.topRow}>
                {header && <Text style={styles.headerText}>{header}</Text>}              
            </View>
        )}
        
        {children}

        {(footer) && (
            <View style={styles.endRow}>
                {footer && <Text style={styles.footerText}>{footer}</Text>}              
            </View>
        )}
    </View>
);