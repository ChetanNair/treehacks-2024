import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { MapScreen } from "./screens/MapScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

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

// Main navigation setup
function App() {
  const isSignedIn = true;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!isSignedIn ? (
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
