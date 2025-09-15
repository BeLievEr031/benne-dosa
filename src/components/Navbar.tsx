import { Phone } from "lucide-react"
import Logo from "../assets/image-removebg-preview.png"
import swiggy from "../assets/swiggy.png"

function Navbar() {
    return (
        <header className="fixed top-5 w-full px-4 md:px-10">
            <nav className="flex md:flex-row justify-between items-center w-full gap-3 md:gap-0">
                <div className="text-lg font-bold">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-[140px] h-[50px] mx-auto sm:mx-0 max-sm:w-[100px] max-sm:h-[35px]"
                    />
                </div>

                <div className="flex sm:flex-row gap-2 sm:space-x-2">
                    {/* Mobile: Call Icon */}
                    <button className="flex items-center justify-center font-bold uppercase bg-[#14520f] 
            px-2 py-1 text-sm rounded-lg w-full sm:w-auto sm:px-3 sm:py-1.5 sm:rounded-xl sm:text-base 
            block md:hidden">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    {/* Desktop: Order Text */}
                    <button className="font-bold uppercase bg-[#14520f] 
            px-2 py-1 text-sm rounded-lg w-full sm:w-auto sm:px-3 sm:py-1.5 sm:rounded-xl sm:text-base 
            hidden md:block">
                        Order
                    </button>

                    {/* Phone Number (always visible) */}
                    <button className="font-bold uppercase bg-[#14520f] 
            px-2 py-1 text-sm rounded-lg w-full sm:w-auto sm:px-3 sm:py-1.5 sm:rounded-xl sm:text-base">
                        9511849241
                    </button>
                    <a
                        href="https://www.swiggy.com/menu/1139545?source=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <img
                            src={swiggy}
                            alt="Swiggy"
                            className="w-0 sm:w-9 sm:h-9 md:w-10 md:h-10 sm:p-1.5 bg-green-900 rounded-full"
                        />
                    </a>

                </div>
            </nav>
        </header>
    )
}

export default Navbar
