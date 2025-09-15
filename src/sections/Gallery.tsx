import Onam1Img from "../assets/onam1.svg"
import DosaImg1 from "../assets/delicious-indian-dosa-composition.jpg"
import DosaImg2 from "../assets/dosa.jpg"
import IdliImg from "../assets/pngwing.com (16).png"

function Gallery() {
    return (
        <div className="bg-primary min-h-screen py-10 sm:py-20 relative">
            <h1 className="text-secondary text-5xl font-bold text-center max-sm:text-2xl">
                Our Visual Gallery
            </h1>

            {/* Desktop layout */}
            <div
                className="
                    relative flex justify-center pt-16 gap-x-2
                    max-sm:hidden
                "
            >
                {/* Main big image */}
                <div className="size-[358px] relative z-10">
                    <img
                        src={DosaImg1}
                        className="w-full h-full object-cover rounded-2xl object-top"
                    />
                </div>

                {/* Right side images */}
                <div className="space-y-2 flex flex-col items-center">
                    <div className="h-[175px] w-[350px]">
                        <img
                            src={DosaImg1}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    <div className="h-[175px] w-[350px] flex gap-x-2">
                        <img
                            src={DosaImg2}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <img
                            src={DosaImg1}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                {/* Decorative top image */}
                <img
                    src={Onam1Img}
                    className="absolute w-[12%] left-[21.7%] sm:top-0 rotate-50 sm:rotate-0 top-11"
                />
            </div>

            {/* ✅ Mobile Layout (Stylish grid) */}
            <div className="sm:hidden px-4 pt-10 grid grid-cols-2 gap-3">
                <div className="col-span-2">
                    <img
                        src={DosaImg1}
                        className="w-full h-40 object-cover rounded-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={DosaImg2}
                        className="w-full h-32 object-cover rounded-xl shadow-md"
                    />
                </div>
                <div>
                    <img
                        src={DosaImg1}
                        className="w-full h-32 object-cover rounded-xl shadow-md"
                    />
                </div>
                <div className="col-span-2">
                    <img
                        src={DosaImg2}
                        className="w-full h-36 object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>

            {/* Decorative bottom image */}
            <img
                src={IdliImg}
                className="absolute right-0 bottom-0 size-[300px] translate-y-[30%] translate-x-7 max-sm:size-[80px] max-sm:translate-y-[40%]"
            />
        </div>
    )
}

export default Gallery
