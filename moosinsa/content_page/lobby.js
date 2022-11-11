import { StyleSheet, View ,Text} from "react-native";

export default function Lobby(){
    return(
    <View style={styles.Screen}>
        <View style={styles.Head}>
            <Text>Head</Text>
        </View>
        <View style={styles.Body}>
            <Text>
                Body
            </Text>
            <Text>
                user 상태 전역으로 변경 완료
                해당 영역은 커밋 영역으로 사용 예정
            </Text>
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
        }
    }
)