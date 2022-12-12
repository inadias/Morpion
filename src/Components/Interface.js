import React, {Component} from "react";
import ClickedCol from "./ClickedCol";
import lion from './../lion.png';
import aigle from './../aigle.png';


class Interface extends Component{


    constructor(props) {
        super(props);
        this.state={
            square:Array(9).fill(null),
            hePlays:true

        }

    }

    clickHandler=(x)=>{
        const element= this.state.square.slice()
        console.log(element[x])
        element[x]= this.state.hePlays ? <img src={lion} alt="lion"/>:<img src={aigle} alt="aigle"/>

        this.setState({
            square: element,
            hePlays: !this.state.hePlays
    })
    }

    renderElement(i){
        return(
            <ClickedCol squareValue={this.state.square[i]} clickHander={()=>this.clickHandler(i)}/>
        )


    }
    render() {


        const player= this.state.hePlays ? 'X':'O'

        return(

                <div className='container mt-5'>
                    <h4>player:{player} </h4>

                    <div className="row w-25">

                            {this.renderElement(0)}
                            {this.renderElement(1)}
                            {this.renderElement(2)}
                    </div>
                    <div className="row w-25">

                            {this.renderElement(3)}
                            {this.renderElement(4)}
                            {this.renderElement(5)}
                    </div>
                    <div className="row w-25">

                            {this.renderElement(6)}
                            {this.renderElement(7)}
                            {this.renderElement(8)}
                    </div>



                </div>

        )




    }
}
export default React.memo(Interface)