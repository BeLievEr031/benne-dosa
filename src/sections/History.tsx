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
        <section className="min-h-auto bg-secondary -translate-y-0.5 pt-10  relative">
            <div className="px-32">
                <h1 className="text-5xl text-center text-primary font-bold">History</h1>
                <Row1 />
                <Row2 />
                <Row3 />
                <Row4 />
                <img src={PuffedRiceBowlImg} alt="" className="absolute -left-10 top-[6%] size-48 z-10" />
                <img src={ButterImg} alt="" className="absolute -right-12 top-[16%] size-48 z-10" />
                <img src={WheatBagImg} alt="" className="absolute -left-12 top-[36%] w-42 z-10" />
                <img src={Onam2Img} alt="" className="w-[325px] absolute -bottom-[12%] left-0 -translate-x-1/4" />
            </div>
            <TimeLine />
        </section>
    )
}


function TimeLine() {
    return <div className="pt-46 px-12">
        <img src={TimeLine1} alt="" />
    </div>
}

function Row1() {
    return <div className="absolute w-fit pl-6">
        <img src={BeginningImg} alt=""
            className="w-[500px]"
        />
        <img src={OrangeDot} alt=""
            className="absolute right-[16%] top-[75%]"
        />
    </div>
}
function Row2() {
    return <div className="absolute right-[8%] top-[32%]">
        <img src={RevolutionImg} alt=""
            className="w-[500px]"
        />
        <img src={OrangeDot} alt=""
            className="absolute right-[14%] top-[73%]"
        />
        {/* <img src={OrangeDot} alt=""
            className="absolute right-[31%] top-[87.5%]"
        /> */}
    </div>
}

function Row3() {
    return <div className="absolute top-[42%]">
        <img src={BeondBorderImg} alt=""
            className="w-[500px]"
        />
        <img src={OrangeDot} alt=""
            className="absolute right-[19.5%] top-[88%]"
        />
        <img src={OrangeDot} alt=""
            className="absolute left-[5%] bottom-[3%]"
        />
    </div>
}

function Row4() {
    return <div className="absolute top-[65%] right-[15%]">
        <img src={BenneDosaCartImg} alt="" className="w-[450px]" />
        <img src={OrangeDot} alt="" className="absolute left-[22%] top-[88%]" />
    </div>
}

export default History