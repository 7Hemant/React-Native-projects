import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screen/LoginScreen";
import TodoScreen from "./src/screen/TodoScreen";
import { useState, useContext } from "react";
import { Auth } from "./src/store/AuthContextProvider";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const [user, setUser] = useState("");
  const authCtx = useContext(Auth);

  console.log(authCtx);
  console.log("-app navigation");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authCtx.user ? (
          <Stack.Screen name="TodoList" component={TodoScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TodoList" component={TodoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
