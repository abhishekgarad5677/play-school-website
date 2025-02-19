import AboutBanner from '../../public/about-img.png'

const AboutSection = () => {
    return (
        <section className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_180%),url('/background-cover.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-[40%_60%] gap-12 items-center">
                <div>
                    <img src={AboutBanner} alt="" />
                </div>
                <div>
                    <h4 className='font-400 text-[34px] text-[#fff] leading-[41.14px] mb-10'>
                        What is TMKOC Playschool
                    </h4>
                    <div>
                        <div className='flex justify-start align-center gap-6 mb-6'>
                            <div className='h-[54px] w-[54px] flex justify-center items-center bg-gradient-to-t from-[#0066FF] to-[#00CAFF] rounded-[12px]'>
                                <span className='font-400 text-white text-[24px]'>1</span>
                            </div>
                            <div>
                                <p className='font-400 text-[20px] leading-[24.2px] text-[#fff] uppercase'>Fun & Interactive Learning </p>
                                <p className='font-500 text-[18px] leading-[21.78px] text-[#fff] fredoka-font'>Engaging games that make education exciting</p>
                            </div>
                        </div>
                        <div className='flex justify-start align-center gap-6 mb-6'>
                            <div className='h-[54px] w-[54px] flex justify-center items-center bg-gradient-to-t from-[#FFBC0C] to-[#FFF25F] rounded-[12px]'>
                                <span className='font-400 text-white text-[24px]'>2</span>
                            </div>
                            <div>
                                <p className='font-400 text-[20px] leading-[24.2px] text-[#fff] uppercase'>Learn with TMKOC Characters </p>
                                <p className='font-500 text-[18px] leading-[21.78px] text-[#fff] fredoka-font'>Explore alphabets, numbers, colors, and music <br /> with your favorites.</p>
                            </div>
                        </div>
                        <div className='flex justify-start align-center gap-6 mb-6'>
                            <div className='h-[54px] w-[54px] flex justify-center items-center bg-gradient-to-t from-[#D4002F] to-[#FF5177] rounded-[12px]'>
                                <span className='font-400 text-white text-[24px]'>3</span>
                            </div>
                            <div>
                                <p className='font-400 text-[20px] leading-[24.2px] text-[#fff] uppercase'>Safe & Engaging</p>
                                <p className='font-500 text-[18px] leading-[21.78px] text-[#fff] fredoka-font'>A child-friendly environment designed for playful <br /> learning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;   