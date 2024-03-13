import { useEffect, useState } from "react"
import { getProductsById } from "../../../asynckMock"
import ItemDetail from "../ItemDetail/ItemDeail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = ()=>{
    const [product, setProduct]= useState(null)


    const {itemId}= useParams()

    useEffect(()=>{
        getProductsById(itemId)
            .then(result=>{
                    setProduct(result)
            })
    },[itemId])

    return(
        <main>
        <h1>Detalles de productos</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer