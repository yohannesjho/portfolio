import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="my-48">
        <h2 className="text-xl font-bold text-orange-500 mb-8">About me</h2>
        <div className="flex flex-col md:flex-row justify-between items-align text-white text-justify">
          <div className="md:w-1/2 mb-4">
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
          <div className=" ">
            <Image className="w-full" src="/image2.JPG" alt="Yohannes Profile" width={300} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
