import React, { Component } from "react"
import Home from './HomeRender'

class HomeContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            innerContentIndex : -1
        }
   }

   toggleInnerContent = (index) => {
    if(index == this.state.innerContentIndex)
        this.setState({ innerContentIndex : -1 })
    else
        this.setState({ innerContentIndex : index })
   }

    render(){
        return(
            <Home toggleInnerContent={this.toggleInnerContent} innerContentIndex={this.state.innerContentIndex}/>
        )
    }

}

export default HomeContainer