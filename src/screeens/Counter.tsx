import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    taxtItem: {
        fontSize: 50,
        textAlign: 'center'
    },
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
 
 
export const BasicCounterScreen = () => {
 
    const [counter, setCounter] = useState(0);
 
    return (
        <View style={styles.container} >
            <Text style={styles.taxtItem} >
                Contador: {counter}
            </Text>
 
            <TouchableOpacity
                style={styles.fabToRigth}
                onPress={() => setCounter(counter + 1)}>
                <View style={styles.btnInc}>
                    <Text style={styles.fabText} >+1</Text>
                </View>
            </TouchableOpacity>
 
            <TouchableOpacity
                style={styles.fabToLeft}
                onPress={() => setCounter(counter - 1)}>
                <View style={styles.btnDec}>
                    <Text style={styles.fabText} >-1</Text>
                </View>
            </TouchableOpacity>
 
        </View>
 
    );
}
