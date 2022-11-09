import React from 'react';
import { View,Text, StyleSheet,TextInput,Button } from 'react-native';
import Head from './Head'

function Home({navigation}){
    
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
        ></Button>
        <Button title="sign up"
            onPress={()=>navigation.navigate('Sign_up')}
        ></Button>
    </View>
           </View>
        </View>
    );
};

const styles  = StyleSheet.create({
    main_st:{
        //flex:1
    }
})
export default Home;