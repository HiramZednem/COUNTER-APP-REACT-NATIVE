import { View, TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
}

export const Fab = ( {title, position = 'br' ,onPress}: Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                style={
                    [styles.fabLocation,
                    ( position == "bl" ) 
                        ? styles.left 
                        : styles.right
                    ]
                }
            >
                <View style={ styles.fab } >
                    <Text style={styles.fabText}>{title}</Text>
                </View>     
            </TouchableOpacity> 
        )
    }

    const android = () => {
        return (
        <View
            style={
                [styles.fabLocation,
                ( position == "bl" ) 
                    ? styles.left 
                    : styles.right
                ]
            }
        >
            <TouchableNativeFeedback
                onPress={ onPress }
                background={TouchableNativeFeedback.Ripple('blue',false,30)}
            >
                <View style={ styles.fab } >
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        )
    }

    return (
        (Platform.OS === "ios") ? ios() : android()
        
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856d6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 2,
    },
    fabText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'  ,
    },
});