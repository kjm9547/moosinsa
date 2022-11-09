import { StatusBar, StyleSheet, Text, View } from "react-native";
//import {useSafeAreaInsets} from 'react-native-safe-area-context'
function Head(){
  //  const {top} = useSafeAreaInsets();
    return(
        <View style={styles.title}>
            <Text style={styles.text_st}>
                    MooSinSa
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#212121',
        padding:16,
       
         
    },
    text_st:{
        fontSize:24,
        color:'white',
        textAlign:"center",
    }
})
export default Head;