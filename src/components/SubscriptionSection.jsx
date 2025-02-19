import LeftGroup from '../../public/subscription/subs-left.png'
import RightGroup from '../../public/subscription/subs-right.png'

const SubscriptionSection = () => {

    // const []

    return (
        <div className="pt-24 pb-[10rem] relative bg-[#0095ff]">
            <img className='absolute left-[-100px] top-65' src={LeftGroup} alt="" />
            <img className='absolute right-0 top-80' src={RightGroup} alt="" />
            <h4 className="text-[34px] font-[400] text-[#fff] leading-[41.14px] text-center mb-9">
                TMKOC Playschool subscription plans
            </h4>
            <div className="mx-auto flex justify-center align-center gap-4">
                <div className=" border-none rounded-[18px] bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <div className="bg-gradient-to-r from-[#0066FF] to-[#00CAFF] p-4 flex flex-col gap-6 rounded-[18px] mb-6">
                        <div className="flex justify-between items-center gap-8">
                            <p className="text-[16px] leading-[19.36px] font-[400] text-white">
                                Solo student Plan
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                                    <span className="text-md font-small text-[#0066FF]">−</span>
                                </button>

                                <span className="text-[12px] leading-[14.52px] text-white font-[400]">1 Year</span>
                                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                                    <span className="text-md font-small text-[#0066FF]">+</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                                <span className="text-[36px] leading-[43.56px] font-[400]">₹499 Only </span>
                                <span className="text-[28px] leading-[33.88px] font-[500] text-[#ed1443] fredoka-font"><s>₹999</s></span>
                            </p>
                        </div>
                    </div>
                    <ul className="fredoka-font text-left list-disc pl-6 text-[#1f9cf5] space-y-2.5 mb-6">
                        <li>Benefits Benefits Benefits Benefits</li>
                        <li>Benefits Benefits Benefits Benefits</li>
                        <li>Benefits Benefits Benefits Benefits</li>
                        <li>Benefits Benefits Benefits Benefits</li>
                    </ul>
                    <button className="text-center w-[100%] h-[54px] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] rounded-[100px] text-white uppercase text-[14px] font-[400] leading-[16.94px]">
                        Apply Now
                    </button>
                </div>
                <div className=" border-none rounded-[18px] bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <div className="bg-gradient-to-r from-[#0066FF] to-[#00CAFF] p-4 flex flex-col gap-6 rounded-[18px] mb-6">
                        <div className="flex justify-between items-center gap-8">
                            <p className="text-[16px] leading-[19.36px] font-[400] text-white">
                                Dual student Plan
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                                    <span className="text-md font-small text-[#0066FF]">−</span>
                                </button>

                                <span className="text-[12px] leading-[14.52px] text-white font-[400]">1 Year</span>
                                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                                    <span className="text-md font-small text-[#0066FF]">+</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                                <span className="text-[36px] leading-[43.56px] font-[400]">₹999 Only </span>
                                <span className="text-[28px] leading-[33.88px] font-[500] text-[#ed1443] fredoka-font"><s>₹1499</s></span>
                            </p>
                        </div>
                    </div>
                    <ul className="fredoka-font text-left list-disc pl-6 text-[#1f9cf5] space-y-2.5 mb-6">
                        <li>Benefits Benefits Benefits Benefits</li>
                        <li>Benefits Benefits Benefits Benefits</li>
                        <li>Benefits Benefits Benefits Benefits</li>
                        <li>Benefits Benefits Benefits Benefits</li>
                    </ul>
                    <button className="text-center w-[100%] h-[54px] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] rounded-[100px] text-white uppercase text-[14px] font-[400] leading-[16.94px]">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionSection;