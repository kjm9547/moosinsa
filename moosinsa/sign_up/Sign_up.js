import { Component, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
const { View, Text, TextInput, Button } = require("react-native");
import Head from "../main_page/Head";
import LogContext from "../contexts/LogContext";
//회원가입 페이지
export default function Sign_up({navigation}){
  
  const {user,setUser} = useContext(LogContext)
  /* 업데이트 확인용
  useEffect(()=>{
    console.log(user);

  },[user])
 */
  const user_insert = (text1,text2) =>{
    const new_user = {id:text1,password:text2}
    setUser(user.concat(new_user))
  }
 
  useEffect(()=>{
    async function save(){
      try{
        await AsyncStorage.setItem('user',JSON.stringify(user))
      }
      catch(e){
        console.log('fail');
      }
    }
    save();
  },[user]);
 
  const [user_id,setId] = useState('')
 
  const [user_pw,setPw] = useState('')
  
        return(
          <View>
            <Head></Head>
          <TextInput
          placeholder="아이디"
          value={user_id}
          onChangeText={setId}
         />
         <Text value="ss"></Text>
          <TextInput
            placeholder="비밀번호"
            value={user_pw}
            onChangeText={setPw}
          ></TextInput>
          <Button onPress={()=> user_insert(user_id,user_pw)
          } title="완료"></Button>
          <Button title="back"
              onPress={()=>navigation.pop()}
              ></Button>
      </View>
      
        )    
    }
    
    
    
    

