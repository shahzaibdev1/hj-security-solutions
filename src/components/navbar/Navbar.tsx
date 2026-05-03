import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/40 shadow-sm shadow-[#1b1c19]/04">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-5">
        <a className="text-2xl font-headline-md font-bold text-primary tracking-tighter" href="#">
          HJ Security Solutions
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            className="font-body-md text-sm font-medium text-primary border-b-2 border-primary pb-1 active:scale-95 transform transition-transform"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out active:scale-95 transform transition-transform"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out active:scale-95 transform transition-transform"
            href="/our-approach"
          >
            Our Approach
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out active:scale-95 transform transition-transform"
            href="/careers"
          >
            Careers
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out active:scale-95 transform transition-transform"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out active:scale-95 transform transition-transform"
            href="/contact-us"
          >
            Contact
          </Link>
        </nav>
        <button className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded text-sm font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors font-body-md">
          Request Quote
        </button>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
