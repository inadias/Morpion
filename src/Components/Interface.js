import React, {Component, Fragment} from "react";
import { GiAngelWings, GiAnubis  } from 'react-icons/fa';
import ClickedCol from "./ClickedCol";
import lion from './../lion.png';
import aigle from './../aigle.png';
import Result from "./Result";


const lionImg=<img src={lion} alt="lion"/>
const aigleImg=<img src={aigle} alt="aigle"/>




class Interface extends Component{


    constructor(props) {
        super(props);
        this.state={
            square:Array(9).fill(null),
            whoPlays:true,
            players:{
                x:[lionImg],
                o:[aigleImg]
            }


        }

    }

    clickHandler=(x)=>{
        const element= this.state.square.slice()
        if(winner(element) || element[x]){
            return;
        }

        element[x] = this.state.whoPlays ? this.state.players.x:this.state.players.o

            this.setState({
                square: element,
                whoPlays: !this.state.whoPlays,
            })
    }
    renderElement(i){
        return(
            <ClickedCol squareValue={this.state.square[i]} clickHander={()=>this.clickHandler(i)}/>
        )
    }

    render() {

        let result;

        const getWinner = winner(this.state.square)
        if(getWinner){

           result=this.state.whoPlays ? lionImg : aigleImg

        }



        return(
                <Fragment>

                    <div className="card text-center shadow-sm p-3 mb-5 bg-white rounded ">
                        <div className="card-header">
                            <div className=" container mt-5 whoIsPlaying text-center"> <h2>C'est à vous de jouer </h2> <h3>{result}</h3></div>
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
                            {lionImg} <strong>0</strong>  : <strong>0</strong>  {aigleImg}

                        </div>
                    </div>

                    {getWinner&&<Result score={result} winner={getWinner} lionLogo={lionImg}/>}



                </Fragment>
        )




    }
}
export default React.memo(Interface)
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