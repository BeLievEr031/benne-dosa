import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import History from "./sections/History"
import Timeline2 from "./assets/timeline2.svg"
import Banner from "./sections/Banner"
import Gallery from "./sections/Gallery"
import Review from "./sections/Review"
import Footer from "./sections/Footer"
function App() {
  return (
    <main className="min-h-screen bg-[#2d7527] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <div className="bg-secondary relative">
        <History />
        <Banner />
        <Gallery />
        <Review />
        <Footer />
        {/* <img src={Timeline2} alt="" className="absolute top-[58%] ml-8" /> */}
      </div>

    </main>
  )
}

export default App