import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    }; 
  return (
    <>
    <nav className='flex justify-between items-center py-6 md:px-12 px-4 bg-white'>
        <div className='text-3xl font-bold text-gray-700 hover:underline decoration-4 cursor-pointer'>Tastie</div>
        <ul className='md:flex hidden space-x-10 text-gray-700'>
            <li><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>Home</a></li>
            <li><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>Packages</a></li>
            <li><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>About us</a></li>
            <li><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>Contact us</a></li>
        </ul>
        <button className='md:flex justify-center hidden  w-[10%] rounded-full bg-orange-500 text-white text-lg shadow-lg font-semibold'> Sign in </button>
        <ul >
            <MenuIcon sx={{ fontSize: 40 }} className='md:hidden ' onClick={toggleDrawer(true)}/>
        </ul>
    </nav>
    <Drawer open={open} onClose={toggleDrawer(false)}>
       <div className='py-4 px-4 min-w-[200px]'>
       <button className='w-[100%] rounded-full bg-orange-500 text-white text-lg shadow-lg font-semibold'>Sign in </button>
       <ul>
            <li className='my-5 text-xl'><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>Home</a></li>
            <li className='my-5 text-xl'><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>Packages</a></li>
            <li className='my-5 text-xl'><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>About us</a></li>
            <li className='my-5 text-xl'><a href='#' className='hover:text-orange-500 hover:underline decoration-2 '>Contact us</a></li>
        </ul>
        
       </div>
      </Drawer>
    </>
  )
}

export default Navbar;
