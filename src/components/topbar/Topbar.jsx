import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

    export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio.</a>

                    <div className="itemContainer">
                        <Person className= "icon"/>
                        <span> + 204 869 6366</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span> evansodiaka@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        
                        <img src="assets/github-512.webp" style={{width:"25px", height:"25px"}} />
                        <a href="https://github.com/Evantech">  Github </a> 
                    </div>
                </div>
                <div className="right">
                <div className="hamburger "onClick={()=>setMenuOpen(!menuOpen)}>
                   <span className="line1"></span>
                   <span className="line2"></span>
                   <span className="line3"></span>
                   </div>
                   </div>
            </div>

        </div>
    )
}
