import React, {useState} from "react"
import "./Contador.css"

function Contador (){
    const [numero, setNumero] = useState(0)

function Adicionar (){
    if(numero < 20){
    setNumero (numero + 1)
    }
}
function Remover (){
    if(numero > 0 ){
    setNumero (numero - 1)
}
}
function Clear (){
    setNumero(0)
}
    return (
        <section class="contador">
        <h1 class ="numero">{numero}</h1>
        <div class ="boxButton">
        <button onClick = {Adicionar}>+</button>
        <button onClick = {Remover}>-</button>
        <button onClick = {Clear}>C</button>
        </div>
        </section>
    )
}

export default Contador