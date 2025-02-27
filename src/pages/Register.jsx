import React from "react";
import bg1 from '../../public/register/bg1.png'
import bg2 from '../../public/register/bg2.png'
import formLogo from '../../public/register/formlogo.png'
import TapuTeam from "../../public/tapu-team.png";
import logo from '../../public/playSchool-logo.png';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Register = () => {

    return (
        <div className="h-full p-10">
            <div className="grid grid-cols-2 gap-4 h-full rounded-3xl shadow-xl p-6">

                {/* Left Side - Background Section */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
                    <img className='absolute left-0 top-0 w-full' src={bg1} alt="" />
                    <img className='absolute left-0 top-22 w-full' src={bg2} alt="" />
                    <img className='absolute left-[0] bottom-0 w-full' src={TapuTeam} alt="" />
                    <img className="absolute h-[180px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" src={logo} alt="" />
                </div>

                {/* Right Side - Content Section */}
                <div className="w-full h-full flex flex-col justify-center items-center relative">
                    <Link to={'/'} className="absolute flex items-center gap-0 top-5 left-0 text-[#0066FF] font-[600] text-[20px]">
                        <IoIosArrowBack />
                        Back
                    </Link>
                    <div className="flex flex-col gap-4 text-center w-full max-w-sm mb-10">
                        <img className="w-65 h-55 mx-auto" src={formLogo} alt="" />
                        <p className="text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
                            Enter Parent Details
                        </p>
                    </div>
                    {/* <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"> */}
                    <form className="space-y-6">
                        {/* Row 1 - First Name & Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-[#484848]">Enter First Name</label>
                                <input
                                    type="text"
                                    placeholder="Parents First Name"
                                    className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />

                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-[#484848]">Enter Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Parents Last Name"
                                    className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>

                        {/* Row 2 - Phone & Email */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-[#484848]">Enter Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-[#484848]">Enter Email</label>
                                <input
                                    type="email"
                                    placeholder="Example@website.com"
                                    className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>

                        {/* Row 3 - Country, State, City */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-[#484848]">Country</label>
                                <select className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option>India</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-[#484848]">State</label>
                                <select className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option>Maharashtra</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-[#484848]">City</label>
                                <input
                                    type="text"
                                    placeholder="Enter city name"
                                    className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full py-3 my-4 cursor-pointer text-white text-[20px] font-semibold  bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all">
                            Register
                        </button>
                    </form>
                    {/* </div> */}

                </div>
            </div>
        </div>
    )
}

export default Register;