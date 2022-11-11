import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { LogContextProvider } from './contexts/LogContext'
import RouteStack from './routestack'

function App (){
   return (
      <NavigationContainer>
         <LogContextProvider>
            <RouteStack/>
         </LogContextProvider>
      </NavigationContainer>
   )
}
export default App
