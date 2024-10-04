import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxModelScreen = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}/>
            <View style={styles.child2}/>
            <View style={styles.child3}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        width: 400,
        height: 500,
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    child1: {
        backgroundColor: "orange",
        width: 100,
        height: 100
    },
    child2: {
        backgroundColor: "blue",
        width: 100,
        height: 100,
        top:100
    },
    child3: {
        backgroundColor: "green",
        width: 100,
        height: 100
    },
})

export default BoxModelScreen
