import { View,Text,StyleSheet,FlatList,TouchableOpacity,ScrollView ,Image} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons"
import { addProductMyCart ,removeCartItem,deleteMyCartItem} from "../componet/reduxtoolkit/mycartslice";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
function MyCartScreen({ navigation }) {
    const mycartitems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const Cardcart = ({ item }) => {
        return (
            <View style={styles.cartconatiner}>
                <View style={styles.imagebox}>
                    <Image source={item.Image} style={styles.imagestle} />
                </View>
                <View style={styles.namebox}>
                    <Text style={styles.nametext}>{item.name}</Text>
                </View>
                <Text style={styles.pricetext}>₹{item.price}</Text>
                <View style={styles.contityconatiner}>
                    {item.qty !== 0 ? (<TouchableOpacity style={styles.pluscontainer}
                        onPress={() => { dispatch(addProductMyCart(item)); } }>
                        <Text style={styles.plusstyle}>+</Text>
                    </TouchableOpacity>) : null}
                    {item.qty !== 0 ? (
                        <Text style={styles.totalstyle}>{item.qty}</Text>
                    ) : null}
                    {item.qty !== 0 ? (
                        <TouchableOpacity style={styles.minusconatiner}
                            onPress={() => {
                                if(item.qty>1){
                                    dispatch(removeCartItem(item));
                                }
                                else{
                                    dispatch(deleteMyCartItem(item.id));
                                }
                                } }>
                            <Text style={styles.minusstyle}>-</Text>
                        </TouchableOpacity>
                    ) : null}


                </View>

            </View>
        );
    };
    return (
        <GestureHandlerRootView>
            <View>
                <ScrollView>
                    <View style={styles.mainbox}>
                        <Icon name="arrow-back-ios" size={30} onPress={() => navigation.goBack()} />
                        <Icon name="notifications" size={30} />
                    </View>
                    <FlatList
                        data={mycartitems}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Cardcart item={item} />
                        )} />
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
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
export default MyCartScreen;