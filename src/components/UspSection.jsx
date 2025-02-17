import card1 from '../../public/usp/card-1.png'

const UspSection = () => {
    return (
        <div className="bg-[#b03399] py-16 ">
            <h4 className="text-[34px] font-[400] text-[#fff] leading-[41.14px] text-center">
                USP of TMKOC Playschool
            </h4>
            <p className="text-[18px] font-[400] text-[#fff] leading-[44px] text-center fredoka-font mb-8">
                Fun & interactive learning with TMKOC characters! Explore alphabets, numbers, music & more in a safe, playful environment.
            </p>
            <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
                <div
                    className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#D4002F] to-[#FF5177] pt-4 px-4 pb-14 "
                >
                    <img className='w-[200px] h-[200px]' src={card1} alt="" />
                    <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center'>
                        Kids activity reporting
                    </p>
                    <p className='text-[16px] font-[400] text-[#fff] leading-[28px] fredoka-font text-center'>
                        attendance, progress, scores, achievements
                    </p>
                </div>
                <div
                    className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#D4002F] to-[#FF5177] pt-4 px-4 pb-14 "
                >
                    <img className='w-[200px] h-[200px]' src={card1} alt="" />
                    <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center'>
                        Kids activity reporting
                    </p>
                    <p className='text-[16px] font-[400] text-[#fff] leading-[28px] fredoka-font text-center'>
                        attendance, progress, scores, achievements
                    </p>
                </div>
                <div
                    className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#D4002F] to-[#FF5177] pt-4 px-4 pb-14 "
                >
                    <img className='w-[200px] h-[200px]' src={card1} alt="" />
                    <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center'>
                        Kids activity reporting
                    </p>
                    <p className='text-[16px] font-[400] text-[#fff] leading-[28px] fredoka-font text-center'>
                        attendance, progress, scores, achievements
                    </p>
                </div>
                <div
                    className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#D4002F] to-[#FF5177] pt-4 px-4 pb-14 "
                >
                    <img className='w-[200px] h-[200px]' src={card1} alt="" />
                    <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center'>
                        Kids activity reporting
                    </p>
                    <p className='text-[16px] font-[400] text-[#fff] leading-[28px] fredoka-font text-center'>
                        attendance, progress, scores, achievements
                    </p>
                </div>
                {/* <div className="...">02</div>
                <div className="...">03</div>
                <div className="...">04</div> */}
            </div>
        </div>
    )
}

export default UspSection;