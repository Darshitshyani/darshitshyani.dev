import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import useInView from "./animations";
export default function About() {
  const skills = [
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3Alt /> },
    { title: "JavaScript", icon: <SiJavascript /> },
    { title: "TypeScript", icon: <SiTypescript /> },
    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
    },
    { title: "React.js", icon: <FaReact /> },
    { title: "Next.js", icon: <SiNextdotjs /> },
    { title: "Redux", icon: <SiRedux /> },
    { title: "Firebase", icon: <SiFirebase /> },
  ];
  const [ref, isInView] = useInView(0.2);
  return (
    <section
      id="about"
      className="py-16  text-text px-8 flex xl:justify-around flex-wrap"
      ref={ref}
    >
      <div>
        <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
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
              <strong>Frontend Developer with 3+ years of experience</strong> in
              React.js and web development.
            </p>
          </li>
          <li
            className={`flex items-start gap-2  ${
              isInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            <span className="text-primary font-bold">➤</span>
            <p>
              Specializes in creating accessible and performance-driven web
              interfaces.
            </p>
          </li>
          <li
            className={`flex items-start gap-2  ${
              isInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            <span className="text-primary font-bold">➤</span>
            <p>
              <strong>Blends design and development</strong> to deliver
              user-friendly, seamless digital experiences.
            </p>
          </li>
          <li
            className={`flex items-start gap-2  ${
              isInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            <span className="text-primary font-bold">➤</span>
            <p>
              <strong>Prioritizes usability and efficiency</strong> in every
              project.
            </p>
          </li>
          <li
            className={`flex items-start gap-2  ${
              isInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            <span className="text-primary font-bold">➤</span>
            <p>
              <strong>Passionate about crafting intuitive UIs</strong> that
              combine thoughtful design with robust engineering.
            </p>
          </li>
        </ul>
      </div>
      <div className="sm:mt-4 xl:mt-0 mt-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Skills</h2>
        <div className="mt-4 grid grid-cols-2 w-full gap-4 skills sm:grid-cols-3 md:grid-cols-3 ">
          {skills.map((skill, index) => (
            <>
              <div
                key={index}
                className={`flex items-center gap-1 border-2 p-2 bg-background
                bg-opacity-40 rounded-md border-primary hover:bg-transparent
                  ${isInView ? "animate-fade-in" : "opacity-0"}
                w-full`}
              >
                {skill.icon}
                {skill.title}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
