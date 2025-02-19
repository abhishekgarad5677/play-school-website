import card1 from '../../public/usp/card-1.png'
import card2 from '../../public/usp/card-2.png'
import card3 from '../../public/usp/card-3.png'
import card4 from '../../public/usp/card-4.png'

const UspSection = () => {
    return (
        <div className="bg-[#b03399] py-16 ">
            <h4 className="text-[34px] font-[400] text-[#fff] leading-[41.14px] text-center">
                USP of TMKOC Playschool
            </h4>
            <p className="text-[18px] font-[400] text-[#fff] leading-[44px] text-center fredoka-font mb-8">
                Fun & interactive learning with TMKOC characters! Explore alphabets, numbers, music & more in a safe, playful environment.
            </p>
            <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto">
                <div className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#D4002F] to-[#FF5177] pt-4 px-4 pb-6 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <img className='w-[200px] h-[200px]' src={card1} alt="" />
                    <div>
                        <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center mb-2'>
                            Kids activity reporting
                        </p>
                        <p className='text-[16px] font-[400] text-[#fff] leading-[28px] fredoka-font text-center'>
                            attendance, progress, scores, achievements
                        </p>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#0066FF] to-[#00CAFF] pt-4 px-4 pb-6 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <img className='w-[200px] h-[200px]' src={card2} alt="" />
                    <div>
                        <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center mb-2'>
                            Structured curriculum
                        </p>
                        <p className="text-[16px] font-normal text-white leading-[28px] text-center fredoka-font">
                            for all age groups <br /> (&#60;2, 2-4, 4-6, 6+)
                        </p>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#D4002F] to-[#FF5177] pt-4 px-4 pb-6 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <img className='w-[200px] h-[200px]' src={card3} alt="" />
                    <div>
                        <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center mb-2'>
                            Multi-lingual
                        </p>
                        <p className='text-[16px] font-[400] text-[#fff] leading-[28px] fredoka-font text-center'>
                            english, hindi, marathi, bangla, <br />
                            punjabi, tamil,french, spanish, <br />
                            german
                        </p>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] bg-gradient-to-t from-[#0066FF] to-[#00CAFF] pt-4 px-4 pb-6 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <img className='w-[200px] h-[200px]' src={card4} alt="" />
                    <div>
                        <p className='text-[22px] font-[400] text-[#fff] leading-[26.62px] text-center mb-2'>
                            1000+ games
                        </p>
                        <p className="text-[16px] font-normal text-white leading-[28px] text-center fredoka-font">
                            Featuring gamified learning in <br />
                            English, math, music, coloring, <br />
                            science, geography, life skills,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UspSection;