import {useState, useEffect} from "react"


const ItemCount = ({inital = 1, stock, onAdd}) => {

    const [count, setCount]= useState(inital)
    const decrement = () =>{
        if (count > 1){
            setCount(prev => prev - 1)
        }
    }

    const increment = () =>{
        if (count < stock){
            setCount(prev=>prev + 1)
        }
    }

    return(
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={()=> onAdd(count)}>Agregar al Carrito</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount