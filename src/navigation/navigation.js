import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login/Login.screen'
import Register from '../screens/Register/Register.screen'
import Home from '../screens/Home/Home.screen'
const AuthStack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()
const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  )
}

const HomeNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      {/* add your another screen here using -> MainStack.Screen */}
    </MainStack.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={AuthNavigation}
        />

        <Stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
          component={HomeNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
