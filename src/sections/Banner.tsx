import CusionImg from "../assets/Group 1013.png"
import MenduVadaImg from "../assets/pngwing.com (18).png"
import onam from "../assets/onam2.svg"
import TagLine from "../assets/where butter meets heritage group.svg"
import MenuImg from "../assets/menu.jpeg"

function Banner() {
    return (
        <>
            <div className="sm:min-h-screen pt-[240px] relative z-10">
                <img
                    src={CusionImg}
                    alt="Cushion Background"
                    className="w-full object-cover"
                />

                {/* Tagline centered */}
                <img
                    src={TagLine}
                    alt="Tagline"
                    className="absolute bottom-9 sm:top-1/2 left-1/2 w-3/6 sm:w-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 "
                />

                {/* Mendu Vada */}
                <img
                    src={MenduVadaImg}
                    alt="Mendu Vada"
                    className="absolute sm:-left-10 -bottom-5 w-24 sm:w-72"
                />
            </div>

            <div className="flex flex-col items-center justify-center sm:py-20">
                <h1 className="text-primary mt-3 sm:mt-0 sm:text-5xl text-2xl font-bold text-center">Our Authentic Menu</h1>
                <div className="w-[400px] h-[500px] mt-10 flex justify-center">
                    <img src={MenuImg} alt="" className="sm:w-full sm:h-full w-[75%] h-[85%]" />
                    <img
                    src={MenduVadaImg}
                    alt="Mendu Vada"
                    className="absolute sm:-left-10 -bottom-5 w-24 sm:w-72"
                />
                    <img
                    src={onam}
                    alt="Bg"
                    className="absolute sm:-left-30 md:w-100 sm:w-60 w-0"
                />
                    <img
                    src={onam}
                    alt="bg"
                    className="absolute sm:-right-30 md:w-100 sm:w-60 w-0"
                />
                </div>
            </div>
        </>
    )
}

export default Banner