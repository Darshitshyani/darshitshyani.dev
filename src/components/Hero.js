import Image from "next/image";
import Profile from "../images/profile.webp";
import useInView from "./animations";

export default function Hero() {
  const [ref, isInView] = useInView(0.2);
  return (
    <section
      id="home"
      className="xl:h-[calc(100vh-80px)]  h-full flex items-center justify-around px-8 flex-wrap"
    >
      <div
        ref={ref}
        className={`flex flex-col justify-start items-start  ${
          isInView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h1
          className={`text-primary text-xl mt-10 animate-fade-in  ${
            isInView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Hi, I'm
        </h1>
        <h2
          className={`text-4xl font-bold mt-2 animate-fade-in  ${
            isInView ? "animate-slide-in" : "opacity-0"
          }`}
        >
          Darshit Shyani.
        </h2>

        <div className="mt-4 max-w-lg text-text w-full">
          <ul
            className={`space-y-4 list-none animate-fade-in  ${
              isInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            <li
              className={`flex items-start gap-2  ${
                isInView ? "animate-slide-in" : "opacity-0"
              } `}
            >
              <span className="text-primary font-bold">➤</span>
              <p>
                <strong>Frontend Engineer:</strong> Enthusiastic about crafting
                accessible and pixel-perfect user interfaces.
              </p>
            </li>
            <li
              className={`flex items-start gap-2  ${
                isInView ? "animate-slide-in" : "opacity-0"
              }`}
            >
              <span className="text-primary font-bold">➤</span>
              <p>
                <strong>Thoughtful Design and Robust Engineering:</strong>{" "}
                Combines thoughtful design principles with robust engineering
                practices.
              </p>
            </li>
            <li
              className={`flex items-start gap-2  ${
                isInView ? "animate-slide-in" : "opacity-0"
              }`}
            >
              <span className="text-primary font-bold">➤</span>
              <p>
                <strong>Favorite Work:</strong> Thrives at the intersection of
                design and development.
              </p>
            </li>
            <li
              className={`flex items-start gap-2  ${
                isInView ? "animate-slide-in" : "opacity-0"
              }`}
            >
              <span className="text-primary font-bold">➤</span>
              <div>
                <strong>Experience Creation:</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc">
                  <li>Looks visually appealing.</li>
                  <li>Is meticulously built for performance.</li>
                  <li>Prioritizes usability.</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <a
          href="#about"
          className="mt-6 inline-block bg-primary text-background px-6 py-2 rounded-md shadow-lg transition duration-300 hover:bg-opacity-80 hover:scale-105"
        >
          Learn More
        </a>
      </div>
      <div className={`flex items-center mt-10 justify-center   `}>
        <Image src={Profile} alt="Darshit Shyani" />
      </div>
    </section>
  );
}
