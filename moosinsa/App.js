import React, { useState } from 'react'
import {Button, SafeAreaView, TextInput, View} from 'react-native'
import Home from './main_page/Home'
import Sign_up from './sign_up/Sign_up' 
import P1 from './content_page/p1'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

function App (){
   
   
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name="Sign_up" component={Sign_up}/>
            <Stack.Screen name="P1" component={P1}/>
         </Stack.Navigator>
      </NavigationContainer>
   )
}
export default App
