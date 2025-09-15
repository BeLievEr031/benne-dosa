import TimeLine1 from "../assets/timelien1.svg"
import OrangeDot from "../assets/dot orange.svg"
import BeginningImg from "../assets/Group 1014.png"
import RevolutionImg from "../assets/Group 1015.png"
import BeondBorderImg from "../assets/Group 1016.png"
import BenneDosaCartImg from "../assets/Group 1017.png"
import Onam2Img from "../assets/onam2.svg"
import PuffedRiceBowlImg from "../assets/puffedrice.png"
import ButterImg from "../assets/benne.png"
import WheatBagImg from "../assets/generated-image (5).png"

function History() {
    return (
        <section className="min-h-auto bg-secondary -translate-y-0.5 pt-10 relative bottom-4">
            <div className="px-32 max-sm:px-4">
                <h1 className="text-5xl text-center text-primary font-bold max-sm:text-2xl sm:mt-0 mt-20">
                    History
                </h1>

                {/* Desktop timeline (absolute positioned rows) */}
                <div className="hidden sm:block">
                    <Row1 />
                    <Row2 />
                    <Row3 />
                    <Row4 />
                </div>

                {/* Mobile timeline (stacked layout with scattered deco images) */}
                <div className="flex flex-col gap-16 items-center mt-10 sm:hidden">
                    <MobileRow img={BeginningImg} decoImg={PuffedRiceBowlImg} decoPos="left" />
                    <MobileRow img={RevolutionImg} decoImg={ButterImg} decoPos="right" />
                    <MobileRow img={BeondBorderImg} decoImg={WheatBagImg} decoPos="left" />
                    <MobileRow img={BenneDosaCartImg} small />
                </div>

                {/* Decorative elements only for desktop */}
                <img
                    src={PuffedRiceBowlImg}
                    alt=""
                    className="absolute -left-10 top-[0%] size-48 z-10 max-sm:hidden"
                />
                <img
                    src={ButterImg}
                    alt=""
                    className="absolute -right-12 top-[16%] size-48 z-10 max-sm:hidden"
                />
                <img
                    src={WheatBagImg}
                    alt=""
                    className="absolute -left-12 top-[36%] w-42 z-10 max-sm:hidden"
                />
                <img
                    src={Onam2Img}
                    alt=""
                    className="w-[325px] absolute -bottom-[12%] left-0 -translate-x-1/4 max-sm:w-[150px] max-sm:-bottom-[5%]"
                />
            </div>

            {/* ✅ Timeline visible only on desktop */}
            <div className="hidden sm:block">
                <TimeLine />
            </div>
        </section>
    )
}


function TimeLine() {
    return (
        <div className="pt-46 px-12 max-sm:px-4">
            <img
                src={TimeLine1}
                alt=""
                className="w-full max-sm:h-[150px] object-contain"
            />
        </div>
    )
}

function Row1() {
    return (
        <div className="absolute w-fit pl-6">
            <img src={BeginningImg} alt="" className="w-[500px]" />
            <img
                src={OrangeDot}
                alt=""
                className="absolute right-[16%] top-[75%]"
            />
        </div>
    )
}
function Row2() {
    return (
        <div className="absolute right-[8%] top-[32%]">
            <img src={RevolutionImg} alt="" className="w-[500px]" />
            <img
                src={OrangeDot}
                alt=""
                className="absolute right-[14%] top-[73%]"
            />
        </div>
    )
}
function Row3() {
    return (
        <div className="absolute top-[42%]">
            <img src={BeondBorderImg} alt="" className="w-[500px]" />
            <img
                src={OrangeDot}
                alt=""
                className="absolute right-[19.5%] top-[88%]"
            />
            <img
                src={OrangeDot}
                alt=""
                className="absolute left-[5%] bottom-[3%]"
            />
        </div>
    )
}
function Row4() {
    return (
        <div className="absolute top-[65%] right-[15%]">
            <img src={BenneDosaCartImg} alt="" className="w-[450px]" />
            <img
                src={OrangeDot}
                alt=""
                className="absolute left-[22%] top-[88%]"
            />
        </div>
    )
}

/* Mobile reusable row */
function MobileRow({
    img,
    small,
    decoImg,
    decoPos,
}: {
    img: string
    small?: boolean
    decoImg?: string
    decoPos?: "left" | "right"
}) {
    return (
        <div className="relative w-full flex justify-center">
            {/* History image */}
            <img
                src={img}
                alt="History step"
                className={`rounded-lg ${small ? "w-64" : "w-80"}`}
            />

            {/* Decorative image (mobile only, alternates left/right) */}
            {decoImg && (
                <img
                    src={decoImg}
                    alt="decoration"
                    className={`absolute -bottom-6 ${decoPos === "left" ? "-left-6" : "-right-6"
                        } w-20 max-[400px]:w-16`}
                />
            )}
        </div>
    )
}

export default History
