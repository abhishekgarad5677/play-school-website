import AboutBanner from '../../public/about-img.png'

const AboutSection = () => {
    return (
        <div>
            <section className="bg-[#4ecd45] py-16 px-6">
                {/* <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2 items-center"> */}
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
                {/* <div class="grid grid-cols-3 gap-6 max-w-7xl mx-auto ">
                    <div class="...">01</div>
                    <div class="...">02</div>
                    <div class="...">03</div>
                    <div class="...">05</div>
                    <div class="col-span-2 ...">04</div>
                    <div class="...">06</div>
                    <div class="col-span-2 ...">07</div>
                </div> */}
            </section>
        </div>
    );
}

export default AboutSection;   