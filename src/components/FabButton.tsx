import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
interface Props {
    title: string;
    position: 'left' | 'right',
    onClick: () => void
}
 
const styles = StyleSheet.create({
    fabToLeft: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    fabToRigth: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    btnInc: {
        backgroundColor: 'green',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    btnDec: {
        backgroundColor: 'red',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
 
 
export const FabButton = (props: Props) => {
 
    const { title, position, onClick } = props;
 
    return (
 
        <TouchableOpacity style={
            position === 'left'
                ? styles.fabToLeft
                : styles.fabToRigth
        } onPress={() => onClick()} >
            <View style={position === 'left'
                ? styles.btnDec
                : styles.btnInc
            }>
                <Text style={styles.fabText}> {title}</Text>
            </View>
        </TouchableOpacity>
    );
}
