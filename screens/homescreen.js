import { View,Text ,StyleSheet,TextInput,ScrollView, TouchableOpacity,Image,FlatList,Dimensions } from "react-native";
import {useState} from "react"
import Icon from "@expo/vector-icons/MaterialIcons";
import { GestureHandlerRootView} from "react-native-gesture-handler"
import FoodCategory from "../componet/category";
import foods from "../componet/food";
import ProductDetailScreen from "./productDetailscreen";
import {useNavigation} from "@react-navigation/native"
import AntDesign from "@expo/vector-icons/AntDesign"
const { width } = Dimensions.get('screen');
const cartwidth = width / 2 - 20;

const HomeScreen=()=>{
  
   const CategoryList=()=>{
    const[SelectCategoryIndex,setSelectCategoryIndex] = useState(0)
    return(
       <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={styles.categorylistcontainer}>
       {
          FoodCategory.map((category,index)=>(
            <TouchableOpacity key={index} activeOpacity={0.8}
            onPress={() => setSelectCategoryIndex(index)}>
            <View style={{
              backgroundColor: SelectCategoryIndex == index ?"#F9813A":  '#fedac5' 
              , ...styles.categorybutton
            }}>
              <View style={styles.imageconatiner}>
                <Image source={category.Image} style={styles.image} />
              </View>
              <Text style={{
                color: SelectCategoryIndex == index ? "#fff" : "#F9813A"
                , ...styles.textname
              }}>{category.name}</Text>
            </View>
          </TouchableOpacity>
          ))
       }
       </ScrollView>
    )
   }
   const TodayOffer=()=>{

    return(
       <View>
          <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}>
          <View style={styles.offerbox}>
            <TouchableOpacity style={styles.spcialimagebox} >
            <Image source={require('../assets/specialpizza.jpeg')} style={styles.spcialimage}/>
           <View style={{backgroundColor:'#D4D4D4',height:120}}>
           <Text style={styles.pizzatext}>Pizza</Text> 
            <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:5,fontWeight:'500',marginRight:5,marginLeft:25}}>Fast-Food</Text>
                <Text  style={{marginTop:5,fontWeight:'500',marginRight:10}}>₹295</Text>
                <Text  style={styles.rupess}>₹350</Text>
                
                <View style={{height:30,width:80,backgroundColor:'green',alignItems:'center',justifyContent:'center',borderRadius:4}}>
                   <Text  style={{marginTop:5,fontWeight:'500',marginRight:10 }}>15% off</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buybtnbox}>
                  <Text style={styles.buybuttontext}>Buy now</Text>
               </TouchableOpacity>
           </View>
            </TouchableOpacity>
          </View>  
          <View style={styles.offerbox}>
            <TouchableOpacity style={styles.spcialimagebox}>
                <Image source={require('../assets/colddrinkspical.jpeg')} style={styles.spcialimage}/>
                <View style={{backgroundColor:'#D4D4D4',height:120}}>
                <Text style={styles.pizzatext}>Colddrink</Text> 
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:5,fontWeight:'500',marginRight:10,marginLeft:25}}>Colddrink</Text>
                <Text  style={{marginTop:5,fontWeight:'500',marginRight:10}}>₹185</Text>
                <Text  style={styles.rupess}>₹200</Text>
                <View style={{height:30,width:80,backgroundColor:'green',alignItems:'center',justifyContent:'center',borderRadius:4}}>
                   <Text  style={{marginTop:5,fontWeight:'500',marginRight:10 }}>15% off</Text>
                </View>
                <TouchableOpacity style={{marginTop:40,height:40,width:200,backgroundColor:'#F9813A',justifyContent:'center'
                  ,alignItems:'center',marginLeft:-250,borderRadius:10
                }}>
                  <Text>Buy now</Text>
               </TouchableOpacity>
                </View> 
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.offerbox}>
            <TouchableOpacity style={styles.spcialimagebox}>
                <Image source={require('../assets/burger2.jpeg')} style={styles.spcialimage}/>
                <View style={{backgroundColor:'#D4D4D4',height:120}}>
                <Text style={styles.pizzatext}>Combo burger with francefrice</Text> 
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:5,fontWeight:'500',marginRight:10,marginLeft:25}}></Text>
                <Text  style={{marginTop:5,fontWeight:'500',marginRight:10}}>₹360</Text>
                <Text  style={styles.rupess}>₹400</Text>
                <View style={{height:30,width:80,backgroundColor:'green',alignItems:'center',justifyContent:'center',borderRadius:4}}>
                   <Text  style={{marginTop:5,fontWeight:'500',marginRight:10 }}>15% off</Text>
                </View>
                <TouchableOpacity style={{top:45,marginLeft:-170,alignItems:'center',justifyContent:'center',backgroundColor:'#F9813A'
                  ,height:40,width:200,borderRadius:10
                }}>
                  <Text>Buy now</Text>
               </TouchableOpacity>
                </View> 
                </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
       </View>
    )
   }


  const Recipecart=({food})=>{
  
    const[isliked,SetIsLiked]=useState(false)
    const navigation=useNavigation();
    return(
      <TouchableOpacity
      activeOpacity={0.9} onPress={()=>navigation.navigate('ProductDetailScreen',food)}>
      < ScrollView>
        <View style={styles.cart}>
            <View style={styles.orderimagebox}>
               <Image source={food.Image} style={styles.oderimage}/>
            </View>    
            <Text style={styles.foodstyletext}>{food.name}</Text>
            <Text style={styles.foodprice}>₹{food.price}</Text>
            <TouchableOpacity style={styles.heartconatiner} 
                onPress={()=>SetIsLiked(!isliked)}>
                  {
                    isliked ?
                    ( <AntDesign name="heart" size={20} color={'red'}/>) :
                    ( <AntDesign name="hearto" size={20} color={'red'}/>)
                  }
            </TouchableOpacity>      
        </View>
    </ScrollView> 
     </TouchableOpacity>

    )
   }
    return(
      <GestureHandlerRootView>
         <View>
          <View style={styles.mainbox}> 
            <Icon name="location-on" size={45} color={'#FF0000'}/>
            <View>
                <Text style={styles.loctaiontext}>Location</Text>
                <Text style={styles.delhitext}>Delhi</Text>
            </View>
            <Icon name="list" size={35} marginLeft={210}/>
        </View>
               <View style={styles.searchbox}>
                  <Icon name="search"  marginTop={10} size={25} marginLeft={10}/>
                  <TextInput placeholder='Search food' style={{fontWeight:'500',marginLeft:5}}/>
               </View>
               <ScrollView contentContainerStyle={{paddingBottom:270}}>
               <Text style={styles.categoriestext}>Categories</Text>
               <CategoryList/>
               <Text style={styles.todaytext}>Today's special offers</Text>
               <TodayOffer/>
               <Text style={styles.foodtext}>Order List</Text>
              <FlatList
               data={foods}
               numColumns={2}
               showsVerticalScrollIndicator={false}
               renderItem={({item})=>
                   <Recipecart food={item}/>
               }
                />
               </ScrollView>
       </View>
      </GestureHandlerRootView>
    )
}
const styles=StyleSheet.create({
   mainbox:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:5,
    width:'100%',
   },
   loctaiontext:{
       fontSize:14,
       fontWeight:'500'
   },
   delhitext:{
     fontSize:12,
  
   },
   searchbox:{
      flexDirection:'row',
      marginLeft:20,
      height:45,
      width:364,
      marginTop:1,
      backgroundColor:'#B4B4B4',
      borderRadius:5,
      borderColor:'black',
      borderWidth:1
   },
   categoriestext:{
     marginLeft:20,
     marginTop:5,
     fontSize:17,
     fontWeight:'bold'
   },
   categorylistcontainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical:30,
    marginTop:-18
  },
  categorybutton: {
    height: 50,
    width: 120,
    borderRadius: 30,
    marginRight: 7,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  imageconatiner: {
    height: 40,
    width: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: 'cover'
  },
  textname: {
    fontSize: 13,
    textAlignVertical: 'center',
    marginLeft: 3,
    fontWeight: 'bold'
  },
  swiperimagebox:{
      height:200,
      width:400,
      overflow:'hidden'
  },
  swiperimage:{
    height:200,
    width:400,
    resizeMode:'cover'
  },
  todaytext:{
    marginLeft:20,
    marginTop:-20,
    fontSize:17,
    fontWeight:'bold'
  },
  offerbox:{
      height:300,
      width:300,
      backgroundColor:'#F2F0EF',
      marginLeft:20,
      marginRight:10,
      marginTop:20,
 },
  spcialimagebox:{
    height:200,
    width:300,
    
 },
  spcialimage:{
    height:170,
    width:300,
  
  },
  pizzatext:{
    textAlign:'center',
    fontWeight:'600',
    fontSize:16,
    
  },
  rupess:{
    textDecorationLine:'line-through',
    marginTop:5,
    fontWeight:'600',
    marginRight:10
  },
  foodtext:{
    marginLeft:20,
     fontSize:18,
    fontWeight:'bold',
  
  },
 cart:{
    height:250,
    width:cartwidth,
    backgroundColor:'#fff',
    marginTop:20,
    marginHorizontal:10,
    marginBottom:10,
    elevation:13,
    },
  orderimagebox:{
     height:180,
     width:150,
     overflow:'hidden',
     marginLeft:10
  },
  oderimage:{
    height:180,
    width:150,
    resizeMode:'contain'
  },
  foodstyletext:{
    textAlign:'center',
    fontWeight:'600'
  },
  foodprice:{
     textAlign:'center',
    fontWeight:'600'
  },
  heartconatiner:{
      position:'absolute',
      marginLeft:10,
      marginTop:10
},
buybtnbox:{
    height:40,
    width:200,
    backgroundColor:'#F9813A',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginLeft:50,
    marginTop:10
},
buybuttontext:{
     
}
})
export default HomeScreen;