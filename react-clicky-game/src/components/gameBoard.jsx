import React, { Component } from 'react';
import Images from "./images"
class Board extends Component {
    state = {
        clickCount: 0,
        scoreCount: 0
    }

    incrementClickCount (){
        let { clickCount } = this.state.clickCount
        let { scoreCount } = this.state.scoreCount
        if (clickCount === 0){
            clickCount++;
            scoreCount++;
            console.log(clickCount)
        }
        else{
            scoreCount=0;
            console.log(scoreCount)
        }
    }
    render() { 
        // const images = [Images]
        return ( 
            <div className="container" style={{textAlign: "center"}}>
                <h1>Score: { this.state.scoreCount }</h1>
                {Images.map((value, index)=>{
                    return <img key={index} src={value} onClick={this.incrementClickCount()} style={{height: 250, width: 250}}></img>
                })}
                </div>
         );
    }
}
 
export default Board;