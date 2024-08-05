import React,{FC} from "react"

interface IButtons{
    onClick : ()=>void
    label : string
    className ?:string
}
const Buttons  : FC<IButtons> = (props : any)=>{
    const {onClick,label,className} = props
    return(
      
        <button
            type="button" 
            className={`btn btn-primary ${className}`} 
            onClick={onClick}
            
        >
            {label}
        </button>
    )
}
export default Buttons;