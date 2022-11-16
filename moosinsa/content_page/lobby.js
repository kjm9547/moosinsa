import { useState } from "react";
import { StyleSheet, View ,Text, Button, Pressable, Image, ScrollView} from "react-native";
import Swiper, {} from "react-native-swiper"
import Icon from 'react-native-vector-icons/AntDesign'

export default function Lobby(){
    
    return(
    <View style={styles.Screen}>
        <View style={styles.Head}>
            <Pressable onPress>
                <Icon name="bells" size = {30} color={"black"}/>
                </Pressable>
        
        <Text style ={styles.logo_style}>MUSINSA</Text>
        <View style= {styles.search_cart}>
        <Icon name="search1" size = {30} color={"black"}/>
        <Icon name="shoppingcart" size = {30} color={"black"}/>
        </View>
           
        </View>
        <View style={styles.Body}>
        <ScrollView >
            <Swiper style = {styles.swipe} autoplay={true} height={200}>
                <View style ={styles.swiper_view_1}>
                    <Image
                    style={styles.img_size} 
                    source={require('/Users/user/Desktop/moosinsa/moosinsa/image/main_show1.png')}resizeMode="stretch"/>
                </View>
                <View style ={styles.swiper_view_2}>
                <Image 
                style={styles.img_size}
                source={require('/Users/user/Desktop/moosinsa/moosinsa/image/main_show2.png')}resizeMode="stretch"/>
                </View>
                <View style ={styles.swiper_view_3}>
                <Image 
                style={styles.img_size}
                source={require('/Users/user/Desktop/moosinsa/moosinsa/image/main_show3.png')}resizeMode="stretch"/>
                    
                </View>
                
            </Swiper>
            <View style={styles.feed_view}>
            <Text>
                Body
            </Text>
            <Text>
                user 상태 전역으로 변경 완료
                해당 영역은 커밋 영역으로 사용 예정
            </Text>
            </View>
            
        </ScrollView>
        </View>
        <View style={styles.Footer}>
            <Text>footer</Text>
        </View>
    </View>
 )
}

const styles = StyleSheet.create(
    {
        Screen:{
            flex:1,  
        },
        Head:{
            flex:0.8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent:"center"
        },
        Body:{
            flex:3,
            borderWidth:1
        },
        Footer:{
            flex:1
        },
        swipe:{
            backgroundColor:"pink"
        },
        swiper_view_1:{
            //flex:1,
            backgroundColor:'white',
            
        },
        swiper_view_2:{
           // flex:1,
            backgroundColor:'white'
        },
        swiper_view_3:{
           // flex:1,
            backgroundColor:'white'
        },
        feed_view:{
            flex:1
        },
       logo_style:{
        fontSize:20,
        fontWeight:"bold",
        color:'black',
        
        marginLeft:20
       },
       search_cart:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
       },
       img_size:{
        width:'auto'
       }
    }
)