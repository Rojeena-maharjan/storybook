import React from 'react';
import { Text, View } from 'react-native';

import colors from '../config/colors';

  const styles = {
    containerStyle: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "#ddd",
      borderBottomWidth: 0,
      shadowColor: "#000",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 10,
      marginRight: 10
    }
  };

export const Card =({ style, isLoading=false, children=""})=> {
    const containerStyles = [styles.containerStyle];
    
    return(
        <View style={[containerStyles, style]}>
            {children}
        </View>
    )
};

// Card.defaultProps = {
//     isLoading: false
//   };
