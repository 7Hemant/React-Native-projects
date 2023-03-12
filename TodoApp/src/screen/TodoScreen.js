import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import axios from "axios";
import { Auth } from "../store/AuthContextProvider";
const screenWidth = Dimensions.get("window").width;
const TodoScreen = () => {
  const authCtx = useContext(Auth);
  const [todos, setTodos] = useState();
  const [tasks, setTasks] = useState([]);
  console.log("-todo screen");
  const config = {
    headers: {
      Authorization: `Bearer ${authCtx?.user}`,
    },
  };

  const addHandler = async () => {
    await axios
      .post("http://192.168.1.35:4000/api/todo/create", { todos }, config)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    await axios
      .get("http://192.168.1.35:4000/api/todo/read", config)
      .then((res) => {
        console.log("---", res.data);
        setTasks(res?.data);
      })
      .catch((error) => console.log(error));
  };
  const deleteHandler = async (id) => {
    console.log("id", id);
    await axios
      .delete(`http://192.168.1.35:4000/api/todo/delete/${id}`, config)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    await axios
      .get("http://192.168.1.35:4000/api/todo/read", config)
      .then((res) => {
        console.log("---", res.data);
        setTasks(res?.data);
      })
      .catch((error) => console.log(error));
  };
  // useEffect(async () => {}, []);
  // axios
  //   .get("http://192.168.1.35:4000/api/todo/read", config)
  //   .then((res) => {
  //     setTasks(res?.data);
  //   })
  //   .catch((error) => console.log(error));
  return (
    <View style={styles.container}>
      <View style={styles.addTodoContainer}>
        <TextInput
          placeholder="enter your task"
          style={styles.textinput}
          onChangeText={(text) => setTodos(text)}
        />
        <Button title="add Task" onPress={addHandler} />
      </View>
      <View style={styles.containerlist}>
        {tasks.length === 0 && <Text style={styles.text}>No Todo</Text>}
        {tasks.map((task) => (
          <View style={styles.listItem} key={task._id}>
            <Text style={styles.text}>{task.todos}</Text>
            <Button
              title="delete"
              style={styles.btn}
              onPress={() => deleteHandler(task._id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    padding: 10,
  },
  addTodoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textinput: {
    width: "75%",
    borderWidth: 2,
    padding: 10,
  },
  containerlist: {
    flexDirection: "column-reverse",
    overflow: "hidden",
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    margin: 10,
    width: "75%",
  },
  btn: {
    textAlignVertical: "center",
  },
});

export default TodoScreen;
