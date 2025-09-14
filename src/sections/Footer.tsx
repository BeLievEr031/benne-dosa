import BorderImg from "../assets/bg3.svg"
import Logo from "../assets/image-removebg-preview.png"
import Onam1Img from "../assets/onam1.svg"
import BenneCart from "../assets/h4visa.png"
function Footer() {
    return (
        <footer className='min-h-screen bg-primary relative'>
            <div>
                <img src={BorderImg} alt="" />
            </div>
            <div className="w-[50%] mx-auto grid grid-cols-3 pt-10">
                <div className="">
                    <img src={Logo} alt="" className="w-[200px]" />
                </div>
                <div className="font-bold text-2xl font-sans space-y-1 ">
                    <p>Home</p>
                    <p>History</p>
                    <p>Menu</p>
                    <p>Gallery</p>
                    <p>Contact</p>
                </div>
                <div className="text-right font-bold">
                    <p>Lok Upvan Circle,</p>
                    <p>Barrister Nath Pai Rd,</p>
                    <p>Pokhran Rd 2,</p>
                    <p>Thane West. </p>

                    <div>
                        <p>
                            Phone: +91 9920839797
                        </p>
                        <p>
                            Email: benniedosa@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <img src={Onam1Img} alt="" className="rotate-45 absolute -translate-x-1/2 left-10 top-[40%] size-[300px]" />
            <img src={BenneCart} alt="" className="absolute right-0 top-[15%]
            " />
        </footer>
    )
}

export default Footer