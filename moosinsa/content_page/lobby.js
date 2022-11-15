import { StyleSheet, View ,Text} from "react-native";
import Swiper, {} from "react-native-swiper"
export default function Lobby(){
    return(
    <View style={styles.Screen}>
        <View style={styles.Head}>
            <Text>Head</Text>
        </View>
        <View style={styles.Body}>
            <Swiper style = {styles.swipe}autoplay={1} height={200}>
                <View style ={styles.swiper_view_1}>
                    <Text>first</Text>
                </View>
                <View style ={styles.swiper_view_2}>
                    <Text>second</Text>
                </View>
                <View style ={styles.swiper_view_3}>
                    <Text>third</Text>
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
            flex:1.5,
            backgroundColor:'#312124'
        },
        Body:{
            flex:3,
            backgroundColor:'#213121'
        },
        Footer:{
            flex:1
        },
        swipe:{
            
            margin:10,
            backgroundColor:"pink"
        },
        swiper_view_1:{
            flex:1,
            backgroundColor:'white'
        },
        swiper_view_2:{
            flex:1,
            backgroundColor:'white'
        },
        swiper_view_3:{
            flex:1,
            backgroundColor:'white'
        },
        feed_view:{
            flex:1
        }
    }
)