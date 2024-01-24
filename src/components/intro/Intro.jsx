import "./intro.scss"
 
import { init } from "ityped";
import {useEffect , useRef} from "react";


export default function Intro() {
    const textRef =useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:60, 
            strings:["Developer", "Designer" ,"Content Creator"],
        });
    
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
            <div className="imgContainer">
            <img src="assets/Evan.png" alt="Evans Kenele Odiaka"/>
            </div>  
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hi There, I'm</h2>
                    <h1> Evans Odiaka</h1>
                    <h3> Software <span ref={textRef}></span></h3> 
                </div>
                <div> 
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="click to portfolio"/>
                    </a>
                    
                </div>
            
            </div>

        </div>
    )
}
