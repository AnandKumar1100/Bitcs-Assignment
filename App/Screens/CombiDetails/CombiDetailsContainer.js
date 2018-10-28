import React, { Component } from "react"
import CombiDetails from './CombiDetailsRender'
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class CombiDetailsContainer extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
   }


    render(){
        return(
            <CombiDetails/>
        )
    }

}

export default CombiDetailsContainer