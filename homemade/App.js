import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { ConfirmationScreen } from "./screens/ConfirmationScreen";
import { MapScreen } from "./screens/MapScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Detail Stack for navigating from Home to Detail and Confirmation without tabs
function DetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeDetail" component={DetailScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
}

// Tabs for the main app
function MainAppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="MapScreen" component={MapScreen} />
    </Tab.Navigator>
  );
}

// Main navigation setup
function App() {
  const isSignedIn = true;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="MainApp"
                component={MainAppTabs}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="DetailStack"
                component={DetailStack}
                options={{ headerShown: false, presentation: "modal" }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
