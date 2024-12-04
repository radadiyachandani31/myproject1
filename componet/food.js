import React from 'react';
import { View,Text } from 'react-native';
const foods=[
    {
        id:1,
        name:'Veg-Pizza',
        ingredients:' oregano, tomato, olives, mozzarella ',
        price:870,
        Image:require('../assets/pizza2.jpeg'),
        rating:4.0,
        description:'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce.',
    },
    {
        id:2,
        name:'Romen noodles',
        ingredients:'broccoli, bean sprouts, peppers,',
        price:210,
        rating:4.0,
        Image:require('../assets/noodles1.jpeg'),
        description:'Noodles are a type of food made from unleavened dough that is rolled out and cut into long strips or strings. They are a common ingredient in Asian and European cuisine They are a staple food in many cultures and can be found in a variety of shapes, including waves, helices, tubes, strings, or shells. Noodles are often cooked in boiling water'
    },
    {
        id:3,
        name:'cold',
        ingredients:'-',
        price:110,
        rating:4.0,
        Image:require('../assets/colddrink1.jpeg'),
        description:' A cold drink is a beverage that is chilled or has a lower temperature than normal. In the Southern United States, the term "cold drink" is often used to refer to a soft drink COLD BEVERAGES means all carbonated or non-carbonated naturally or artificially flavored beverages, bottled drinking water and bottled 100% juice as defined below, which are dispensed from refrigerated vending machines.'
    },
    {
        id:4,
        name:'Chess Pizza',
        ingredients:'Chess, crust, sauce, and toppings',
        price:'410',
        Image:require('../assets/pizza4.jpeg'),
        rating:4.0,
        description:'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce.',
    },
    {
        id:5,
        name:' Chess Meggi',
        ingredients:'Meggi',
        price:'100',
        rating:4.0,
        Image:require('../assets/noodles2.jpeg'),
        description:'In a pan take 1.5 cup water and boil it then add MAGGI 2 min noodles and masala in boiling water and cook for 5 min. at low flame. On other side boil peas and potatoes together in a pressure cooker for 5 to 7 min. or 2-3 whistles.'
    },
    {
        id:6,
        name:'Onion Burger',
        ingredients:'Onion,ground bee,patato tikki',
        price:'220',
        rating:4.0,
        Image:require('../assets/burger5.jpeg'),
        description:'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor Burgers are considered an American food but are popular around the world. In Japan, teriyaki burgers are popular.'
    },
    
    {
        id:7,
        name:'double Chess Pizza',
        ingredients:'chess, crust, sauce, and toppings',
        price:'720',
        rating:4.0,
        Image:require('../assets/pizza3.jpeg'),
        description:'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce.',
    },

    {
        id:8,
        name:'Coca',
        ingredients:'chess',
        price:'70',
        rating:4.0,
        Image:require('../assets/colddrink3.jpeg'),
        description:' A cold drink is a beverage that is chilled or has a lower temperature than normal. In the Southern United States, the term "cold drink" is often used to refer to a soft drink COLD BEVERAGES means all carbonated or non-carbonated naturally or artificially flavored beverages, bottled drinking water and bottled 100% juice as defined below, which are dispensed from refrigerated vending machines.' 
    },
    {
        id:9,
        name:'Panir Burger',
        ingredients:'chess,raw onion, lettuce, bacon, mayonnaise,',
        price:'220',
        rating:4.0,
        Image:require('../assets/burger7.jpeg'),
        description:'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor Burgers are considered an American food but are popular around the world. In Japan, teriyaki burgers are popular.'
    },
    {
        id:10,
        name:'Chess noodles',
        ingredients:'Chess,broccoli, bean sprouts, peppers,',
        price:'370',
        rating:4.0,
        Image:require('../assets/noodles4.jpeg'),
        description:'Noodles are a type of food made from unleavened dough that is rolled out and cut into long strips or strings. They are a common ingredient in Asian and European cuisine They are a staple food in many cultures and can be found in a variety of shapes, including waves, helices, tubes, strings, or shells. Noodles are often cooked in boiling water'
    },
    {
        id:11,
        name:'Tikki Burger',
        ingredients:'chess,raw onion, lettuce, bacon, mayonnaise,',
        price:'220',
        rating:4.0,
        Image:require('../assets/burger3.jpeg'),
        description:'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor Burgers are considered an American food but are popular around the world. In Japan, teriyaki burgers are popular.'
    },
    {
        id:12,
        name:'Choclate Drink',
        price:120,
        ingredients:'-',
        rating:4.0,
        Image:require('../assets/colddrink4.jpeg')  ,
        description:' A cold drink is a beverage that is chilled or has a lower temperature than normal. In the Southern United States, the term "cold drink" is often used to refer to a soft drink COLD BEVERAGES means all carbonated or non-carbonated naturally or artificially flavored beverages, bottled drinking water and bottled 100% juice as defined below, which are dispensed from refrigerated vending machines.' 
    },
    {
        id:13,
        name:'Chess Burger',
        ingredients:'chess,ground bee, onions, ',
        price:210,
        rating:4.0,
        Image:require('../assets/burger6.jpeg'),
          description:'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor Burgers are considered an American food but are popular around the world. In Japan, teriyaki burgers are popular.'
    },
    {
        id:14,
        name:'combo coldrinks',
        ingredients:'-',
        price:'690',
        rating:4.0,
        Image:require('../assets/colddrink5.jpeg'),
        description:' A cold drink is a beverage that is chilled or has a lower temperature than normal. In the Southern United States, the term "cold drink" is often used to refer to a soft drink COLD BEVERAGES means all carbonated or non-carbonated naturally or artificially flavored beverages, bottled drinking water and bottled 100% juice as defined below, which are dispensed from refrigerated vending machines.'
    },
    {
        id:15,
        name:'Wheat Pizza ',
        ingredients:'Wheat, oregano, tomato, olives, mozzarella',
        price:'470',
        rating:4.0,
        Image:require('../assets/pizza1.jpeg'),
        description:'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce.',
    },
 
    {
        id:16,
        name:'Corian noodles',
        ingredients:'broccoli, bean sprouts, peppers,',
        price:'360',
        rating:4.0,
        Image:require('../assets/noodles.jpeg'),
        description:'Noodles are a type of food made from unleavened dough that is rolled out and cut into long strips or strings. They are a common ingredient in Asian and European cuisine They are a staple food in many cultures and can be found in a variety of shapes, including waves, helices, tubes, strings, or shells. Noodles are often cooked in boiling water',
    },
    
];
export default foods;