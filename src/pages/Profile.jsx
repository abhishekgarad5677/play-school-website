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
import useApi from "../utils/api";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { div } from "framer-motion/client";
import { ChildDetails } from "../components/ChildDetails";
import { AddChild } from "../components/AddChild";
import { useNavigate } from "react-router-dom";
import avatar1 from "../../public/avatar/Gogi1.png";
import avatar2 from "../../public/avatar/Gogi2.png";
import avatar3 from "../../public/avatar/Gogi3.png";
import avatar4 from "../../public/avatar/Goli2.png";
import avatar5 from "../../public/avatar/Goli3.png";
import avatar6 from "../../public/avatar/Pinku1.png";
import avatar7 from "../../public/avatar/Pinku3.png";
import avatar8 from "../../public/avatar/Pinku5.png";
import avatar9 from "../../public/avatar/Sonu1.png";
import avatar10 from "../../public/avatar/Sonu2.png";
import avatar11 from "../../public/avatar/Sonu3.png";
import avatar12 from "../../public/avatar/Tappu1.png";
import avatar13 from "../../public/avatar/Tappu2.png";
import avatar14 from "../../public/avatar/Tappu3.png";
import avatar15 from "../../public/avatar/Tappu4.png";

const Profile = () => {
  const { data, makeRequest } = useApi();
  const [userData, setUserData] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");
  const [childDetails, setChildDetails] = useState([]);

  const avatar = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12,
    avatar13,
    avatar14,
    avatar15,
  ];

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
      setUserFirstName(userData.name.split(" "));
      setChildDetails(userData?.students);
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

  console.log(childDetails);

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

          <div className="flex items-center justify-center space-x-4 mt-4">
            {childDetails?.map((ele, index) => {
              if (ele?.gender.toLowerCase() === "boy") {
                return (
                  <div
                    key={index}
                    onClick={() => openModal(ele)}
                    className="p-4 space-y-2 cursor-pointer text-center text-white border border-transparent rounded-lg bg-[radial-gradient(circle,#EE82FF_6%,#960CFF_120%),url('../../public/profile/child-card.png')]"
                  >
                    <img
                      className="w-30 h-30"
                      src={avatar[ele?.avatorNo]}
                      alt=""
                    />
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
                    <img
                      className="w-30 h-30"
                      src={avatar[ele?.avatorNo]}
                      alt=""
                    />
                    <p className="text-[28px] font-[500]">{ele?.name}</p>
                  </div>
                );
              }
            })}

            {childDetails.length < 3 && (
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
                +91 {userData?.phoneNumber || ""}
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
        <footer className="text-center text-[#D2D2D2] my-8 text-[50px] font-semibold">
          Learn . Grow . Achieve
        </footer>
      </div>
    </div>
  );
};

export default Profile;
