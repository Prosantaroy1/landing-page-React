import { AiFillGoogleSquare } from 'react-icons/ai';
import logo1 from '../../assets/image/from/accenture-4.png'
import logo2 from '../../assets/image/from/airbnb.png'
import logo3 from '../../assets/image/from/react.png'
import logo4 from '../../assets/image/from/sky-4.png'
import Balancer from 'react-wrap-balancer';
import { motion } from "framer-motion"
import { SlideUp } from '../../animation/animation';

const SignUp = () => {
    return (
        <div className="mt-12 py-20">
            <div className="container grid md:grid-cols-2 grid-cols-1 justify-center gap-56 items-center px-14 md:px-28 font-fontmt mx-auto">
                {/* title from part*/}
                <div>
                    <motion.h3
                        variants={SlideUp(0.2)}
                        initial='initial'
                        whileInView={'animate'}
                        className="md:text-3xl text-xl md:text-start text-center font-semibold">
                        <Balancer>
                            See why the world’s best companies use Qubly to become truly data-driven.
                        </Balancer>
                    </motion.h3>
                    <motion.div
                        variants={SlideUp(0.3)}
                        initial='initial'
                        whileInView={'animate'}
                        className="divider py-8">Trusted by</motion.div>
                    {/* logo */}
                    <motion.ul
                        variants={SlideUp(0.5)}
                        initial='initial'
                        whileInView={'animate'}
                        className='grid grid-cols-2 items-center md:px-1 px-14 gap-5 space-y-4'>
                        <li> <img src={logo1} /> </li>
                        <li> <img src={logo3} /> </li>
                        <li> <img src={logo2} /> </li>
                        <li> <img src={logo4} /> </li>
                    </motion.ul>
                </div>
                {/* from part */}
                <div className='bg-[#e0eaf5]  relative h-[550px] rounded p-6'>
                    <div className='flex absolute px-4 -top-12 left-0 right-0 items-center flex-col justify-center space-y-7'>
                        <div className="card bg-base-100   md:min-w-[500px]  shrink-0 shadow-2xl">
                            <form className="card-body space-y-4">
                                <h4 className='text-2xl text-center font-bold'>Sign Up</h4>
                                <div className="form-control pb-6 mt-6">
                                    <button className="btn bg-purple btn-primary">
                                        Start your free trial
                                    </button>
                                </div>
                                {/* btn */}
                                <div className="form-control">
                                    <input type="email" placeholder="Your primary email" className="input input-bordered" required />
                                </div>
                                {/* password */}
                                <div className="form-control">
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="password" placeholder="Re-type Password" className="input input-bordered" required />
                                </div>
                                <p className='text-center text-2xl font-medium'>OR</p>
                                {/* google */}
                                <div className='flex items-center justify-center'>
                                    <button className='bg-[#3750df] flex items-center px-3 gap-3 py-2 hover:bg-purple text-[#fff]'>
                                        <AiFillGoogleSquare className='text-4xl' /> Sign in with Google
                                    </button>
                                </div>
                                {/* last */}
                                <div className="divider divider-start"></div>
                                <div>
                                    <p className='text-center font-medium '>
                                        Already have an account? <span className='text-purple font-semibold'>Login</span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;