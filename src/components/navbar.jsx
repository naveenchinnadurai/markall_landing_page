import React, { useState } from 'react'
import { GiHamburgerMenu as Menu } from "react-icons/gi";
import { IoClose as Cross } from "react-icons/io5";
function NavBar() {
    const [shownav,setShownav] = useState(false);
    const handleClick=()=>{
        setShownav(!shownav)
        if(!shownav){
            document.body.style.height = "100vh"
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.height = "fit-content"
            document.body.style.overflow = "auto"
        }
    }
    return (
        <nav className='h-fit flex justify-between items-center py-7'>
            <h3 className='h-fit w-fit md:w-1/3 font-bold tracking-wide leading-6 text-xl'>ZWEEN</h3>
            <div className='w-fit text-2xl flex sm:hidden' onClick={handleClick}>
                <Menu />
            </div>
            <div className={`md:w-2/3 sm:flex sm:justify-end md:justify-between items-center ${shownav? "flex justify-center flex-col absolute top-0 right-0 bg-slate-950 w-2/3 h-full":"hidden w-full "}`}>
                <Cross className='sm:hidden text-3xl absolute top-7 right-7' onClick={handleClick}/>
                <ul className={`h-fit flex  ${shownav? "flex-col items-center w-full gap-10":"flex-row"}`}>
                    <li className='mx-4 text-xl font-normal leading-6' onClick={handleClick}>Services</li>
                    <li className='mx-4 text-xl font-normal leading-6' onClick={handleClick}>Pricing</li>
                    <li className='mx-4 text-xl font-normal leading-6' onClick={handleClick}>About Us</li>
                </ul>
                <span className='mt-10 sm:mt-0 sm:flex btn sm:self-end'>Get Started</span>
            </div>
        </nav>
    )
}

export default NavBar