import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

export default function App() {
  const [GoalTitle, updateGoal] = useState("");
  const [GoalsList, UpdateGoalList] = useState([]);

  const goalUpdateFun = pressedKey => {
    updateGoal(pressedKey);
  };

  const addGoalToListFun = () => {
    UpdateGoalList(currentGoal => [
      ...GoalsList,
      { key: Math.random().toString(), value: GoalTitle }
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <TextInput
          style={styles.inputText}
          onChangeText={goalUpdateFun}
          placeholder="Enter Goal Here...!!!"
          value={GoalTitle}
        />
        <Button title="ADD" onPress={addGoalToListFun} />
      </View>

      <FlatList
        data={GoalsList}
        renderItem={eachGaol => (
          <View style={styles.listItems}>
            <Text> {eachGaol.item.value} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 30
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputText: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "80%"
  },
  listItems: {
    padding: 10,
    margin: 5,
    backgroundColor: "#a3a3a3",
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "gray"
  }
});
