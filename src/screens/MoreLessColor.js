import React, { useState } from "react";
import { View } from 'react-native'
import ColorComponent from "../components/ColorComponent";

const MoreLessColor = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const colorIncrementDecrementStep = 20

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                break;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                break;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                break;
            default:
                console.log("Invalid color");
        }
    }

    return <View>
        <ColorComponent
            color="Red"
            onIncrease={() => setColor('red', colorIncrementDecrementStep)}
            onDecrease={() => setColor('red', -colorIncrementDecrementStep)}
        />
        <ColorComponent
            color="Green"
            setColor={setGreen}
            onIncrease={() => setColor('green', colorIncrementDecrementStep)}
            onDecrease={() => setColor('green', -colorIncrementDecrementStep)}
        />
        <ColorComponent
            color="Blue"
            setColor={setBlue}
            onIncrease={() => setColor('blue', colorIncrementDecrementStep)}
            onDecrease={() => setColor('blue', -colorIncrementDecrementStep)}
        />
        <View style={{
            height: 100,
            width: 100,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }} />
    </View>
}

export default MoreLessColor;