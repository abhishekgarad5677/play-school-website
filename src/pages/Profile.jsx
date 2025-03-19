import { IoIosLogOut } from "react-icons/io";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import parentsProfile from "../../public/profile/parents-profile.png";
import call from "../../public/profile/call.png";
import firstName from "../../public/profile/first-name.png";
import lastName from "../../public/profile/last-name.png";
import oneKid from "../../public/profile/one-kid.png";
import twoKid from "../../public/profile/two-kid.png";
import goli from "../../public/profile/goli.png";
import sonu from "../../public/profile/sonu.png";
import addCildIon from "../../public/profile/add-child-icon.png";
import childCard from "../../public/profile/child-card.png";
import avgBg from "../../public/profile/avg-bg.png";
import scoreBg from "../../public/profile/score-bg.png";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { MdError } from "react-icons/md";
import useApi from "../utils/api";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { div } from "framer-motion/client";
import { ChildDetails } from "../components/ChildDetails";
import { AddChild } from "../components/AddChild";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { data, makeRequest } = useApi();
  const [userData, setUserData] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");
  const [childDetails, setChildDetails] = useState([]);

  const fetchUserData = () => {
    const token = Cookies.get("authToken"); // Retrieve token from cookies

    if (token) {
      makeRequest(
        "https://api-playschool.tmkocplayschool.com/api/Auth/user/profile",
        "POST",
        null,
        {
          Authorization: `Bearer ${token}`, // Send token in headers
        }
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [makeRequest]);

  useEffect(() => {
    if (data?.status === true) {
      setUserData(data?.data);
    }
  }, [data]);

  useEffect(() => {
    if (userData !== null) {
      setUserFirstName(userData[1].split(" "));
      setChildDetails(userData[2]);
    }
  }, [userData]);

  // console.log(userData);

  // Upgrade child plan
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add child modal
  const [isModalAddChildOpen, setIsModalAddChildOpen] = useState(false);

  const openAddChildModal = () => {
    setIsModalAddChildOpen(true);
  };
  const closeAddChildModal = () => {
    setIsModalAddChildOpen(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/");
  };

  return (
    <div className="">
      <ChildDetails
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalData={modalData}
        fetchUserData={fetchUserData}
      />
      <AddChild
        isOpen={isModalAddChildOpen}
        closeModal={closeAddChildModal}
        fetchUserData={fetchUserData}
      />
      <div className="h-auto bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)] pt-5 pb-40 relative">
        {/* <Navbar /> */}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-15 w-[85%] mx-auto">
        {/* Child Details */}
        <div className="my-6 p-8 bg-white shadow-lg rounded-2xl relative">
          <div className="flex flex-col items-center">
            <img
              src={twoKid}
              alt="Parent Avatar"
              className="w-30 h-30 rounded-full"
            />
            <h2 className="text-[28px] font-[600] mt-2 text-[#484848]">
              Child Details
            </h2>
          </div>
          <div className="border-t-[1px] w-full border-[#D9D9D9] my-5"></div>

          {/* <div className="flex items-center space-x-3 mt-4">
            <div className="w-18 h-18 bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)] text-white flex items-center justify-center rounded-full text-[28px] font-[600]">
              TG
            </div>
            <div>
              <p className="text-[24px] text-[#484848] font-[600]">
                Tappu Gada
              </p>
              <p className="text-[#c3c2c2] text-[14px] font-[600]">
                Join Date: 05 - 03 - 2025
              </p>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg text-center text-white font-semibold text-lg relative">
              <img src={avgBg} alt="Parent Avatar" className="w-full h-auto" />
              <span className="absolute top-5 left-10 text-[22px]">
                Average Score
              </span>
              <p className="absolute bottom-5 left-10 text-[120px] font-[500]">
                91
              </p>
            </div>
            <div className="rounded-lg text-center text-white font-semibold text-lg relative">
              <img
                src={scoreBg}
                alt="Parent Avatar"
                className="w-full h-auto"
              />
              <span className="absolute top-5 left-10 text-[22px]">Rank</span>
              <p className="absolute bottom-5 left-10 text-[120px] font-[500]">
                02
              </p>
            </div>
            <div className="p-4 shadow-md rounded-2xl">
              <h4 className="text-[16px] text-[#484848]">
                Would you like to add more?
              </h4>
              <div className="mt-2 space-y-4">
                <label className="flex items-center space-x-4">
                  <img src={oneKid} alt="" />
                  <span className="text-[#484848] text-[14px]">
                    Add one more kid for just{" "}
                    <span className="text-[28px] font-[600]">₹399</span>
                  </span>
                  <input type="checkbox" className="w-4 h-4 text-blue-500" />
                </label>
                <label className="flex items-center space-x-4">
                  <img src={twoKid} alt="" />
                  <span className="text-[#484848] text-[14px]">
                    Add two more kids for just{" "}
                    <span className="text-[28px] font-[600]">₹599</span>
                  </span>
                  <input type="checkbox" className="w-4 h-4 text-blue-500" />
                </label>
              </div>
            </div>
            <div></div>
            <div></div>
            <button className="w-full text-[20px] font-[500] bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)] text-white py-4 rounded-4xl hover:bg-blue-600">
              Pay ₹499.00
            </button>
          </div> */}

          <div className="flex items-center justify-center space-x-4 mt-4">
            {childDetails?.map((ele, index) => {
              if (ele?.gender === "boy") {
                return (
                  <div
                    key={index}
                    onClick={() => openModal(ele)}
                    className="p-4 space-y-2 cursor-pointer text-center text-white border border-transparent rounded-lg bg-[radial-gradient(circle,#EE82FF_6%,#960CFF_120%),url('../../public/profile/child-card.png')]"
                  >
                    <img className="w-30 h-30" src={goli} alt="" />
                    <p className="text-[28px] font-[500]">{ele?.name}</p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    onClick={() => openModal(ele)}
                    className="p-4 space-y-2 cursor-pointer text-center text-white border border-transparent rounded-lg bg-[radial-gradient(circle,#82F479_6%,#0EB401_120%),url('../../public/profile/child-card.png')]"
                  >
                    <img className="w-30 h-30" src={sonu} alt="" />
                    <p className="text-[28px] font-[500]">{ele?.name}</p>
                  </div>
                );
              }
            })}

            {childDetails.length < 2 && (
              <div
                // key={index}
                onClick={openAddChildModal}
                className="p-4 space-y-2 cursor-pointer h-full text-center text-white border border-transparent rounded-lg bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/profile/child-card.png')]"
              >
                <img className="w-30 h-30" src={addCildIon} />
                <p className="text-[28px] font-[500]">Add Child</p>
              </div>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="text-red-500 cursor-pointer font-[500] text-[18px] absolute right-6 top-6 flex items-center"
          >
            <IoIosLogOut className="mr-1" /> Logout
          </button>
        </div>
        {/* Parent Details */}
        <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-2xl">
          <img
            src={parentsProfile}
            alt="Parent Avatar"
            className="w-30 h-30 rounded-full"
          />
          <h2 className="text-[28px] font-[600] mt-2 text-[#484848]">
            Parent Details
          </h2>
          <div className="border-t-[1px] w-full border-[#D9D9D9] my-5"></div>
          <div className="grid grid-cols-3 text-center gap-4 w-full mt-4 px-6">
            <div className="flex items-center flex-col gap-3 border-r-1 border-[#D9D9D9]">
              <img src={call} alt="Parent Avatar" className="w-6 h-6" />
              <p className="text-[#484848] text-[18px]">Contact Number</p>
              <p className="text-[#484848] font-[500] text-[22px]">
                +91 {(userData !== null && userData[0]) || ""}
              </p>
            </div>
            <div className="flex items-center flex-col gap-3 border-r-1 border-[#D9D9D9]">
              <img src={firstName} alt="Parent Avatar" className="w-6 h-6" />
              <p className="text-[#484848] text-[18px]">First Name</p>
              <p className="text-[#484848] font-[500] text-[22px]">
                {userFirstName[0] || ""}
              </p>
            </div>
            <div className="flex items-center flex-col gap-3 ">
              <img src={lastName} alt="Parent Avatar" className="w-6 h-6" />
              <p className="text-[#484848] text-[18px]">Last Name</p>
              <p className="text-[#484848] font-[500] text-[22px]">
                {userFirstName[1] || ""}
              </p>
            </div>
          </div>
        </div>
        {/* Subscription Details */}
        {/* <div className="mt-6 p-8 bg-white shadow-lg rounded-2xl">
          <h3 className="text-[26px] font-[600] text-[#484848]">
            My Subscription
          </h3>
          <div className="flex justify-between items-center my-4">
            <p className="text-[#484848] text-[22px] font-[500]">Basic Plan</p>
            <p className="bg-[radial-gradient(circle,#0EB401_5%,#82F479_200%)] text-[18px] text-white py-1 px-6 rounded-lg">
              Active
            </p>
          </div>
          <div className="border-t-[1px] w-full border-[#D9D9D9] my-5"></div>
          <p className="text-[#484848] text-[22px] font-[500] mb-4">
            Plan Details
          </p>
          <div className="flex justify-start items-center gap-3 mb-8">
            <p className="text-blue-500 text-[22px] flex items-center gap-2 font-[500] border-r-1 border-[#D9D9D9] pr-4">
              <TbDeviceMobileCheck size={28} />
              Started: 04 - 02 - 2025
            </p>
            <p className="text-red-500 text-[22px] flex font-[500] items-center gap-2">
              <MdError size={28} />
              Expires: 04 - 02 - 2026
            </p>
          </div>
          <button className="w-full hover:opacity-90 transition-all bg-[radial-gradient(circle,#0EB401_1%,#82F479_180%)] p-4 rounded-[100px] text-white text-[20px] md:text-[24px] font-[600] cursor-pointer">
            Upgrade Now
          </button>
        </div> */}
        {/* footer */}
        <footer className="text-center text-[#D2D2D2] my-8 text-[50px] font-semibold">
          Learn . Grow . Achieve
        </footer>
      </div>
    </div>
  );
};

export default Profile;
