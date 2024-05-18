import React, {useEffect, useState} from 'react'
import { Card } from "flowbite-react";

const shop = () => {
  const[books, setBooks] = useState([]);
useEffect(() =>{
  fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(1,8)));
},[])

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
      
      <div className=' grid gap-6 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 grid-cols-1'>
        {
          books.map(book => 
            <Card className='shadow-2xl bg-white'
            >
            <img src={book.imageUrl} alt="" className='h-96' />  
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2'>Buy Now</button>
          </Card>)
        }
      </div>


    </div>
  )
}

export default shop