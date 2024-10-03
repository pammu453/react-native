import React, { useReducer } from "react";
import { View } from 'react-native'
import ColorComponent from "../components/ColorComponent";

const colorIncrementDecrementStep = 20

const initialColor = {
    red: 0,
    green: 0,
    blue: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'RED':
            return state.red + action.payload < 0 || state.red + action.payload > 255 ? state : { ...state, red: state.red + action.payload }
        case 'GREEN':
            return state.green + action.payload < 0 || state.green + action.payload > 255 ? state : { ...state, green: state.green + action.payload }
        case 'BLUE':
            return state.blue + action.payload < 0 || state.blue + action.payload > 255 ? state : { ...state, blue: state.blue + action.payload }
        default:
            return state
    }
}

const MoreLessColor = () => {

    const [state, dispatch] = useReducer(reducer, initialColor)
    const { red, green, blue } = state

    return <View>
        <ColorComponent
            color="Red"
            onIncrease={() => dispatch({ type: 'RED', payload: colorIncrementDecrementStep })}
            onDecrease={() => dispatch({ type: 'RED', payload: -colorIncrementDecrementStep })}
        />
        <ColorComponent
            color="Green"
            onIncrease={() => dispatch({ type: 'GREEN', payload: colorIncrementDecrementStep })}
            onDecrease={() => dispatch({ type: 'GREEN', payload: -colorIncrementDecrementStep })}
        />
        <ColorComponent
            color="Blue"
            onIncrease={() => dispatch({ type: 'BLUE', payload: colorIncrementDecrementStep })}
            onDecrease={() => dispatch({ type: 'BLUE', payload: -colorIncrementDecrementStep })}
        />
        <View style={{
            height: 100,
            width: 100,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }} />
    </View>
}

export default MoreLessColor;