import * as React from 'react';
import {StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Eating, SafeAreaViewBase,SafeAreaView } from 'react-native';
import { faker } from '@faker-js/faker';



const { width, height } = Dimensions.get('screen');


faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});


const BG_IMG = 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tim'
const SPACING = 20;
const AVATAR_SIZE = 70;

const FlatListing = () => {
  return <View style={{flex: 1, backgroundColor: '#fff'}}>
    <Image 
      source = {{ uri: BG_IMG}}
      style={StyleSheet.absoluteFillObject}
      blurRadius ={80}
    />
    <FlatList
      data = {DATA}
      keyExtractor = {item => item.key}
      contentContainerStyle = {{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42
      }}
      renderItem = {({item, index}) => {
          return <View style={{flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16,
             shadowColor: "#000",
             shadowOffset: {
               width: 0,
               height: 10
             },
             shadowOpacity: .3,
             shadowRadius: 10
          
           }}> 
            <Image 
              source={{uri: item.image}}
              style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                      marginRight: SPACING/2
              }}
              
            />
            <View>
              <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
              <Text style={{fontSize: 18, opacity: .7}}>{item.jobTitle}</Text>
              <Text style={{fontSize: 14, opacity: .8, color: '#0099c'}}>{item.email}</Text>
            </View>
          </View>
      }}
    
    />
  </View>
}


export default FlatList;
