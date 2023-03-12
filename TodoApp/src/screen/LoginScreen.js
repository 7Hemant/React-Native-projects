import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Button, Dimensions } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth } from "../store/AuthContextProvider";
import FormComponent from "../components/FormComponent";
const screenWidth = Dimensions.get("window").width;
const LoginScreen = ({ navigation }) => {
  const [display, setDisplay] = useState(<FormComponent type="login" />);
  const loginHandler = () => {
    setDisplay(<FormComponent type="login" />);
  };
  const registorHandler = () => {
    setDisplay(<FormComponent type="registor" />);
  };

  return (
    <View style={style.container}>
      {display}
      <View style={style.btncontainer}>
        <Button title="login" style={style.btn} onPress={loginHandler} />
        <Button title="registor" color="red" onPress={registorHandler} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    justifyContent: "center",
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default LoginScreen;
