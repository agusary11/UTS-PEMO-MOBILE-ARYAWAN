import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Lightbox from 'react-native-lightbox-v2';
export default function App() {
  const clickHandler = () => {
    alert('Floating Button clicked')
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowUpper}>
        <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>M</Text>
              </View>
            </View>
            <Entypo name="twitter" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
          </View>
        </View>
      <ScrollView style={styles.container}>
       {data.map(val => {
         return(<View style={styles.wrapper}>
          <View style={styles.hederWrapper}>
            <View style={styles.iconWrapper}>
              <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>{val.id}</Text>
              </View>
            </View>
              <Text style={styles.usernameText}>{val.author}</Text>
            </View>
            <View>
            <Entypo name="dots-three-vertical" size={22} color="black" />
            </View>
          </View>
          <Lightbox>
          <View style={styles.box}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: val.url,
        }}
      />
        </View>
        </Lightbox>
        <View>
          <View style={styles.iconRow}>
          <EvilIcons name="comment" size={24} color="black" />
          <EvilIcons name="retweet" size={24} color="black" />
          <EvilIcons name="heart" size={24} color="black" />
          <EvilIcons name="share-google" size={24} color="black" />
          </View>
        </View>
          </View>)
       })}
      </ScrollView>
      
          <TouchableOpacity 
          style={styles.TouchableOpacity}
          onPress={clickHandler}>
            
            <Image
            style={styles.floatingButton}
            source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/79/fd/aa/79fdaaaa-4b93-4d66-89e9-3d8b721fff16/source/512x512bb.jpg'}} />
          </TouchableOpacity>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowBottom}>
        <Entypo name="home" size={24} color="black" />
        <EvilIcons name="search" size={24} color="black" />
        <EvilIcons name="bell" size={24} color="black" />
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  wrapper:{
    marginTop: 10
  },
  scroll:{
    height: 150,
    backgroundColor: '#000',
  },
  box:{
    width: '100%',
    height: 300,
    backgroundColor: '#C2C',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  touch:{
    backgroundColor: '#F54',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10
  },
  tinyLogo:{
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 30
  },
  iconWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoContainer:{
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
    
  },
  logoWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'red',
    padding: 2
  },
  hederWrapper:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  usernameText:{
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16
  },
  iconRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 60,
    marginRight: 10,
    marginTop: 10
  },
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 70

  },
  floatingButton:{
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 100,
   
  },
  bottomIcon:{
    padding: 10
  },
  iconRowBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  iconRowUpper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

const data=[
  {
    id: '0',
    author: 'Agnez Mo',
    width: 5616,
    height: 3744,
    url: "https://cdn06.pramborsfm.com/storage/app/media/tr:w-700,f-jpg/AGNEZ%20MO-20200719173908.jpg   ",
  },
  {
    id: '1',
    author: 'Raisa',
    width: 5616,
    height: 3744,
    url: "https://cdn06.pramborsfm.com/storage/app/media/tr:w-700,f-jpg/RAISA-20200708121935.png ",
  },
  {
    id: '2',
    author: 'Citra Kirana',
    width: 5616,
    height: 3744,
    url: "https://cdn06.pramborsfm.com/storage/app/media/tr:w-700,f-jpg/Prambors/Editorial/CITRA%20KIRANA-20201118073051.png ",
  },
  {
    id: '3',
    author: 'Moudy ayunda',
    width: 5616,
    height: 3744,
    url: "https://cdn06.pramborsfm.com/storage/app/media/tr:w-700,f-jpg/MAUDY%20AYUNDA-20200708123329.jpg ",
  },
  {
    id: '4',
    author: 'wilona',
    width: 5616,
    height: 3744,
    url: "https://cdn06.pramborsfm.com/storage/app/media/tr:w-700,f-jpg/Prambors/Editorial/Natasha%20Wilona-20201118074230.jpg",
  },
  {
    id: '5',
    author: 'cinta laura ',
    width: 5616,
    height: 3744,
    url: "https://cdn06.pramborsfm.com/storage/app/media/tr:w-700,f-jpg/CINTA%20LAURA-20200707153539.jpg",
  },
  {
    id: '6',
    author: 'I Putu Agus Aryawan',
    width: 5616,
    height: 3744,
    url: "https://cdn.idntimes.com/content-images/community/2021/12/polish-20211202-041240937-460ffc946d2e7ce0516945631f53a13c-18b78b63472f408aed8f37948315d8ad.jpg",
  },
]