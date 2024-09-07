import { IoMdSend } from 'react-icons/io';
import logo from '../../assets/image/header/Logo.png'
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="mt-18 py-8 font-fontmt bg-[#FBFCFF]">
            <footer className="footer container mx-auto  py-28 text-[#000] p-10">
                <aside>
                    <img src={logo} alt="" />
                    <p className='text-[#000] text-xl py-3  '>
                        Lorem ipsum dolor sit amet,<br /> consectetuer adipiscing elit,<br /> sed diam nonummy nibh
                        euismod<br /> tincidunt ut laoreet dolore magna <br />aliquam erat volutpat <br />ut wisi enim ad minim
                    </p>
                    {/* logo */}
                    <ul className='flex items-center gap-4'>
                        <li><FaFacebook className='text-4xl'/></li>
                        <li><FaTwitter  className='text-4xl'/></li>
                        <li><FiInstagram   className='text-4xl'/></li>
                    </ul>
                </aside>
                {/* second */}
                <nav className='text-xl'>
                    <h6 className="pb-5 text-2xl text-[#000] font-bold">Product</h6>
                    <a className="text-[#000] text-xl">Connections</a>
                    <a className="link link-hover">Protocols</a>
                    <a className="link link-hover">Personas</a>
                    <a className="link link-hover">Integrations</a>
                    <a className="link link-hover">Catalog</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">GDPR</a>
                </nav>
                {/* three */}
                <nav className='text-xl'>
                    <h6 className="pb-5 text-xl text-[#000] font-bold">For Developers</h6>
                    <a className="link link-hover">Docs</a>
                    <a className="link link-hover">API</a>
                    <a className="link link-hover">Open Source</a>
                    <a className="link link-hover">Engineering Team</a>
                </nav>
                {/* four */}
                <nav className='text-xl text-[#160637]'>
                    <h6 className="pb-5 text-xl text-[#000] font-bold">Company</h6>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Press</a>
                </nav>
                {/* five */}
                <nav className='text-xl'>
                    <h6 className="pb-5 text-xl text-[#000] font-bold">Support</h6>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Bulletins</a>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Partner</a>
                    <a className="link link-hover">Portal</a>
                </nav>
                {/* four */}
                <nav>
                    <h6 className="pb-5 text-xl text-[#000] font-bold">Newsletter</h6>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <IoMdSend className='text-3xl'/>
                    </label>
                </nav>
            </footer>
            <p className="text-center text-2xl font-semibold">Rahul Rao &copy;</p>
        </div>
    );
};

export default Footer;