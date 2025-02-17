
import BannerLeft from '../../public/banner-left.png'
import BannerRight from '../../public/banner-right.png'
import LockerRoom from '../../public/locker-room.png'
import TapuTeam from '../../public/tapu-team.png'
import BookShelf from '../../public/book-shelf.png'

const Banner = () => {
    return (
        <div className='h-[110vh]'>
            <img className='absolute top-0 left-0 h-[290px]' src={BannerLeft} alt="" />
            <img className='absolute top-0 right-0' src={BannerRight} alt="" />
            <img className='absolute top-100 right-0' src={BookShelf} alt="" />
            <img className='absolute top-65 left-0' src={LockerRoom} alt="" />
            <img className='absolute top-110 left-1/2 transform -translate-x-1/2' src={TapuTeam} alt="" />
            <div className="absolute top-35 left-1/2 transform -translate-x-1/2 text-center w-[70%]">
                <p className="flex flex-wrap justify-center items-center gap-2 leading-[1.2] mb-6">
                    <span className="text-[70px] bg-gradient-to-r from-[#D4002F] to-[#FF5177] bg-clip-text text-transparent">1000+</span>
                    <span className="text-[38px] text-[#fff]">Games in</span>
                    <span className="text-[38px] text-[#FFF25F]">Multiple Languages</span>
                    <span className="text-[38px] text-[#fff]">and</span> <br />
                    <span className="text-[38px] text-[#FFF25F]">Progress Reports</span>
                    <span className="text-[38px] text-[#fff]">at Your Fingertips!</span>
                </p>

                <p className="text-[24px] font-[400] text-[#fff]">Introductory Offer</p>
                <p className="text-[54px] font-[400] text-[#fff]">₹499 only</p>
                <p className='text-[22px] text-[#ed1443] mb-3'><s>₹999</s> 50% off</p>

                <button className="relative px-[44px] py-[20px] text-[#fff] text-[20px] font-400 rounded-[8px] bg-[#FFC41F] z-10 cursor-pointer">
                    <span>Pre - Register Now</span>
                    <div className="absolute inset-0 p-[4px] rounded-[8px] bg-gradient-to-t from-[#BA6F19] to-[#FFC41F] -z-10">
                        <div className="h-full w-full bg-[#FFC41F] rounded-[6px]"></div>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default Banner;