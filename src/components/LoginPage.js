import React from 'react';
import {StyleSheet,TextInput,Image,View,Button,ImageBackground,Text } from 'react-native';
import images from '../images/images.jpg';
import logo from '../images/logo.png';
import StackNavigator from 'react-navigation';
class LoginPage extends React.Component {
  render() {
     
    return (
      
        <ImageBackground 
            source={images}
            style={styles.backgroundImage} 
        >
            <View style={styles.login }>
                <View style={styles.headerLogo}>
                    <Image source={logo} style={styles.logoo}/>
                    
                    <Text style={styles.head} >-Lounge </Text>
                    
                </View>
                <TextInput
                    placeholder="Username"
                    style={styles.txt1}
                    placeholderTextColor="#5E066C"
                />
                 <TextInput
                    placeholder="Username"
                    style={styles.txt1}
                    placeholderTextColor="#5E066C"
                />
                 <TextInput
                    placeholder="Username"
                    style={styles.txt1}
                    placeholderTextColor="#5E066C"
                />
                 <TextInput
                    placeholder="Username"
                    style={styles.txt1}
                    placeholderTextColor="#5E066C"
                />
                 <TextInput
                    placeholder="Username"
                    style={styles.txt1}
                    placeholderTextColor="#5E066C"
                />
                
                <TextInput
                    placeholder="Password"
                    style={styles.txt2}
                    placeholderTextColor="#5E066C"
                />
                <Button
                    title="Login"
                    color="#A25FAD"
                    onPress={ () => this.props.navigation.navigate('Home')}
                />
        </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
      login: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
      },
      backgroundImage:{
          width:'100%',
          height:'100%',
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        txt1:{
            width:300,
            
        },
        txt2:{
            width:300,
            marginTop:20,
            marginBottom:20
        },
        head:{
           fontSize:30,
           color:"#5E066C",
           fontWeight:"bold"
           
        },
        logoo:{
            width:50,
            height:50
        },
        headerLogo:{
            flexDirection:"row",
            justifyContent:'space-between',
            marginBottom:10,
            alignItems:'flex-start'
            
            
        }
     });
     export default LoginPage;