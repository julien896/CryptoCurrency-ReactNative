import axios from 'axios';
import {apiBaseURL} from './.../Utils/Constants';
import {FETCHING_COIN_DATA,FETCHING_COIN_DATA_SUCCESS,FETCHING_COIN_DATA_FAIL} from './.../Utils/ActionTypes'
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';

export default function FetchCoinData(){
    return dispatch => {
        dispatch({FETCHING_COIN_DATA})

        return axios.get (`${apiBaseURL}/v1/ticker/limit=10` )
        .then(res => {
           return dispatch({type:FETCHING_COIN_DATA_SUCCESS,payload:res.data})
        })   
           .catch(err => {
               return dispatch ({type:FETCHING_COIN_DATA_SUCCESS,payload:err})
           })


        }
    }
