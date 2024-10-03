import React, { useState } from "react"
import { View, Button, FlatList } from "react-native"

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    const generateColor = () => {
        setColors([...colors, randomRgb()])
    }

    return <View>
        <Button title="Add Color" onPress={generateColor} />

        <FlatList
            data={colors}
            keyExtractor={item=> item}
            renderItem={({ item }) => {
                return <View style={{
                    height: 100,
                    width: 100,
                    backgroundColor: item
                }}></View>
            }}
        />
    </View>
}

const randomRgb = () => {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

export default ColorScreen;
