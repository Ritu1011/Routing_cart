import { useContext } from "react";
import { AppContext } from "../AppContext/AppContextProvider";
import style from "./Button.module.css";


function Button({text,onClick}){
    const [theme, toggleTheme]=useContext(AppContext)
    // console.log(context);
    return (
        <>
        <div className="main">
        <div 
    className={`${style.buttonBase} ${ theme==="light" ? style.buttonLight:style.buttonDark}` }
    onClick={onClick} 
    >      
         <div className="hello">HELLO</div>
    </div>
    </div>
    </>
    )
}
export default Button;