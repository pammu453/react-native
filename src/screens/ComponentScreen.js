import React from "react";
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    const name = "Pramod"

    return <>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.greetStyle}>My name is {name}</Text>
    </>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    greetStyle: {
        fontSize: 20,
    }
})

export default ComponentScreen;