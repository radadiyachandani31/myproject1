import React from "react";
import { View,Text } from "react-native";
import HomeScreen from "./homescreen";
import ProductDetailScreen from "./productDetailscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons"
import { createStackNavigator } from "@react-navigation/stack";
import UserCartScreen from "./usercartscreen";
import MyCartScreen from "./mycartscreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

 /* function Home(){
    <View>
      <Text>Home</Text>
    </View>
   }
  
   const HOME_STACK=()=>{
    return(
      
         <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
         
         </Stack.Navigator>
   )
   }  */
    const AppNavigation=()=>{
      return(
      <NavigationContainer>
          <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#E96E6E',
           }}>
          <Tab.Screen name="HOME_STACK" component={HomeScreen} options={{
              tabBarIcon: ({ focused, size }) => (
                <MaterialIcons name="home" size={size} color={focused ? 'blue' : 'gray'} />
              ),
           
          }}/>
           <Tab.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{
             tabBarIcon: ({ focused, size }) => (
              <MaterialIcons name="info" size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }}/>
          <Tab.Screen name="UserCartScreen" component={UserCartScreen} options={{
             tabBarIcon: ({ focused, size }) => (
              <MaterialIcons name="shopping-cart" size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }}/>
           <Tab.Screen name="MyCartScreen" component={MyCartScreen} options={{
             tabBarIcon: ({ focused, size }) => (
              <MaterialIcons name="shopping-basket" size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }}/>
          
           
      </Tab.Navigator>
    </NavigationContainer>
    )
}
export default AppNavigation;