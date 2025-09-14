import CusionImg from "../assets/Group 1013.png"
import MenduVadaImg from "../assets/pngwing.com (18).png"
import TagLine from "../assets/where butter meets heritage group.svg"
import MenuImg from "../assets/menu.jpeg"

function Banner() {
    return (
        <>
            <div className="min-h-screen pt-[240px] relative z-10">
                <img src={CusionImg} alt="" className="w-full object-cover" />
                <img src={TagLine} alt="" className="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2" />
                <img src={MenduVadaImg} alt="" className="absolute -left-10 -bottom-5 size-[300px]" />
            </div>
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-primary text-5xl font-bold text-center">Our Authentic Menu</h1>
                <div className="w-[400px] h-[500px] mt-10 bg-red-500">
                    <img src={MenuImg} alt="" className="w-full h-full" />
                </div>
            </div>
        </>
    )
}

export default Banner