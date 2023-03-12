import AppNavigator from "./AppNavigator";
import AuthContextProvider from "./src/store/AuthContextProvider";
export default function App() {
  return (
    <>
      <AuthContextProvider>
        <AppNavigator />
      </AuthContextProvider>
    </>
  );
}
