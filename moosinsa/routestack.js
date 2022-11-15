import Home from './main_page/Home'
import Lobby from './content_page/lobby'
import Sign_up from './sign_up/Sign_up'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
export default function RouteStack(){
   return(
         <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Sign_up" component={Sign_up}/>
            <Stack.Screen name="Lobby" component={Lobby}/>
         </Stack.Navigator>
   )
}