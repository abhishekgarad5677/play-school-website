import { LuUser } from 'react-icons/lu';
import ContactBanner from '../../public/contact/contact-banner.png'
import { HiOutlineMail } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';

const ContactSection = () => {
    return (
        <div className="bg-[#57da4d] pt-26 pb-12">
            <h4 className="text-[34px] font-[400] text-[#fff] leading-[41.14px] text-center mb-14">
                Get In Touch With Us Now
            </h4>
            <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
                <div className="col-span-1">
                    <img src={ContactBanner} alt="" />
                </div>
                <div className='col-span-2 gap-4 bg-white rounded-[20px] p-7 h-[fit-content] '>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col justify-evenly gap-5">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <LuUser className='size-5 text-gray-300' />
                                </div>
                                <input type="text" style={{ "::placeholder": { fontWeight: "200" } }} id="simple-search" className="border size-15 placeholder:font-[400] border-gray-300 text-gray-500 text-md rounded-[12px]  block w-full ps-10 p-2.5  dark:placeholder-gray-300" placeholder="Name" required />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <HiOutlineMail className='size-5 text-gray-300' />
                                </div>
                                <input type="text" id="simple-search" className="border size-15 border-gray-300 text-gray-500 text-sm rounded-[12px]  block w-full ps-10 p-2.5  dark:placeholder-gray-300" placeholder="Email" required />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <IoCallOutline className='size-5 text-gray-300' />
                                </div>
                                <input type="text" id="simple-search" className="border size-15 border-gray-300 text-gray-500 text-sm rounded-[12px]  block w-full ps-10 p-2.5  dark:placeholder-gray-300" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="l">
                            <textarea className="w-full h-full border border-gray-300 text-gray-300 text-sm rounded-[12px] p-2.5" placeholder='Message'></textarea>
                        </div>
                    </div>
                    <button className='w-[100%]  bg-gradient-to-t from-[#0EB401] to-[#3BFF2C] p-4 rounded-[100px] text-white text-[24px] leading-[29.04px] font-400 cursor-pointer'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;