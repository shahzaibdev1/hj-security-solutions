const Footer = () => {
  return (
    <footer className="bg-background w-full pt-20 pb-10 border-t border-outline-variant flat no shadows">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xl font-headline-md font-bold text-primary mb-6">HJ Security Solutions</h4>
          <p className="font-body-md text-xs leading-loose text-on-surface-variant mb-4">
            © 2024 HJ Security Solutions. All rights reserved.
          </p>
          <p className="font-body-md text-xs leading-loose text-on-surface-variant">
            Thornton Heath HQ:
            <br />5 Grange Park Road, Thornton Heath, England, CR7 8QE
          </p>
        </div>
        <div>
          <h5 className="font-headline-md text-lg text-primary mb-4">Company</h5>
          <ul className="space-y-3">
            <li>
              <a
                className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
                href="#"
              >
                Training
              </a>
            </li>
            <li>
              <a
                className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
                href="#"
              >
                Our Approach
              </a>
            </li>
            <li>
              <a
                className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline-md text-lg text-primary mb-4">Legal</h5>
          <ul className="space-y-3">
            <li>
              <a
                className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
                href="#"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
