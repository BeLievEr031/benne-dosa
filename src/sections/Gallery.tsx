import Onam1Img from "../assets/onam1.svg"
import DosaImg1 from '../assets/delicious-indian-dosa-composition.jpg'
import DosaImg2 from '../assets/dosa.jpg'
import IdliImg from "../assets/pngwing.com (16).png"
function Gallery() {
    return (
        <div className="bg-primary h-screen py-20 relative">
            <h1 className="text-secondary text-5xl font-bold text-center">Our Visual Gallery</h1>
            <div className="relative flex justify-center pt-16 gap-x-2">
                <div className="size-[358px] relative z-10">
                    <img src={DosaImg1} className="w-full h-full object-cover rounded-2xl object-top" />
                </div>
                <div className="space-y-2">
                    <div className="h-[175px] w-[350px]">
                        <img src={DosaImg1} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="h-[175px] w-[350px] flex gap-x-2">
                        <img src={DosaImg2} className="w-full h-full object-cover rounded-2xl object-bottom-right" />
                        <img src={DosaImg1} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
                <img src={Onam1Img} className="absolute left-[20%] top-0" />
            </div>
            <img src={IdliImg} className="absolute right-0 bottom-0 size-[300px] translate-y-[30%] translate-x-15" />
        </div>
    )
}

export default Gallery