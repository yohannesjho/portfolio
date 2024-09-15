import Image from "next/image";
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiRedux } from 'react-icons/si';
import ImageSlider from "./home/_components/ImageSlider";


export default function Home() {
  return (
    <main className="text-white">
      <h1 className="text-xl font-bold text-orange-500 mb-8">Welcome to My Portfolio</h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
        <div className="w-full md:w-1/2 text-justify   mb-4">
          <p className="">
            Hi, I'm Yohannes, a passionate web developer with expertise in building dynamic and responsive web applications.   
          </p>
          
        </div>
        <div className="  mb-4 ml-4">
          <Image src="/pp.png" className="w-1/2 md:w-full" width={500} height={50} alt="Yohannes Profile Picture" />
        </div>

      </div>

      <p>
        <a className="text-xl font-bold hover:text-orange-500 duration-300" href="/projects">Check out my work</a>
      </p>

      {/* //about me */}
      <div className="my-48">
        <h2 className="text-xl font-bold text-orange-500 mb-8">About me</h2>
        <div className="flex flex-col md:flex-row justify-between items-align text-white text-justify">
          <div className="w-full md:w-1/2 mb-4">
            <p>
              Hi, I'm Yohannes, a passionate web developer with expertise in building dynamic and responsive web applications. I specialize in React.js, Next.js, and Node.js, and I love crafting solutions that are both functional and visually appealing.
            </p>
            <p>
              I have worked on a variety of projects, from e-commerce websites and content management systems to interactive web applications that enhance user experience.
            </p>
            <p>
              Feel free to check out my work, learn more about my background, or reach out if you’d like to collaborate. I’m always excited to take on new challenges and help bring ideas to life.
            </p>
          </div>
          <div className="">
            <Image className="w-full" src="/image2.JPG" alt="Yohannes Profile" width={300} height={200} />
          </div>
        </div>
      </div>

      {/* //skills */}

      <div className="mb-24 text-xs sm:text-sm md:text-base ">
        <h2 className="text-xl font-bold text-orange-500 mb-8 text-center">Among My Skills</h2>
         <div className="flex gap-4 justify-between  bg-white rounded-md px-4 py-2 mx-auto">
             <div><FaReact size={40} className="text-blue-500" /><span className="font-medium text-red-400 ">ReactJs</span></div>
             <div><SiNextdotjs size={40} className="text-black" /><span className="font-medium text-red-400">NextJs</span></div>
             <div><FaNodeJs size={40} className="text-green-500" /><span className="font-medium text-red-400">NodeJs</span></div>
             <div><SiJavascript size={40} className="text-yellow-500" /><span className="font-medium text-red-400">Javascript</span></div>
             <div><SiRedux size={40} className="text-purple-600" /><span className="font-medium text-red-400">Redux</span></div>
         </div>
      </div>

      
    </main>
  );
}
