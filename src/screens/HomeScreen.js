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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
