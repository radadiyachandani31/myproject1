import { View,Text,StyleSheet,FlatList,Image,ScrollView,TouchableOpacity} from "react-native";
import foods from "../componet/food";
import Icon from "@expo/vector-icons/MaterialIcons"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux";
import { addProductMyCart } from "../componet/reduxtoolkit/mycartslice";
import { useNavigation } from "@react-navigation/native";

const UserCartScreen=()=>{
    const navigation=useNavigation();
    const myproducts=useSelector(state=>state.product);
    const mycartitems=useSelector(state=>state.cart)
    console.log('added product in cart',mycartitems)
    const dispatch=useDispatch();

    const Cardcart=({item})=>{
       
       return(
            <View style={styles.cartconatiner}>
                <View style={styles.imagebox}>
                    <Image source={item.Image} style={styles.imagestle}/>
                </View>
                <View style={styles.namebox}>
                     <Text style={styles.nametext}>{item.name}</Text>
                </View>
                <Text style={styles.pricetext}>₹{item.price}</Text>
                <View style={styles.contityconatiner}>
              <TouchableOpacity style={styles.addtobox}
              onPress={()=>{dispatch(addProductMyCart(item))}}>
                    <Text style={styles.addtotext}>Add To Cart</Text>
              </TouchableOpacity> 
                  
              {/* <TouchableOpacity style={styles.pluscontainer}>
                      <Text style={styles.plusstyle}>+</Text>
                    </TouchableOpacity>
                <Text style={styles.totalstyle}>0</Text>
               <TouchableOpacity style={styles.minusconatiner}>
                  <Text style={styles.minusstyle}>-</Text>
               </TouchableOpacity>*/}
            </View>
        
            </View>
        )
    }
    const getTotalePrice=()=>{
       let total=0;
       mycartitems.map((item)=>{
        total=total+item.qty*item.price
       })
       return total;
      }
    return(
       <GestureHandlerRootView>
           <View>
           <ScrollView>
           <View style={styles.mainbox}>
              <Icon name="arrow-back-ios" size={30}  onPress={()=>navigation.goBack()}/>
              <Icon name="notifications" size={30}/> 
           </View>
           <FlatList
           data={myproducts}
           showsVerticalScrollIndicator={false}
           renderItem={({item})=>(
            <Cardcart item={item}/>
           )
           }/> 
           {
            mycartitems.length>0 ? (
             <><View style={styles.box1}>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: '#000' }}>{'Added item ' + ' (' + mycartitems.length + ')'}</Text>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: '#000' }}>{'Total :' + ' ' + getTotalePrice()}</Text>
                </View>
                <View style={styles.box2}>
                <TouchableOpacity onPress={()=>navigation.navigate('MyCartScreen')}>
                  <Text>View Cart</Text>
                </TouchableOpacity>
                 </View></>):null
           }
           </ScrollView>
        </View>
       </GestureHandlerRootView>
    )
}
const styles=StyleSheet.create({
    mainbox:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        marginLeft:20,
        marginRight:20
    },
    cartconatiner:{
            height:140,
            width:'100%',
            marginLeft:20,
            marginRight:20,
            marginBottom:20,
            backgroundColor:'#fff',
            elevation:13,
    },
    imagebox:{
        height:130,
        width:120,
        marginLeft:10,
    },
    imagestle:{
        height:130,
        width:140,
        resizeMode:'contain',
        marginTop:10,
        borderRadius:10
    },
    namebox:{
        width:300,
        height:120,
        position:'absolute',
        marginHorizontal:150,
        marginTop:5
    },
    nametext:{
        fontSize:17,
        fontWeight:'bold'
    },
    pricetext:{
        marginLeft:160,
        marginVertical:-90,
        fontSize:16,
        fontWeight:'500',
    },
    contityconatiner:{
        flexDirection:'row',
        marginHorizontal:160,
        bottom:60,
        width:'100%'
    
    },
    pluscontainer:{
          height:30,
          width:30,
          backgroundColor:'green',
          alignItems:'center',
          justifyContent:'center',
          marginRight:5,
          marginLeft:10
    },
    minusconatiner:{
        height:30,
        width:30,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        marginRight:5
    },
    plusstyle:{
        fontSize:17,
        fontWeight:'bold',
    },
    minusstyle:{
        fontSize:17,
        fontWeight:'bold',
    },
    totalstyle:{
        fontSize:17,
        fontWeight:'bold',
        marginRight:5
    },
    addtobox:{
        height:36,
        width:120,
        backgroundColor:'green',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        
      },
      addtotext:{
         fontSize:13,
         fontWeight:'600',
         color:'#fff',
        
      },
      box1:{
        top:15,
        marginLeft:30,
        
      },
      box2:{
        width:'100%',
         marginHorizontal:250,
         bottom:20,
         height:36,
         width:120,
         backgroundColor:'green',
         alignItems:'center',
         justifyContent:'center',
         borderRadius:10
      }
})
export default UserCartScreen;