import React from 'react';
import{View,Text,Stylesheet,Image} from 'react-native';
import {images} from '../Utils/CoinIcons';

const styles = Stylesheet.create ({
    container: {
        display:"flex",
        marginBottom: 20,
        borderBottomColor: '#e5e5e5',
        padding: 20

    },
    upperRow:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom:15,   
    },
    coinSymbol:{
        marginTop: 10,
        marginLeft: 20,
        marginRight:5,
        fontWeight:'bold'

    },
    coinName:{
        marginTop: 10,
        marginLeft: 5,
        marginRight:20
    },
    separator:{
        marginTop:18,


    } ,
    coinPrice:{
        martginTop:10,
        marginLeft:'auto',
        marginRight:'10',
        fontWeight:'bold',
    },
    image:{
        widith:35,
        height:35,
    },
    moneySymbol:{
        fontWeight:'bold',

    },
    statisticsContainer:{
        display:'flex',
        borderTopColor:'#2196F3',
        borderTopWidith:2,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around',

    },
    percentChangesPlus:{
        color:"#8BC34A",
        fontWeight:'bold',
        marginLeft:5,
    },
    percentChangesMinus:{
        color:"#e3aa1a",
        fontWeight:'bold',
        marginLeft:5, 
    }

})

const{
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    separator,
    percentChangesPlus,
    percentChangesMinus,
} = styles;

const CoinCard = ({symbol, coin_name, price_usd,percent_change_24hr,percent_change_7d}) => {
    return (
        <View style = {Container}>
            <View style = {upperRow}>
                <Image style ={styles.image} source={{url: images[symbol]}}/>
                <Text style = {coinSymbol}>{Symbol}</Text> 
                <Text style = {separator}></Text>
                <Text style = {coinName}>{coin_name}</Text>
                <Text style = {coinPrice}>{price_usd}<Text style = {moneySymbol}> $ </Text></Text>


            </View>
            <View style={statisticsContainer}>
            <Text> 24hr:
            <Text style = {percent_change_24hr < 0 ? percentChangesMinus: percentChangePlus}>{percent_change_24hr} %</Text>
            </Text>
            
            <Text> 7d:
            <Text style = {percent_change_7d < 0 ? percentChangesMinus: percentChangePlus}>{percent_change_7d} %</Text>
            </Text>
        
        </View>
            </View>


        

    )

}