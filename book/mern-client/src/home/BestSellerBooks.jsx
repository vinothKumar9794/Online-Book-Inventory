import React,{useEffect, useState} from 'react'
import BookCards from '../components/BookCards';


const BestSellerBooks = () => {
    const[books, setBooks] = useState([]);

    useEffect( ()=>{
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(1,8)))
        },[])
  return (
    <div>
      <BookCards books={books} headLine="Best Seller Book" />

    </div>
  )
}


export default BestSellerBooks