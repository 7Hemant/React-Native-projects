import React, { useState, useContext, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import axios from "axios";
import { Auth } from "../store/AuthContextProvider";
const FormComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfrimPassword] = useState("");
  const [message, setMessage] = useState();
  const authCtx = useContext(Auth);
  const submitHandler = async () => {
    if (props?.type === "login") {
      const userdata = {
        email,
        password,
      };
      await axios
        .post("http://192.168.1.35:4000/api/auth/login", userdata)
        .then((res) => {
          console.log("res------", res?.data?.token, "--------");
          authCtx.addUser(res?.data?.token);
        })
        .catch((error) => {
          console.log("-------", error);
        });
    }
    if (props?.type === "registor") {
      const userdata = {
        email,
        password,
      };
      if (password !== confirmpassword) {
        setMessage("password is not match");
      } else {
        setMessage("password is match");
        await axios
          .post("http://192.168.1.35:4000/api/auth/register", userdata)
          .then((res) => {
            console.log("res------", res?.data?.token, "--------");
            authCtx.addUser(res?.data?.token);
          })
          .catch((error) => {
            console.log("-------", error);
          });
      }
    }
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        style={style.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        style={style.input}
      />
      {props.type === "registor" ? (
        <>
          <TextInput
            placeholder="Confrim Password"
            onChangeText={(text) => setConfrimPassword(text)}
            style={style.input}
          />
          <Text>{message}</Text>
        </>
      ) : (
        ""
      )}
      <Button
        title={props.type === "registor" ? "registor" : "login"}
        onPress={submitHandler}
      />
    </View>
  );
};

export default FormComponent;

const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 4,
  },
  input: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
    marginVertical: 10,
  },
});
