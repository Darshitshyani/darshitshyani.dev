import Image from "next/image";
import {
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Slider from "react-slick";
import a1 from "../images/admin/a1.jpeg";
import a2 from "../images/admin/a2.jpeg";
import a3 from "../images/admin/a3.jpeg";
import a4 from "../images/admin/a4.jpeg";
import a5 from "../images/admin/a5.jpeg";
import h1 from "../images/hotel/h1.jpeg";
import h2 from "../images/hotel/h2.jpeg";
import h3 from "../images/hotel/h3.jpeg";
import p1 from "../images/pet shop/p1.jpeg";
import p2 from "../images/pet shop/p2.jpeg";
import p3 from "../images/pet shop/p3.jpeg";
import useInView from "./animations";

const projects = [
  {
    name: "VIZU admin-panel",

    images: [a1, a2, a3, a4, a5],
    description: [
      "Streamlines administrative tasks",
      "Efficiently manages various aspects of the application",
      "Secure authentication with Supabase",
      "Safe environment for administrative operations",
      "CRUD (Create, Read, Update, Delete) functionality for categories and fields",
      "Simplified application management",
    ],
    tech: [
      {
        title: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        title: "Material-UI",
        icon: "",
      },
      {
        title: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        title: "Supabase",
        icon: <SiSupabase />,
      },
      {
        title: "Redux-Slice",
        icon: <SiRedux />,
      },
      {
        title: "Context API",
        icon: <SiReact />, // React icon since Context API is part of React
      },
    ],
  },
  {
    name: "E-commerce animals food store",
    images: [p1, p2, p3],
    tech: [
      {
        title: "React",
        icon: <SiReact />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        title: "Material-UI",
        icon: "",
      },
      {
        title: "Tailwind ",
        icon: <SiTailwindcss />,
      },
      {
        title: "Redux",
        icon: <SiRedux />,
      },
      {
        title: "Firebase",
        icon: <SiFirebase />,
      },
    ],
    description: [
      "Designing and implementing user-friendly interfaces to ensure a seamless user experience",
      "Handling frontend logic, including state management, API integration, and dynamic rendering of components",
      "Optimizing performance, minimizing load times, and ensuring efficient use of resources",
      "Collaborating closely with the backend team to integrate APIs effectively",
      "Maintaining a smooth data flow between the client and server",
    ],
  },
  {
    name: "Hotel Booking Site",
    images: [h1, h2, h3],
    tech: [
      {
        title: "React",
        icon: <SiReact />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        title: "Material-UI",
        icon: "",
      },
      {
        title: "Tailwind ",
        icon: <SiTailwindcss />,
      },
      {
        title: "Redux",
        icon: <SiRedux />,
      },
      {
        title: "Firebase",
        icon: <SiFirebase />,
      },
    ],
    description: [
      "Utilized React, Tailwind CSS, React-Hook-Form, and Redux to build a dynamic and responsive user interface",
      "Implemented frontend logic and managed state efficiently with Redux",
      "Ensured seamless form handling with React-Hook-Form",
      "Focused on delivering a visually appealing, performant, and user-friendly experience",
      "Collaborated with team members to ensure code consistency and application scalability",
    ],
  },
];
export default function Projects() {
  const [ref, isInView] = useInView(0.2);
  const settings = {
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    arrows: false,
  };
  return (
    <section id="projects" className="py-16  text-text px-8" ref={ref}>
      <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 grid-cols-1  lg-grid-cols-3 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              isInView ? "animate-fade-in" : "opacity-0"
            }  p-4 border-2 bg-opacity-70 bg-background border-primary rounded-lg shadow-lg flex 
             flex-col  h-full`}
          >
            <div className="border-b pb-4 border-primary">
              <h3 className="text-xl font-bold text-primary ">
                {project.name}
              </h3>
            </div>
            <div className="mt-4 border-2 rounded-lg border-primary p-2 min-h-[200px] min-w-[250px]">
              <Slider {...settings}>
                {project.images.map((img) => (
                  <>
                    <div>
                      <Image
                        src={img}
                        alt="Slide 1"
                        className=" rounded-lg p-1 min-h-[200px] min-w-[250px]"
                      />
                    </div>
                  </>
                ))}
              </Slider>
            </div>
            <div className="mt-[20px]">
              <ul
                className={`space-y-4 list-none animate-fade-in  ${
                  isInView ? "animate-slide-in" : "opacity-0"
                }`}
              >
                {project.description.map((val) => {
                  return (
                    <>
                      <li
                        className={`flex items-start gap-2  ${
                          isInView ? "animate-slide-in" : "opacity-0"
                        } `}
                      >
                        <span className="text-primary font-bold">➤</span>
                        <p>{val}</p>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
              {project.tech.map((teches, index) => (
                <li
                  key={index}
                  className={`${
                    isInView ? "animate-slide-in" : "opacity-0"
                  } flex items-center gap-2 font-semibold border border-primary rounded-lg p-2`}
                >
                  {teches.icon}
                  <p>{teches.title}</p>
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
