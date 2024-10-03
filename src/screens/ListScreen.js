import React from "react";
import { Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: "Pramod", age: 200 },
        { name: "Ravi", age: 20 },
        { name: "Suresh", age: 29 },
        { name: "Mahesh", age: 21 },
        { name: "Rajesh", age: 24 },
        { name: "Rohan", age: 23 },
        { name: "Sachin", age: 288 },
    ]
    console.log("ListScreen rendered");


    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={({ item }) => {
                return <Text style={styles.listStyle}>{item.name} - {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    listStyle: {
        margin: 60
    },
    ageListStyle: {
        marginVertical: 40
    }
})

export default ListScreen;