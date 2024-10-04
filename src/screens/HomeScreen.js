import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi pramod How are you?</Text>
      <Button
        title="Go to component Screen"
        onPress={() => navigation.navigate("Component")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("List")}>
        <Text>Go to list</Text>
      </TouchableOpacity>

      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to MoreLess Screen"
        onPress={() => navigation.navigate("MoreLessColor")}
      />
      <Button
        title="Go to Input Screen"
        onPress={() => navigation.navigate("Input")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
