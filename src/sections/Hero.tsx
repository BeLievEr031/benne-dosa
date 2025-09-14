import HeroTextSvg from "../assets/Group 1011.svg"
import DosaInPlateImg from "../assets/Group 1018.png"
import HeroBtmBorder from "../assets/Group 964.svg"
import MiniIndicator from "../assets/mindicator.svg"
function Hero() {
    return (
        <section className="h-screen pt-2 bg-[#2d7527]">
            <div className="pt-24 h-screen">
                <div className="relative flex justify-center h-[80%]">
                    <img src={HeroTextSvg} alt=""
                        className="w-[1500px] h-[280px]"
                    />
                    <div
                        className="absolute top-[35%] w-[400px] z-10"
                    >
                        <img src={DosaInPlateImg} alt=""
                            className="w-full"
                        />
                        <img src={MiniIndicator} alt=""
                            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
                        />
                    </div>
                </div>

                <div className="absolute left-0 bottom-0">
                    <img src={HeroBtmBorder} />
                </div>
            </div>

        </section>
    )
}

export default Hero