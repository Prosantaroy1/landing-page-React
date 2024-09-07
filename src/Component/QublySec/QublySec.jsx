import { BiGitMerge } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { IoIosMailOpen } from "react-icons/io";
import { PiChartBar } from "react-icons/pi";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion"
import { SlideUp } from "../../animation/animation";

const QublySec = () => {
    return (
        <div className="mt-8 font-fontmt py-16 md:px-1 px-3">
            <div className="container mx-auto ">
                {/*qubly title  */}
                <div className="flex items-center flex-col justify-center gap-7">
                    <motion.div
                        variants={SlideUp(0.2)}
                        initial='initial'
                        whileInView={'animate'}
                    >
                        <button className="flex items-center font-medium gap-2 text-purple rounded-full bg-[#d9e3fc] p-1 text-xl">
                            <GrFormView className="text-2xl" />Why Qubly
                        </button>
                    </motion.div>
                    <motion.h3
                        variants={SlideUp(0.5)}
                        initial='initial'
                        whileInView={'animate'}
                        className="text-4xl text-center font-extrabold">
                        <Balancer>
                            Get actionable insights from Big Data in 3 steps
                        </Balancer>
                    </motion.h3>
                    <motion.p
                        variants={SlideUp(0.7)}
                        initial='initial'
                        whileInView={'animate'}
                        className="text-center text-[#8989A2] text-2xl font-normal ">
                        <Balancer>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br />
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </Balancer>
                    </motion.p>
                </div>
                {/* Feature card */}
                <div className="grid pt-14 gap-14 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center">
                    {/* frist */}
                    <motion.div
                        variants={SlideUp(0.8)}
                        initial='initial'
                        whileInView={'animate'}
                        className="flex items-center py-3 space-y-5 flex-col">
                        <PiChartBar className="text-6xl text-purple rounded-full p-2 bg-[#c4f3ae]" />
                        <h3 className="text-2xl font-bold">Valuable business insights</h3>
                        <p className="text-center text-[#8989A2] text-xl font-medium">
                            Collect processed & cleansed data that<br /> is ready to be analyzed to gather <br />valuable business insights.
                        </p>
                    </motion.div>
                    {/* second */}
                    <motion.div
                        variants={SlideUp(0.8)}
                        initial='initial'
                        whileInView={'animate'}
                        className=" flex items-center py-3 space-y-5 flex-col ">
                        <IoIosMailOpen className="text-6xl text-purple rounded-full p-2 bg-[#aee9f3]" />
                        <h3 className="text-2xl font-bold">Powerful Algorithms</h3>
                        <p className="text-center text-xl text-[#8989A2] font-medium">
                            With the help of powerful algorithms,<br /> quality rules & techniques,
                            obtain<br /> simplified & enriched data.
                        </p>
                    </motion.div>
                    {/* three */}
                    <motion.div
                        variants={SlideUp(0.8)}
                        initial='initial'
                        whileInView={'animate'}
                        className="flex items-center py-3 space-y-5 flex-col  ">
                        <BiGitMerge className="text-6xl text-purple rounded-full p-2 bg-[#c8aef3]" />
                        <h3 className="text-2xl font-bold">Data in real-time</h3>
                        <p className="text-center text-xl text-[#8989A2] font-medium">
                            Collect processed & cleansed data that<br /> is ready to be analyzed to gather <br />valuable business insights.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default QublySec;