import React from 'react';
import gif from '../assets/Animation.json';
import Lottie from 'lottie-react';

const MainContent = () => {
  return (
    <div className='md:flex justify-center items-center 	'>
      <div className='md:w-[50%] w-full'>
        <h1 className='text-6xl font-bold text-orange-500 leading-tight'>Your Favourite Food <br/> Delivered Hot and fresh. </h1>
        <p className='text-gray-500 text-lg '>Healthy switcher chefs do all the work, like peeling,chopping and maintaining,so you can cook a fresh meal.</p>
        <button className='mt-8 px-8 py-3 rounded-full bg-orange-500 text-white text-lg shadow-lg font-semibold'>Order Now </button>
      </div>

      <div className='md:w-[40%] w-full '>
           <Lottie animationData={gif} loop={true}/>
      </div >
      
    </div>
  )
}

export default MainContent
