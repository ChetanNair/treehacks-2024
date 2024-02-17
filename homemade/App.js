import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect, useContext } from "react";
// Import Screens
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { ConfirmationScreen } from "./screens/ConfirmationScreen";
import { MapScreen } from "./screens/MapScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { AuthContext, AuthProvider } from "./providers/authContext";
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
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function NavigationController(props) {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
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
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Signup"
              component={SignupScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Main navigation setup
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationController />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
