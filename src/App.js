import './App.css';

import React, {useEffect,useState} from "react";
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


    const showProgressBar= isRunning && !show && <ProgressBarComponent progress={filled}/>


    const showInterface= show && <Interface progress={filled} />

    const  clickHandler=()=>
        {
            setIsRunning(true)
            setTimeout(()=>{

                setShow(true)
            },3000)

        }
    useEffect(()=>{
        if(filled<100 && isRunning)
        {
            setTimeout(()=>{
                setFilled(prev=>prev += 2)
            },50)
        }
    },[filled,isRunning])


    const hideGame=()=>{
        setShow(false)
        setIsRunning(false)
        setFilled(0)
    }

    const style={
        btnStart:["btn btn-outline-success m-3 btn-lg "],
        btnClose:["btn btn-outline-danger m-3 btn-lg"],
    }

    const btnName=!show ? <div className='d-grid col-4 mx-auto'> <button className={style.btnStart} onClick={()=>clickHandler()}>{btn.start}</button></div>:<div className='d-grid gap-2 col-4 mx-auto'><button className={style.btnClose} onClick={()=>hideGame()}>{btn.close}</button></div>

    return (
        <div>
            <h2 className="d-grid col-4 mx-auto mt-5" style={{color:'green'}}>Bienvenue au jeu Morpion </h2>
            {showInterface}
            {btnName}
            {showProgressBar}

        </div>

    );

}

export default App;
