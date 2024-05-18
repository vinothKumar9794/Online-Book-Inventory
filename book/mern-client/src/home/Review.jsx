import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// react icons
import { FaStar } from 'react-icons/fa6'; 
import { Avatar } from "flowbite-react";
import proPic from '../assets/banner-books/review1.jpg'
import proPic2 from '../assets/banner-books/review2.jpg'
import proPic3 from '../assets/banner-books/review3.jpg'
import proPic4 from '../assets/banner-books/review4.jpg'
import proPic5 from '../assets/banner-books/review5.jpg'
import proPic6 from '../assets/banner-books/review6.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 py-8 lg:px-30'>
        <h2 className='text-5xl font-bold text-center md-15 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-6 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                {/* text*/}
                <div className='mt-7'>
                    <p className='md-5'>McDonald is by far my favorite mountaineering author and the approach she took in this book to highlight the “local” climbers who in many cases were responsible for the famous ascents attributed to Westerners by books, newspapers, climbing magazines, and now the digital media.</p>
                    
                    <Avatar 
                        alt='avater of Jese'
                        img={proPic}
                        rounded
                        className='w-10 md-4'
                    />
                    <h5 className='text-lg font-medium'>Krystle Rouse</h5>
                    {/* <p className='text-base'>CEO, ABC Company</p> */}
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-6 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                {/* text*/}
                <div className='mt-7'>
                    <p className='md-5'>Hades & Sephy, you better watch out because Di and Ari are giving you a run for your money.
Queen Scarlett does it again in A Game of Gods. With passion, spice, plot, character development, new POVs, and so much more, AGOG really set the tone for being . </p>
                    
                    <Avatar 
                        alt='avater of Jese'
                        img={proPic2}
                        rounded
                        className='w-10 md-4'
                    />
                    <h5 className='text-lg font-medium'>Laura</h5>
                    {/* <p className='text-base'>CEO, ABC Company</p> */}
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-6 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                {/* text*/}
                <div className='mt-7'>
                    <p className='md-5'>"A World of Terror" contains many different worlds of terror, it is in fact an amazing cross section of all types of horror:
                     it contains werewolves, haunted school buildings, ghosts, flesh eating monsters and dead trees to name a few.
Bringing together a large ensemble of writers </p>
                    
                    <Avatar 
                        alt='avater of Jese'
                        img={proPic3}
                        rounded
                        className='w-10 md-4'
                    />
                    <h5 className='text-lg font-medium'>Christoph Fischer</h5>
                    {/* <p className='text-base'>CEO, ABC Company</p> */}
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-6 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                {/* text*/}
                <div className='mt-7'>
                    <p className='md-5'>I loved this series, I'm a little older than the average reader but I was hooked as soon as it begun. This last book didn't disappoint and I felt like I was stress reading through all the twists and turns. Again there was an incredible world that was described so well I could almost see every stone in the Weald. 
</p>
                    
                    <Avatar 
                        alt='avater of Jese'
                        img={proPic4}
                        rounded
                        className='w-10 md-4'
                    />
                    <h5 className='text-lg font-medium'>Clinton</h5>
                    {/* <p className='text-base'>CEO, ABC Company</p> */}
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-6 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                {/* text*/}
                <div className='mt-7'>
                    <p className='md-5'>Christopher Shields has continued to showcase his writing talents in this fourth book in his Weald Fae Journals series. The Maebown is loaded with action and suspense as it brings his heroine Maggie to her ultimate destiny. The author has brought his series to a fitting end, or has he??? </p>
                    
                    <Avatar 
                        alt='avater of Jese'
                        img={proPic5}
                        rounded
                        className='w-10 md-4'
                    />
                    <h5 className='text-lg font-medium'>R. Grey Hoover</h5>
                    {/* <p className='text-base'>CEO, ABC Company</p> */}
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-6 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                {/* text*/}
                <div className='mt-7'>
                    <p className='md-5'>"A World of Possibility" is a wonderful selection of short stories of a remarkably consistent high quality of writing throughout the entire book.
Always unsure what you get from an anthology that includes unknown writers I was glad to be captivated by the opening piece.</p>
                    
                    <Avatar 
                        alt='avater of Jese'
                        img={proPic6}
                        rounded
                        className='w-10 md-4'
                    />
                    <h5 className='text-lg font-medium'>Kirstin Pulioff</h5>
                    {/* <p className='text-base'>CEO, ABC Company</p> */}
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review