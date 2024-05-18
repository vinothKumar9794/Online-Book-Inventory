import React from 'react'
import BannerCard from '../home/BannerCard'


const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

                {/*left side */}

                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best prices</span></h2>
                    <p className='md:w-4/5'>Welcome to Buy and Sell Your Books for the Best Prices! We're committed to fair deals, ensuring you get the best
                     value when selling and discovering amazing bargains when buying. Our user-friendly
                      platform guarantees simple and secure transactions every step of the way. With an
                       extensive collection spanning genres from fiction to non-fiction, classics to contemporary bestsellers, there's something for every taste. Join our vibrant community of book enthusiasts to share recommendations, engage in discussions, and connect with fellow readers worldwide. Happy reading!</p>
                    <div>
                        <input type="search" name='search' placeholder='search a book' 
                        className='py-2 px2 rounded-s-sm outline-none'/>
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                        transition-all ease-in duration-200'>search</button>
                    </div>
                </div>


                {/*right side */}
                <div>
                    <BannerCard/>
                </div>
            </div>
        </div>
    )
}

export default Banner