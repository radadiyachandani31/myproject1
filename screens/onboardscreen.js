
import { View,Text ,StyleSheet,Image, ImageBackground,TouchableOpacity} from "react-native";
import LoginScreen from "./loginscreen";
import { useNavigation } from "@react-navigation/native";
const OnBoradScreen=({navigation})=>{
    <View style={styles.mainbox}>
        <View style={styles.imagebox}>
            <ImageBackground source={require('../assets/italian3.jpeg')} style={styles.imgstyle}>
                <TouchableOpacity style={styles.btnbox} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.odertext}>Order Now</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    </View>
}
const styles=StyleSheet.create({
 mainbox:{
    flex:1 
 },
 imagebox:{
    height:950,
    width:400,
    overflow:'hidden',
 },
 imgstyle:{
     height:950,
     width:400,
     resizeMode:'cover'
 },
 btnbox:{
    top:750,
    width:'100%',
    backgroundColor:'#F5F5F5',
    alignItems:'center',
    justifyContent:'center',
    height:60,
    width:'80%',
    marginLeft:30,
    borderRadius:33,
 },
 odertext:{
  color:'#000'  ,
  fontSize:20,
  fontWeight:'bold'
 }
})
export default OnBoradScreen;