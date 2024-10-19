import React, { useState } from 'react';
import gif from '../assets/Animation.json';
import Lottie from 'lottie-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainContent = () => {

    const categories = [
        {
            id: 1,
            categoryName: "Breakfast" , 
            image:'https://images.pexels.com/photos/9619560/pexels-photo-9619560.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 2,
            categoryName:"Lunch" , 
            image:'https://images.pexels.com/photos/13243817/pexels-photo-13243817.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            categoryName: "Dinner", 
            image:'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            categoryName: "Snack", 
            image:'https://images.pexels.com/photos/110934/pexels-photo-110934.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]

    const [seletcategory , setSelectCategory] = useState(1);
  return (
    <>                                 
    <div className='md:flex justify-center items-center 	'>
      <div className='md:w-[50%] w-full'>
        <h1 className='text-6xl font-bold text-orange-500 leading-tight'>Your Favourite Food <br/> Delivered Hot and fresh. </h1>
        <p className='text-gray-500 text-lg '>Healthy switcher chefs do all the work, like peeling,chopping and maintaining,so you can cook a fresh meal.</p>
        <button className='mt-8 px-8 py-3 rounded-full bg-orange-500 text-white text-lg shadow-lg font-semibold'>Order Now <ArrowForwardIcon/> </button>
      </div>

      <div className='md:w-[40%] w-full '>
           <Lottie animationData={gif} loop={true}/>
      </div > 
    </div>

    <div className='py-10 bg-black'>
        <h2 className='text-center font-bold  text-orange-500 mb-4 text-4xl underline'>Meal Categories</h2>
        <div className='flex justify-center items-center space-x-10 ' >
            {
                categories.map((category ,index) => (    
            <div className='text-center cursor-pointer' key={index} onClick={()=>setSelectCategory(category.id)}> 
                <div className={`w-32 h-40 rounded-full overflow-hidden
                    ${seletcategory == category.id
                        ? "border-8 border-orange-300"
                        : "bg-white border-8 border-gray-400"
                        
                    }`}>
                   <img src={category.image} className='object-cover w-full h-full'/>

                 </div>
                 <span className='text-xl font-bold text-orange-500 hover:underline'>{category.categoryName}</span>
            </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default MainContent
