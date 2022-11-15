import React, { useEffect, useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
const LogContext = createContext("hi");

export function LogContextProvider({children}){

    const [user,setUser] = useState(
        [
          {id: '123',password: '123' }
        ]
      )
      useEffect(()=>{
        async function load(){
          try{
            const rawUser = await AsyncStorage.getItem('user');
            const saveuser = JSON.parse(rawUser);
            setUser(saveuser);
           
          }
          catch(e){
            console.log('fail save');
          }
        }
        load();},[])
     
      //const [text,setText]=useState("test")
      return(
        <LogContext.Provider value={{user,setUser}}>
            {children}
        </LogContext.Provider>
      )
}
export default LogContext