import { FiCommand } from 'react-icons/fi';
import img from '../../assets/image/images/enginner.png'
import Balancer from 'react-wrap-balancer';
import { motion } from "framer-motion"
import { SlideUp } from '../../animation/animation';

const EngineerTeam = () => {
    return (
        <div className='py-28'>
            <div className="container flex md:flex-row  flex-col-reverse items-center justify-center gap-4  mx-auto">
                {/* engineer title */}
                <div className='space-y-7 flex flex-col md:items-start items-center justify-center'>
                    <motion.button
                        variants={SlideUp(0.1)}
                        initial='initial'
                        whileInView={'animate'}
                        className="flex items-center font-medium gap-2 text-purple rounded-full bg-[#d9e3fc] p-1 text-xl">
                        <FiCommand className="text-2xl" />For Engineering Teams
                    </motion.button>
                    <motion.h3
                        variants={SlideUp(0.1)}
                        initial='initial'
                        whileInView={'animate'}
                        className='text-4xl md:text-start text-center font-bold'>
                        <Balancer>
                            Data-driven pipelines in minutes
                        </Balancer>
                    </motion.h3>
                    <motion.p
                        variants={SlideUp(0.1)}
                        initial='initial'
                        whileInView={'animate'}
                        className='text-xl md:text-start text-center font-medium text-[#8989A2]'>
                        <Balancer>
                            Maintenance-free data pipelines with quick set-up
                            and<br /> straight-forward deployments that are powered by a modern<br /> & scalable platform.
                        </Balancer>
                    </motion.p>
                </div>
                {/* img */}
                <motion.div
                initial={{x: 100, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration: 0.5, delay: 0.3}}
                 className='md:pt-0 pt-16'>
                    <img src={img} alt="" className='w-full' />
                </motion.div>
            </div>
        </div>
    );
};

export default EngineerTeam;