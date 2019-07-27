import React,{Component} from 'react';
import{View,Text,Stylesheet} from 'react-native';


const Header = () => {
    return(
        <View style = {headerContainer}>
            <Text styles={header}>
                Cypto Currency App 
            </Text>
        </View>
    )
}

const Styles = Stylesheet.create({
headerContainer:{
    display:'flex',
    marginTop:60,
    alignItems:'center'
},
header:{

    fontWeight:'bold',
    fontSize:22
}


})

const {headerContainer,header} = styles;

export default Header;
