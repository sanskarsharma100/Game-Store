import { Link } from "react-router-dom";
import reactLogo from "../assets/reactLogo.svg";
import reactRouterLogo from "../assets/reactRouterLogo.svg";
import tailwindLogo from "../assets/tailwindLogo.svg";
import AnimatedPage from "../components/AnimatedPage";

function About() {
  const frameworkLogos = [
    { logo: reactLogo, name: "ReactJS", alt: "React Logo" },
    { logo: reactRouterLogo, name: "React Router", alt: "React Router Logo" },
    { logo: tailwindLogo, name: "TailwindCSS", alt: "TailwindCSS Logo" },
  ];

  const frameworks = frameworkLogos.map((item) => (
    <div
      key={item.logo + item.name}
      className="m-auto rounded-lg p-2 duration-500 hover:cursor-pointer hover:bg-darkBg2"
    >
      <img src={item.logo} alt={item.alt} className="m-auto w-28" />
      <p className="text-center text-lightText">{item.name}</p>
    </div>
  ));

  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col items-center justify-center gap-10 p-4">
        <section>
          <div className="w-fit">
            <h1 className="font-heading text-dynamicHeading font-black text-white">
              Welcome to our Game Store! 🎮
            </h1>
            <article className="text-dynamicText text-lightText">
              <p className="mb-4 mt-6 max-w-4xl">
                Step into a world of limitless gaming possibilities and immerse
                yourself in thrilling adventures. Whether you&#39;re a casual
                player or a die-hard gamer, we&#39;ve got you covered with a
                vast collection of games for all platforms. Join us on this
                gaming journey at unbeatable prices, only at our Game Store.
                Your gaming dreams are just a click away!
              </p>
            </article>
          </div>
          <Link to="/store">
            <button
              role="button"
              className="border border-neonPink px-5 py-3 font-heading text-dynamicText font-bold text-neonPink duration-500 hover:bg-neonPink hover:text-white"
            >
              OPEN STORE
            </button>
          </Link>
        </section>
        <section className="w-full max-w-4xl">
          <h2 className="mb-2 w-full text-xl font-semibold text-lightText">
            Frameworks used:
          </h2>
          <div className="flex flex-wrap justify-between gap-4">
            {frameworks}
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}

export default About;
