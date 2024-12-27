export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-black border-b-2 border-primary text-text p-4 shadow-md z-50 h-[60px]">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-primary font-bold text-lg">
          Darshit Shyani
        </a>
        <div className="flex space-x-4 font-semibold">
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
