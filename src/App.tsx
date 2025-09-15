import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import History from "./sections/History"
import Banner from "./sections/Banner"
import Gallery from "./sections/Gallery"
import Review from "./sections/Review"
import Footer from "./sections/Footer"

function App() {
  return (
    <main className="h-[70vh] sm:min-h-screen bg-[#2d7527] text-white">
      <div id="home">
        <Navbar />
        <Hero />
      </div>

      <div className="bg-secondary relative overflow-hidden mt-20 sm:-mt-[1px]">
        <section id="history">
          <History />
        </section>

        <section id="menu">
          <Banner />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="review">
          <Review />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  )
}

export default App
