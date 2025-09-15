import BorderImg from "../assets/bg3.svg"
import Logo from "../assets/image-removebg-preview.png"
import Onam1Img from "../assets/onam1.svg"
import swiggy from "../assets/swiggy.png"
import BenneCart from "../assets/h4visa.png"
import { Instagram, MessageCircle } from "lucide-react"


function Footer() {
    return (
        <footer className="min-h-screen bg-primary relative overflow-hidden">
            {/* Border top */}
            <div>
                <img src={BorderImg} alt="" className="w-full" />
            </div>

            {/* Main content */}
            <div
                className="
                    relative z-10
                    w-[50%] mx-auto grid grid-cols-3 pt-10
                    max-sm:w-full max-sm:grid-cols-1 max-sm:gap-6 max-sm:text-center max-sm:px-4
                "
            >
                {/* Logo */}
                <div className="flex justify-center sm:justify-start">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-[140px] h-[80px] mx-auto sm:mx-0 max-sm:w-[100px] max-sm:h-[60px]"
                    />
                </div>

                {/* Navigation */}
                <div
                    className="
                        font-bold text-3xl flex flex-col items-center sm:items-center
                        font-sans space-y-2.5 text-white
                        max-sm:text-lg
                    "
                >
                    <a href="#home" className="cursor-pointer hover:text-secondary">Home</a>
                    <a href="#history" className="cursor-pointer hover:text-secondary">History</a>
                    <a href="#menu" className="cursor-pointer hover:text-secondary">Menu</a>
                    <a href="#gallery" className="cursor-pointer hover:text-secondary">Gallery</a>
                    <a href="#contact" className="cursor-pointer hover:text-secondary">Contact</a>
                </div>

                {/* Address & socials */}
                <div className="text-right sm:text-right font-bold text-white max-sm:text-center max-sm:text-sm">
                    <p>Lok Upvan Circle,</p>
                    <p>Barrister Nath Pai Rd,</p>
                    <p>Pokhran Rd 2,</p>
                    <p>Thane West.</p>

                    <div className="mt-4 space-y-1">
                        <p>Phone: +91 9920839797</p>
                        <p>Email: benniedosa@gmail.com</p>

                        <div className="flex gap-6 justify-center sm:justify-end mt-3">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/davangeribennedosa?igsh=MWpxZjJjbGI5cGc5Yg=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-8 h-8 p-1.5 bg-green-900 rounded-full" />
                            </a>

                            {/* Swiggy */}
                            <a
                                href="https://www.swiggy.com/menu/1139545?source=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={swiggy}
                                    alt="Swiggy"
                                    className="w-8 h-8 p-1.5 bg-green-900 rounded-full"
                                />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/918591934202"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-8 h-8 p-1.5 bg-green-900 rounded-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative images */}
            <img
                src={Onam1Img}
                alt=""
                className="
                    rotate-45 absolute -translate-x-1/2 left-10 top-[40%]
                    size-[300px] max-sm:size-32 max-sm:opacity-50
                    z-0
                "
            />
            <img
                src={BenneCart}
                alt=""
                className="absolute right-0 top-[15%] max-sm:w-28 z-0"
            />
        </footer>
    )
}

export default Footer
