import profile from '../../assets/image/testmonial/Profile.png'
import img1 from '../../assets/image/testmonial/Clearbit.png'
import img2 from '../../assets/image/testmonial/Group 25.png'
import img3 from '../../assets/image/testmonial/Shake.png'
import img4 from '../../assets/image/testmonial/Tonkean.png'
import img5 from '../../assets/image/testmonial/Mine.png'
import './testimonial.css'
import { motion } from "framer-motion"
import { SlideUp } from '../../animation/animation'


const Testimonial = () => {
    return (
        <div className='pt-20 py-20 mb-8 banner-img'>
            <div className="container font-fontmt mx-auto space-y-12 md:px-20 px-3 flex flex-col items-center">
                {/* titler */}
                <motion.h3
                    variants={SlideUp(0.2)}
                    initial='initial'
                    whileInView={'animate'}
                    className='md:text-3xl text-xl text-center md:min-w-[200] mx-auto font-semibold'>
                    &quot; What I love about Qubly is the easy way we can
                    collaborate even if there is a lot of people involved in the process&quot;
                </motion.h3>
                {/* img */}
                <motion.div
                    variants={SlideUp(0.4)}
                    initial='initial'
                    whileInView={'animate'}
                    className='flex flex-col items-center space-y-3'>
                    <img src={profile} alt="" />
                    {/* details */}
                    <div>
                        <h3 className='text-xl font-bold'>Guillaume Cabane</h3>
                        <p className='text-xl font-bold'>CTO @ BigSpring</p>
                    </div>
                </motion.div>
                {/* comapany logo */}
                <motion.div
                    variants={SlideUp(0.6)}
                    initial='initial'
                    whileInView={'animate'}
                    className='pb-12 md:px-0 px-2'>
                    <ul className='flex flex-wrap items-center md:justify-between justify-center gap-14 md:gap-32'>
                        <li><img src={img5} className='w-full' /></li>
                        <li><img src={img2} className='w-full' /></li>
                        <li><img src={img3} className='w-full' /></li>
                        <li><img src={img4} className='w-full' /></li>
                        <li><img src={img1} className='w-full' /></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonial;