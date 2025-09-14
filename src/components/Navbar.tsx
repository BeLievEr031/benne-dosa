
function Navbar() {
    return (
        <header className="fixed top-5 w-full px-10">
            <nav className="flex justify-between w-full">
                <div>Logo</div>
                <div className="space-x-2">
                    <button className="font-bold uppercase bg-[#14520f] px-3 py-1.5 rounded-xl">Order</button>
                    <button className="font-bold uppercase bg-[#14520f] px-3 py-1.5 rounded-xl">9511849241</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar