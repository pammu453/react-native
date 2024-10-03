import React, { useReducer } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const steps = 1

const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + action.payload }
        case "DECREMENT":
            return { ...state, counter: state.counter - action.payload }
        default:
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { counter } = state

    console.log(state)

    return <View>
        <Button title="Increment" onPress={() => dispatch({ type: "INCREMENT", payload: steps })} />
        <Button title="Decrrement" onPress={() => dispatch({ type: "DECREMENT", payload: steps })} />
        <Text>Current count : {counter}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default CounterScreen;