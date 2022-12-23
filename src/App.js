import './App.css';

import React, {Component, useEffect, useRef, useState} from "react";
import Interface from "./Components/Interface";
import ProgressBarComponent from "./Components/ProgressBar";

function App(){
    const[show, setShow]=useState(false)
    const[ btn, setBtn]=useState({
        close:'Quitter',
        start:'Start'
    })


    const[isRunning,setIsRunning]=useState(false)
    const[filled,setFilled]=useState(0)


    const showProgressBar= isRunning && <ProgressBarComponent progress={filled}/>
 /*TODO  VERIFIER POURQUOI LA BAR CE CHARDER AVEC LE MONT DIRECTEMENT*/

    const showInterface= show && <Interface progress={filled} />

    const  clickHandler=()=>
        {
            console.log('handerler est chargé')
            setIsRunning(true)
            setTimeout(()=>{

                setShow(true)
            },3000)

        }




    useEffect(()=>{
        console.log('effect est chargé')


        if(filled<100)
        {

            setTimeout(()=>{

                setFilled(prev=>prev += 4)

            },150)
        }

    },[filled,isRunning,show])

    const hideGame=()=>{
        setShow(false)
    }

    const style={
        btnStart:["btn btn-success m-3 justify-content-center"],
        btnClose:["btn btn-danger m-3 justify-content-center"],
    }

    const btnName=!show ? <button className={style.btnStart} onClick={()=>clickHandler()}>{btn.start}</button>:<button className={style.btnClose} onClick={()=>hideGame()}>{btn.close}</button>

    return (
        <div >
            {showInterface}
            {btnName}
            {showProgressBar}
        </div>

    );

}

export default App;
