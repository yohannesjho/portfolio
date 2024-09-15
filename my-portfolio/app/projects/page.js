
const projects = [
  {
    projectName: "Ai-content-generator",
    description: "This is a fully responsive web application developed using Next.js for the frontend, PostgreSQL for robust data management, and the Gemini API to deliver intelligent AI-driven query responses. It utilizes Clerk for secure and seamless user authentication, ensuring that access to the app's features is both safe and user-friendly. The application is designed to provide an ai generated content for various topics like blogs and youtube.",
    images: ["/images/Ai-content-generator.PNG", "/images/ai-content-generator-2.PNG"],
    link: "https://github.com/yohannesjho/AI-content-generator"
  },
  {
    projectName: "blog-app",
    description: "This blog-app application is built with nodejs, express and mongodb. TailwindCSS is used for styling, providing a utility-first approach that allows for rapid and responsive design implementation. the app will enable the user to signup and signin, after signin create blog with title and description, view all blogs and can edit and delete his own blog.",
    images: ["/images/blog-app.PNG", "/images/blog-app-2.PNG", "/images/blog-app-3.PNG", "/images/blog-app-4.PNG", "/images/blog-app-5.PNG"],
    link: "https://github.com/yohannesjho/e-commerce-nextjs"

  },
  {
    projectName: "Netflix clone",
    description: "This Netflix clone utilizes React.js for  rendering  and TailwindCSS for a responsive and visually appealing design. The app allows users to browse  a wide range of movies and TV shows, view detailed content information. Through this project, I gained practical skills in using React.js to manage dynamic content and routing, and TailwindCSS to create customizable, modern designs.  it provided valuable experience in building a site that utlize RestApi to fetch the data from remote server.",
    images: ["/images/netflix-clone.PNG", "/images/netflix-clone-2.PNG"],
    link: "https://github.com/yohannesjho/Movie-App"

  },
  {
    projectName: "Weather App",
    description: "This weather app is built with React.js and integrates with a remote API to fetch real-time weather data. Users can enter a location to view current weather conditions, including temperature, humidity, and forecasts. The app dynamically updates based on user input, providing accurate and timely information. Building this app enhanced my skills in React.js for managing component states and handling asynchronous data fetching, while also deepening my understanding of API integration and real-time data handling. ",
    images: ["/images/weather-app.PNG"],
    link: "https://github.com/yohannesjho/Weather-app2"

  },
  {
    projectName: "Food Recipe",
    description: "This food recipe app is developed with React.js and styled using plain CSS. It allows users to search for meals and/or clicking the first letter of the meals and  retrieve detailed recipes, including ingredients and preparation steps. The app integrates with theMealDB API to fetch recipe data and also provides YouTube videos for visual cooking instructions. By building this app, I enhanced my skills in React.js for managing state and user interactions, and improved my ability to style components with plain CSS. Additionally, I gained experience in API integration and incorporating multimedia content to enrich user experience.This is a fully responsive web application developed using Next.js for the frontend, PostgreSQL for robust data management, and the Gemini API to deliver intelligent AI-driven query responses. It utilizes Clerk for secure and seamless user authentication, ensuring that access to the app's features is both safe and user-friendly. The application is designed to provide a smooth user experience across all devices, integrating advanced technologies to handle complex data interactions and AI functionalities. ",
    images: ["/images/food-recipe.PNG", "/images/food-recipe-2.PNG"],
    link: "https://github.com/yohannesjho/Foodrecipe"

  }
]
export default function Projects() {

  return (
    <main >
      <div>
        <h2 className="md:text-2xl md:font-bold">Selected projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="my-16 px-4 py-8 space-x-8 space-y-8   flex flex-col md:flex-row justify-between  ">
            <div className="w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-semi-bold mb-4">{project.projectName}</h2>
              <p className="text-sm md:text-base text-justify">{project.description}</p>
              <button className="bg-orange-500 px-2 py-1 rounded-md my-2"><a href={project.link}>Link</a></button>
            </div>
            <div className="w-full md:w-1/2 ">
              <div className="flex w-full h-full flex-wrap gap-4   ">
                {project.images.map((image, index) => (
                  <div key={index} className="  w-36 md:w-44 lg:w-72">
                    <img
                      src={image}
                      alt={`project image ${index}`}
                      className="object-cover"
                      
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}
