import { LuChefHat } from 'react-icons/lu';
import product from '../../assets/image/images/product.png'
import product1 from '../../assets/image/images/Concentric circles.png'
import Balancer from 'react-wrap-balancer';
import { motion } from "framer-motion"


const ProductTeam = () => {
    return (
        <div className='py-12'>
            <div className="container flex md:flex-row flex-col flex-wrap items-center justify-center gap-48 font-fontmt mx-auto">
                {/* img */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='relative'>
                    <img src={product} alt="" className='w-full' />
                    <div className='absolute top-7 left-4 right-0'>
                        <img src={product1} alt="" />
                    </div>
                </motion.div>
                {/* product title */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='space-y-7 flex flex-col md:items-start items-center justify-center'>
                    <button className="flex items-center font-medium gap-2 text-purple rounded-full bg-[#d9e3fc] p-1 text-xl">
                        <LuChefHat className="text-2xl" />For Product Teams
                    </button>
                    <h3 className='text-4xl text-center md:text-start font-bold'>
                        <Balancer>
                            Launch with the best stack
                        </Balancer>
                    </h3>
                    <p className='text-xl md:text-start text-center font-medium text-[#8989A2]'>
                        <Balancer>
                            A centralized platform that integrates zillions of data
                            sources<br /> using Big Data ELT (Extract, Load & Transform) that leaves<br /> no data behind
                        </Balancer>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductTeam;