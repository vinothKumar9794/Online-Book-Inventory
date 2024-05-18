import React from 'react'
import FavBookImg from '../assets/banner-books/favoritebook.jpg'
import { Link } from 'react-router-dom';




const FavBook = () => {
    return (
      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
          <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
          </div>
        <div className='md:w-1/2 space-y-6'>
          <h2 className='text-5xl font-bold my-5 md:w-3/4 loading-sung'>Find Your Favorite
           <span className='text-blue-700'> Book Here!</span></h2>
          <p className='mb-10 text-lg md:w-5/6'>"Welcome to your literary paradise! At Buy and Sell Your Books for the Best Prices, we offer a curated collection spanning genres from thrilling mysteries to heartwarming classics. Whether you're hunting for the latest bestseller or a hidden gem, our diverse shelves promise to fulfill every reader's quest. Join our vibrant community to share recommendations and connect with fellow book lovers worldwide. Find your next favorite book with us today!"</p>
          <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
              <h3 className='text-3xl font-bold'>700+</h3>
              <p className='text-base'>Book Listing</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold'>550+</h3>
              <p className='text-base'>Register Users</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold'>1200+</h3>
              <p className='text-base'>PDF Downloads</p>
            </div>

             <Link to="/shop" className='mt-1/2 block'><button className='bg-blue-700 text-white font-semibold px-10
             py-2 rounded hover:bg-black transition-all duration-350'>Explore More</button></Link>

                </div>
            </div>
        </div>
    )
}

export default FavBook