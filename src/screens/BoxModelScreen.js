import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxModelScreen = () => {
    return (
        <View style={styles.parent}>
            <Text style={styles.child1}>Child #1</Text>
            <Text style={styles.child2}>Child #2</Text>
            <Text style={styles.child3}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        borderWidth: 3,
        borderColor: "black",
        width: 400,
        height: 500,
    },
    child1: {
        backgroundColor: "orange",
    },
    child2: {
        backgroundColor: "blue",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // ...StyleSheet.absoluteFillObject  // same as baove 5 property
    },
    child3: {
        backgroundColor: "green",
    },
})

export default BoxModelScreen
