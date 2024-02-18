import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useContext, useCallback } from "react";
import { Image } from "react-native";
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";

// Import Screens
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { MapScreen } from "./screens/MapScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { PhotoUploadScreen } from "./screens/PhotoUploadScreen";
import { AuthContext, AuthProvider } from "./providers/authContext";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 30, resizeMode: "contain" }}
      source={require("./assets/homemadetext.png")}
    />
  );
}

function MapScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Stack.Screen
        name="DetailScreen"
        options={{ headerShown: false }}
        component={DetailScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PaymentScreen"
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PaymentScreen"
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
}

// Tabs for the main app
function MainAppTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <Image
                source={require("./assets/home.png")}
                style={{ width: size, height: size, tintColor: "#ff851b" }}
              />
            ) : (
              <Image
                source={require("./assets/home.png")}
                style={{ width: size, height: size }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreenStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <Image
                source={require("./assets/map.png")}
                style={{ width: size, height: size, tintColor: "#ff851b" }}
              />
            ) : (
              <Image
                source={require("./assets/map.png")}
                style={{ width: size, height: size }}
              />
            ),
        }}
      />
      {/* TODO: Change component */}
      <Tab.Screen
        name="My Meals"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <Image
                source={require("./assets/meal.png")}
                style={{ width: size, height: size, tintColor: "#ff851b" }}
              />
            ) : (
              <Image
                source={require("./assets/meal.png")}
                style={{ width: size, height: size }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <Image
                source={require("./assets/profile.png")}
                style={{ width: size, height: size, tintColor: "#ff851b" }}
              />
            ) : (
              <Image
                source={require("./assets/profile.png")}
                style={{ width: size, height: size }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function NavigationController(props) {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {true ? ( // TODO: FIX
          <Stack.Screen name="MainApp" component={MainAppTabs} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="PhotoUpload" component={PhotoUploadScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
SplashScreen.preventAutoHideAsync();

// Main navigation setup
function App() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AuthProvider>
        <NavigationController />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
