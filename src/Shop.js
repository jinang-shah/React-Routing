import './App.css';
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function Shop() {

    const [items, setitems] = useState([]);

  const fetchItems=async()=>{
      const data=await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
      const items=await data.json()
      console.log(items.data)
      setitems(items.data)
  }  

  useEffect(()=>{
      fetchItems();
  },[])

  return (
    <div>
      <h1>Shop Page</h1>
      {
        items.map((data)=>(
            <h1 key={data.itemId}>
              <Link to={`/shop/${data.itemId}`}>{data.item.name}</Link>
            </h1>
        ))
      } 
    </div>
  );
}

export default Shop;