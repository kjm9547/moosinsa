import React, { useContext } from 'react';
import { View,Text, StyleSheet,TextInput,Button } from 'react-native';
import Head from './Head'
import LogContext from '../contexts/LogContext';
function Home({navigation}){
    const {user,setUser} = useContext(LogContext);
    //console.log(user);

    /*
        로그인 버튼 클릭 시 인증 절차 추가 필요
        user에 회원 정보 등록 완룍
        id && pw 확인 필요
    */
    return(
        
        <View style={styles.main_st}>
            <View>
           <Head/>
           <View>
        <TextInput
            placeholder="Id"/>
        <TextInput
            placeholder="Password"/>
        <Button title="login"
            onPress={()=>{navigation.navigate('Lobby')}}/>
        <Button title="sign up"
            onPress={()=>navigation.navigate('Sign_up')}
        ></Button>
    </View>
           </View>
           <Text>tt</Text>
        </View>
    );
};

const styles  = StyleSheet.create({
    main_st:{
        //flex:1
    }
})
export default Home;