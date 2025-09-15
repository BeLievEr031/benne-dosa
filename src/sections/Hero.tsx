import HeroTextSvg from "../assets/Group 1011.svg"
import DosaInPlateImg from "../assets/Group 1018.png"
import HeroBtmBorder from "../assets/Group 964.svg"
import MiniIndicator from "../assets/mindicator.svg"
function Hero() {
    return (
        <section className="sm:h-screen pt-2 px-4 bg-[#2d7527]">
            <div className="pt-24 sm:h-screen">
                <div className="relative flex justify-center sm:h-[50%] h-[68%]">
                    <img src={HeroTextSvg} alt=""
                        className="pl-4 w-[1500px] h-[280px]"
                    />
                    <div
                        className="absolute top-[35%] sm:w-[400px] z-10"
                    >
                        <img src={DosaInPlateImg} alt=""
                            className="sm:w-full w-[90%] pl-7 sm:pl-0 pt-13 sm:pt-18 overflow-hidden"
                        />
                        <img src={MiniIndicator} alt=""
                            className="absolute sm:bottom-0 -bottom-0 sm:h-[30%] h-[25%] sm:translate-y-1/2 sm:left-1/2 -translate-x-1/2 left-[49%] translate-y-[49%]"
                        />
                    </div>
                </div>

                <div className="absolute left-0 sm:bottom-0 bottom-52">
                    <img src={HeroBtmBorder} />
                </div>
            </div>

        </section>
    )
}

export default Hero