import React from 'react';
import { StyleSheet, Text, View ,FlatList,Dimensions } from 'react-native';
import Word from '../components/Word';

import sample  from '../Data';
// const AppContainer = createAppContainer(AppNavigator);


const screenWidth= Math.round(Dimensions.get('window').width);
const screenHeight= Math.round(Dimensions.get('window').height);

export default function listWord({navigation}) {
    
  return (
    <View style={styles.container}>
        <View style= {styles.header} > 
        {/* <Text> header </Text> */}
        </View>
       
        
        <FlatList   data ={ sample.listWordData}
            renderItem={  ({item})=> <Word unit={item}
                 onPress ={()=>navigation.navigate('WordDetail')}
            /> }
            keyExtractor={item => `${item.id}`} 
            scrollEnabled={true}  
            showsVerticalScrollIndicator={false}
        />
        <View  style={styles.footer} >
              <Text> footer </Text>
        </View>

    </View>
    )
}


//styled componet
const styles = StyleSheet.create({
  container: {
    width :'100%',
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header:{
    paddingTop:50,
    backgroundColor :'#0ab',
    height:100
  },
  footer:{
    
    position: 'absolute',
    top:screenHeight-100,
    height:100,
    width: screenWidth,
    justifyContent :'center',
    alignItems:"center",
    backgroundColor:'#fffa00',
    borderBottomWidth: 10,
    borderRadius:50,
    borderStyle:'solid',
    borderBottomColor:'#daa520'
    // #FF8C00
  }

});

