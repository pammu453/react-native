import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const InputScreen = () => {
    const [password, setPassword] = useState("");

    return <View >
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Enter your Password'
            value={password}
            onChangeText={text => setPassword(text)}
        />
        <Text>{password.length < 5 ? "Password must be atleat 5 charecters" : null}</Text>
    </View>
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10
    }
})

export default InputScreen;