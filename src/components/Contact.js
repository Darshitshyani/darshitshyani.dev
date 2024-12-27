export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-8  from-background via-gray-900 to-primary text-text rounded-lg shadow-xl"
    >
      <div className="max-w-4xl  text-start">
        <h2 className="text-4xl font-extrabold text-primary mb-6">
          Contact Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          Have a question or want to work together? Feel free to reach out! I'm
          always open to discussing new opportunities, sharing insights, or
          collaborating on exciting projects. Whether you need assistance with
          frontend development, have a challenging problem to solve, or just
          want to connect, don’t hesitate to get in touch. Let’s create
          something amazing together!
        </p>
        <a
          href="mailto:darshitshyani1@gmail.com"
          className="inline-block bg-primary text-background px-8 py-3 rounded-md text-lg font-semibold shadow-md transition-transform transform hover:-translate-y-1 hover:bg-opacity-90"
        >
          Get Touch
        </a>
        <div className="mt-12 flex justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/darshit-shyani-3981a4242/?originalSubdomain=in7809"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.5 1.12 2.5 2.5zM1 9h3v12H1zM14.5 9H11v12h3.5V14.5c0-3.12 4-3.38 4 0V21H21v-6.91c0-6.2-7-5.97-6.5 0z" />
            </svg>
          </a>
          <a
            href="https://github.com/Darshitshyani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.57v-2.2c-3.34.73-4.04-1.62-4.04-1.62-.54-1.39-1.34-1.76-1.34-1.76-1.1-.76.1-.75.1-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.57.12-3.28 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.04 0 2.1.14 3.08.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.71.24 2.97.12 3.28.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.5 5.95.44.38.84 1.14.84 2.3v3.41c0 .31.2.69.8.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
