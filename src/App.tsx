import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

function App() {
  return (
    <main className="h-[70vh] sm:min-h-screen  bg-[#2d7527] text-white min-w-full">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App