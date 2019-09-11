import React, { Component } from 'react';
import Images from "./images"
class Board extends Component {
    state = {
        scoreCount: 0,
        clicked: [],
        images: Array.from(Images)
    }

    incrementScoreCount = (event)=>{
       let { scoreCount } = this.state;
        const id = event.target.getAttribute("id")
        if (this.state.clicked.includes(id)){
            this.setState({
                scoreCount: 0,
                clicked: []
            })
            alert("You clicked on the same image twice! Try again!")
        }
        else{
            const newArray = Array.from(this.state.clicked)
            newArray.push(id)
            this.setState({
                scoreCount: this.state.scoreCount + 1,
                clicked: newArray
            })
            console.log(newArray)
        }
        this.randomGameBoard()
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
     }

    randomGameBoard = () =>{
        this.setState({
            images: this.shuffle(this.state.images)
        })
    }
    render() { 
        // const images = [Images]
        return ( 
            <div className="container" style={{textAlign: "center"}}>
                <h1>Score: { this.state.scoreCount }</h1>
                {this.state.images.map((value, index)=>{
                    return <img key={index} id={value.id} src={value.img} onClick={this.incrementScoreCount} style={{height: 250, width: 250}}></img>
                })}
                </div>
         );
    }
}
 
export default Board;