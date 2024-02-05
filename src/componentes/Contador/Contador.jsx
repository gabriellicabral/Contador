import React, {useState} from "react"

function Contador (){
    const [numero, setNumero] = useState(0)
    return (
        <>
        <h1>{numero}</h1>
        <buttom>+</buttom>
        <buttom>-</buttom>
        <buttom>C</buttom>
        </>
    )
}
export default Contador