import React, {Component, Fragment} from "react";
import ClickedCol from "./ClickedCol";
import lion from './../lion.png';
import aigle from './../aigle.png';

const winner=(squares)=> {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
const lionLego=<img src={lion} alt="lion"/>
const aigleLego=<img src={aigle} alt="aigle"/>


class Interface extends Component{


    constructor(props) {
        super(props);
        this.state={
            square:Array(9).fill(null),
            hePlays:true,


        }

    }


    clickHandler=(x)=>{


        const element= this.state.square.slice()
        if(winner(element) || element[x]){
            return;
        }

        element[x] = this.state.hePlays ? lionLego:aigleLego


            this.setState({
                square: element,
                hePlays: !this.state.hePlays,

            })




        }


    renderElement(i){
        return(
            <ClickedCol squareValue={this.state.square[i]} clickHander={()=>this.clickHandler(i)}/>
        )


    }
    render() {



        const player= this.state.hePlays ? lionLego:aigleLego

        return(
                <Fragment>

                    <div className="card text-center">
                        <div className="card-header">
                            <div className=" container mt-5 whoIsPlaying text-center"> <h2>C'est à vous de jouer  </h2> <h3>{player}</h3></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><p>Partie numéro : 1</p></h5>
                            <div className='grid-container mt-5 mb-5'>

                                {this.renderElement(0)}
                                {this.renderElement(1)}
                                {this.renderElement(2)}

                                {this.renderElement(3)}
                                {this.renderElement(4)}
                                {this.renderElement(5)}



                                {this.renderElement(6)}
                                {this.renderElement(7)}
                                {this.renderElement(8)}




                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            {lionLego} <strong>0</strong>  : <strong>0</strong>  {aigleLego}
                        </div>
                    </div>



                </Fragment>
        )




    }
}
export default React.memo(Interface)