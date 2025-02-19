import FooterBg from '../../public/footer-bg.png'

const FooterSection = () => {
    return (  
        <div className="bg-[#57da4d] pt-10">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-9 gap-4 border-y-1 border-white py-10">
                    <div className="border-r-1 border-white text-white font-400 text-[20px] text-left">Home</div>
                    <div className="border-r-1 border-white text-white font-400 text-[20px] col-span-2 text-center">About</div>
                    <div className="border-r-1 border-white text-white font-400 text-[20px] col-span-2 text-center ">Terms & Conditions</div>
                    <div className="border-r-1 border-white text-white font-400 text-[20px] col-span-2 text-center ">Privacy Policy</div>
                    <div className="text-white font-400 text-[20px] col-span-2 text-right">Refund & Cancellation policy</div>
                </div>
            </div>
            <div className='bg-[url(../../public/footer-bg.png)] bg-cover bg-center bg-no-repeat w-full h-170 relative  mt-14'>
                <div className='absolute left-1/2 transform -translate-x-1/2 top-0'>
                    <h4 className="text-[20px] font-[400] text-[#fff] text-center mb-8">
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