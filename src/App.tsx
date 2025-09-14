import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import History from "./sections/History"
import CusionImg from "./assets/Group 1013.png"
import MenuImg from "./assets/menu.jpeg"
import MenduVadaImg from "./assets/pngwing.com (18).png"
import Onam1Img from "./assets/onam1.svg"
import DosaImg1 from './assets/delicious-indian-dosa-composition.jpg'
import Timeline2 from "./assets/timeline2.svg"
import TagLine from "./assets/where butter meets heritage group.svg"
function App() {
  return (
    <main className="min-h-screen bg-[#2d7527] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <div className="bg-secondary relative">
        <History />
        <div className="min-h-screen pt-[240px] relative z-10">
          <img src={CusionImg} alt="" className="w-full object-cover" />
          <img src={TagLine} alt="" className="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2" />
          <img src={MenduVadaImg} alt="" className="absolute -left-10 -bottom-5 size-[300px]" />
        </div>
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-primary text-5xl font-bold text-center">Our Authentic Menu</h1>
          <div className="w-[400px] h-[500px] mt-10 bg-red-500">
            <img src={MenuImg} alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="bg-primary h-screen py-20">
          <h1 className="text-secondary text-5xl font-bold text-center">Our Visual Gallery</h1>
          <div className="relative flex justify-center pt-16 gap-x-2">
            <div className="size-[358px]">
              <img src={DosaImg1} className="w-full h-full object-cover rounded-2xl object-top" />
            </div>
            <div className="space-y-2">
              <div className="h-[175px] w-[350px]">
                <img src={DosaImg1} className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="h-[175px] w-[350px] flex gap-x-2">
                <img src={DosaImg1} className="w-full h-full object-cover rounded-2xl" />
                <img src={DosaImg1} className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
            <img src={Onam1Img} className="absolute left-0" />
          </div>
        </div>
        {/* <img src={Timeline2} alt="" className="absolute top-[58%] ml-8" /> */}
      </div>
    </main>
  )
}

export default App