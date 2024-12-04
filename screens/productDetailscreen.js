import { View,Text ,StyleSheet,Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialIcons"
import { ScrollView } from "react-native-gesture-handler";
import {GestureHandlerRootView} from "react-native-gesture-handler"
const ProductDetailScreen=({route,navigation})=>{
  const item=route.params;
    return(
      <GestureHandlerRootView>
         <ScrollView  contentContainerStyle={{paddingBottom:150}}>
           <View style={styles.mainbox}>
              <Icon name="arrow-back-ios" size={30}  onPress={()=>navigation.goBack()}/>
              <Icon name="notifications" size={30}/> 
           </View>
           <View style={styles.imgbox}>
             <Image source={item.Image} style={styles.imgstyle}/>
           </View>
           <View style={styles.namebox}>
               <Text style={styles.nametext}>{item.name}</Text>
               <Text style={styles.nametext}>₹{item.price}</Text>
           </View>
           <Text style={styles.ratingtext}>{item.rating} ⭐ ⭐ ⭐ ⭐</Text>
           <Text style={styles.descriptiontext}>Description :</Text>
           <View style={styles.descbox}>
              <Text style={styles.desctext}>{item.description}</Text>
           </View>
           <Text style={styles.descriptiontext}>Ingredients :</Text>
           <Text style={styles.ingretext}>{item.ingredients}</Text>
            <TouchableOpacity style={styles.buybtn} onPress={()=>navigation.navigate('UserCartScreen')}>
               <Text style={styles.buytext} >Buy Now</Text>
            </TouchableOpacity>
       </ScrollView>
      </GestureHandlerRootView>
    )
}
const styles=StyleSheet.create({
  mainbox:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
  },
  imgbox:{
        height:300,
        width:'100%',

  },
  imgstyle:{
    height:300,
    width:'100%',
    resizeMode:'contain'
  },
  nametext:{
    marginLeft:20,
    fontSize:21,
    fontWeight:'bold',
    marginTop:20
  },
  namebox:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:20
  },
  ratingtext:{
    marginLeft:20,
    marginTop:10,
    fontSize:15,
    fontWeight:'bold'
  },
  descriptiontext:{
    marginTop:10,
    marginLeft:20,
    fontSize:17,
    fontWeight:'bold'
  },
  descbox:{
    marginTop:5,
    marginLeft:20,
    marginRight:20,
    fontSize:12
  },
  ingretext:{
    marginLeft:20,
    marginTop:5,
    fontWeight:'400'
  },
  buybtn:{
    height:60,
    width:'80%',
    backgroundColor:'#F9813A',
    marginLeft:40,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },
  buytext:{
    fontSize:19,
    fontWeight:'bold',
    color:'#fff'
  }
})
export default ProductDetailScreen;