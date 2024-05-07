import Header from "./components/Header";
import Banner from "./components/Banner";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="bg-[#3d3d3d] text-white text-center ">
      <Header/>
      <Banner/>
      <Courses/>
      <Footer/>
   </div>
  );
}