import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect, useContext } from "react";
// Import Screens
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { MapScreen } from "./screens/MapScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { AuthContext, AuthProvider } from "./providers/authContext";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MapScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

// Tabs for the main app
function MainAppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreenStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="My Meals" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
          <Stack.Screen
            name="MainApp"
            component={MainAppTabs}
            options={{ headerShown: false }}
          />
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
