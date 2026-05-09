"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full pt-16 pb-8 border-t border-outline-variant/30 relative"
      style={{ backgroundColor: "#fdf7f4" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* <!-- Brand & Address --> */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-headline-md font-bold text-primary mb-6 tracking-tight">
              HJ Security Solutions
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant mb-6">
              Providing premium security excellence across the UK &amp; Ireland. We combine elite human intelligence
              with cutting-edge technological solutions.
            </p>
            <div className="space-y-2">
              <p className="font-body-md text-sm font-semibold text-on-surface">Thornton Heath HQ</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                5 Grange Park Road, Thornton Heath,
                <br />
                England, CR7 8QE
              </p>
            </div>
          </div>
          {/* <!-- Company Links --> */}
          <div>
            <h5 className="font-headline-md text-lg font-semibold text-on-surface mb-6">Company</h5>
            <ul className="space-y-4">
              <li>
                <Link
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/our-approach"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              {/* <li>
                <Link
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Training
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <!-- Resources Links --> */}
          {/* <div>
            <h5 className="font-headline-md text-lg font-semibold text-on-surface mb-6">Resources</h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Security Briefings
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div> */}
          {/* <!-- Contact & Social --> */}
          <div>
            <h5 className="font-headline-md text-lg font-semibold text-on-surface mb-6">Contact</h5>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                <span className="font-body-md text-sm text-on-surface-variant">+44 (0) 20 8123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span className="font-body-md text-sm text-on-surface-variant">info@hjsecurity.co.uk</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Accreditations & Trust Section --> */}
        <div className="border-t border-outline-variant/30 py-10">
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="flex items-center gap-2 font-body-md text-sm font-semibold tracking-widest text-on-surface-variant">
              <span className="material-symbols-outlined text-3xl">verified_user</span> SIA APPROVED
            </div>
            <div className="flex items-center gap-2 font-body-md text-sm font-semibold tracking-widest text-on-surface-variant">
              <span className="material-symbols-outlined text-3xl">workspace_premium</span> ISO 9001
            </div>
            <div className="flex items-center gap-2 font-body-md text-sm font-semibold tracking-widest text-on-surface-variant">
              <span className="material-symbols-outlined text-3xl">shield_with_heart</span> SAFE CONTRACTOR
            </div>
          </div>
        </div>
        {/* <!-- Bottom Bar --> */}
        <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link className="font-body-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="privacy-policy">
              Privacy Policy
            </Link>
            <Link className="font-body-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="/terms-and-service">
              Terms of Service
            </Link>
          </div>
          <p className="font-body-md text-xs text-on-surface-variant order-last md:order-none">
            © {new Date().getFullYear()} HJ Security Solutions. All rights reserved.
          </p>
          <button
            className="cursor-pointer group flex items-center gap-2 font-body-md text-xs font-semibold text-primary uppercase tracking-widest hover:translate-y-[-2px] transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            type="button"
          >
            Back to top
            <span className="material-symbols-outlined text-lg group-hover:animate-bounce">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
    // <footer className="bg-background w-full pt-20 pb-10 border-t border-outline-variant flat no shadows">
    //   <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
    //     <div className="col-span-2 md:col-span-1">
    //       <h4 className="text-xl font-headline-md font-bold text-primary mb-6">HJ Security Solutions</h4>
    //       <p className="font-body-md text-xs leading-loose text-on-surface-variant mb-4">
    //         © 2024 HJ Security Solutions. All rights reserved.
    //       </p>
    //       <p className="font-body-md text-xs leading-loose text-on-surface-variant">
    //         Thornton Heath HQ:
    //         <br />5 Grange Park Road, Thornton Heath, England, CR7 8QE
    //       </p>
    //     </div>
    //     <div>
    //       <h5 className="font-headline-md text-lg text-primary mb-4">Company</h5>
    //       <ul className="space-y-3">
    //         <li>
    //           <a
    //             className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
    //             href="#"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
    //             href="#"
    //           >
    //             Training
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
    //             href="#"
    //           >
    //             Our Approach
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
    //             href="#"
    //           >
    //             Careers
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h5 className="font-headline-md text-lg text-primary mb-4">Legal</h5>
    //       <ul className="space-y-3">
    //         <li>
    //           <a
    //             className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
    //             href="#"
    //           >
    //             Privacy Policy
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="font-body-md text-xs leading-loose text-on-surface-variant hover:translate-x-1 hover:text-primary transition-transform duration-200 focus:ring-1 focus:ring-primary outline-none"
    //             href="#"
    //           >
    //             Terms of Service
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>*/
