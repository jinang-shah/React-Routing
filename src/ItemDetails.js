import React from 'react'
import {useState,useEffect} from 'react';

function ItemDetails({match}) {

    const [items, setitems] = useState({
        
    })
    const [itemContent, setitemContent] = useState({
        images:{}
    })

    const fetchItemDetail=async()=>{
       const fetchItem=await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
       const itemdetail=await fetchItem.json()
       console.log("item :",itemdetail.data)
       setitems(itemdetail.data)
       setitemContent(itemdetail.data.item);
       console.log(itemContent)
    }

    useEffect(()=>{
        fetchItemDetail();
        console.log("Match :",match.params.id)
    },[])

    return (
        <div>
            <h1>item</h1>
            <h2>{itemContent.name}</h2>
            <h2>{itemContent.description}</h2>
            <img src={itemContent.images['background']} />
        </div>
    )
}

export default ItemDetails
