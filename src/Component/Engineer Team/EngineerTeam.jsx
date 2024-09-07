import { FiCommand } from 'react-icons/fi';
import img from '../../assets/image/images/enginner.png'
import Balancer from 'react-wrap-balancer';
const EngineerTeam = () => {
    return (
        <div className='py-28'>
            <div className="container flex md:flex-row  flex-col-reverse items-center justify-center gap-4  mx-auto">
                {/* engineer title */}
                <div className='space-y-7 flex flex-col md:items-start items-center justify-center'>
                    <button className="flex items-center font-medium gap-2 text-purple rounded-full bg-[#d9e3fc] p-1 text-xl">
                        <FiCommand className="text-2xl" />For Product Teams
                    </button>
                    <h3 className='text-4xl md:text-start text-center font-bold'>
                        <Balancer>
                            Data-driven pipelines in minutes
                        </Balancer>
                    </h3>
                    <p className='text-xl md:text-start text-center font-medium text-[#8989A2]'>
                        <Balancer>
                            Maintenance-free data pipelines with quick set-up
                            and<br/> straight-forward deployments that are powered by a modern<br /> & scalable platform.
                        </Balancer>
                    </p>
                </div>
                {/* img */}
                <div className='md:pt-0 pt-16'>
                    <img src={img} alt="" className='w-full'/>
                </div>
            </div>
        </div>
    );
};

export default EngineerTeam;