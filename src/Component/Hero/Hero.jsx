import { SlArrowDown } from 'react-icons/sl';
import logo from '../../assets/image/header/Logo.png'
import { BsStars } from 'react-icons/bs';
import banner from '../../assets/image/header/banner.png'
import Balancer from 'react-wrap-balancer';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Hero = () => {
    // reponsive state
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-[#e5e7ee] md:px-1 px-3'>
            <div className="container  mx-auto ">
                {/* navber open*/}
                <nav className='flex relative justify-between items-center pt-8'>
                    {/* logo */}
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    {/* navlink */}
                    <div className='md:flex hidden'>
                        <ul className='flex text-2xl font-medium items-center gap-16'>
                            <li><a href="#" className='flex hover:text-purple items-center gap-2'>About <span><SlArrowDown className='text-xs' /></span> </a></li>
                            <li><a href="#" className='hover:text-purple'>Pricing</a></li>
                            <li><a href="#" className='hover:text-purple'>Contact Us</a></li>
                            <li><a href="#" className='hover:text-purple'>Login</a></li>
                            <li><a href="#">
                                <button className='border-2 hover:bg-purple hover:text-[#ffff] border-purple rounded-3xl text-purple px-4 py-2'>Start free trial</button>
                            </a></li>
                        </ul>
                    </div>
                    {/* reponsive moblie */}
                    <div onClick={() => setOpen(!open)} className='md:hidden flex'>
                        {
                            open ? <IoMdClose className='text-3xl' /> : <FaBars className='text-3xl' />
                        }
                    </div>
                    {/* moblie link */}
                    {
                        open && <div className='absolute md:hidden transition-all duration-300 text-[#fff] py-14 rounded bg-[#020202] top-24 left-0 right-0 h-screen'>
                            <ul className='flex flex-col text-2xl font-medium items-center gap-16'>
                                <li><a href="#" className='flex hover:text-purple items-center gap-2'>About <span><SlArrowDown className='text-xs' /></span> </a></li>
                                <li><a href="#" className='hover:text-purple'>Pricing</a></li>
                                <li><a href="#" className='hover:text-purple'>Contact Us</a></li>
                                <li><a href="#" className='hover:text-purple'>Login</a></li>
                                <li><a href="#">
                                    <button className='border-2 hover:bg-purple hover:text-[#ffff] border-purple rounded-3xl text-purple px-4 py-2'>Start free trial</button>
                                </a></li>
                            </ul>
                        </div>
                    }
                </nav>
                {/* banner open */}
                <section className='py-32 grid grid-cols-1 md:gap-1 gap-8 md:grid-cols-2 items-center md:px-2 px-7  justify-between font-fontmt'>
                    {/* banner left title */}
                    <div className='flex md:items-start items-center flex-col'>
                        <p className='flex items-center  text-purple text-xl  gap-2'>
                            <BsStars />v3.1 released. Learn more
                        </p>
                        {/* title */}
                        <h3 className='text-6xl pt-6 md:text-start text-center font-bold'>
                            <Balancer>
                                Your data with<br /> real-time analytics
                            </Balancer>
                        </h3>
                        {/* para */}
                        <p className='texl-2xl py-5  md:text-start text-center font-normal'>
                            <Balancer>
                                Harness the potential of Big Data Analytics & Cloud Services<br />
                                and become a data-driven organization with Needle tail
                            </Balancer>
                        </p>
                        {/* btn */}
                        <div className='flex items-center gap-5'>
                            <button className='border-2 text-2xl border-purple hover:bg-[#fff] hover:text-[#000] bg-purple rounded-full text-[#fff] px-5 py-3'>Start free trial</button>
                            <button className='border-2 text-2xl hover:bg-purple hover:text-[#ffff] border-purple rounded-full  px-5 py-3'>Learn more</button>
                        </div>
                    </div>
                    {/* banner img */}
                    <div>
                        <img src={banner} alt="" className='w-full' />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Hero;