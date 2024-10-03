import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="Increment" onPress={() => {
            setCounter(prev => prev + 1)
        }} />
        <Button title="Decrrement" onPress={() => {
            setCounter(prev => prev - 1)
        }} />
        <Text>Current count : {counter}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default CounterScreen;