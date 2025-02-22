import FooterBg from '../../public/footer-bg2.png'

const FooterSection = () => {
    return (
        <div className="bg-[#57da4d]">
            {/* <div className="w-[90%] mx-auto">

            </div> */}
            <div className='bg-[url(../../public/footer-bg2.png)] bg-cover bg-center bg-no-repeat w-full h-75 relative z-10'>
                <div className='absolute left-1/2 transform -translate-x-1/2 top-10 w-[60%]'>
                    <div className="grid grid-cols-11 gap-4 border-y-1 border-white py-3 mb-10">
                        <div className="border-r-1 border-white text-white font-400 text-[16px] text-left">Home</div>
                        <div className="border-r-1 border-white text-white font-400 text-[16px] col-span-2 text-center">About</div>
                        <div className="border-r-1 border-white text-white font-400 text-[16px] col-span-3  text-center ">Terms & Conditions</div>
                        <div className="border-r-1 border-white text-white font-400 text-[16px] col-span-2 text-center ">Privacy Policy</div>
                        <div className="text-white font-400 text-[16px] col-span-3 text-right">Refund & Cancellation policy</div>
                    </div>
                    <h4 className="text-[20px] font-[400] text-[#fff] text-center mb-4">
                        Copyright © 2025 TMKOC Playschool. All Rights Reserved.
                    </h4>
                    <h4 className="text-[16px] font-[400] text-[#fff] leading-[19.36px] text-center">
                        Powered by Neela Mediatech Private Limited
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;