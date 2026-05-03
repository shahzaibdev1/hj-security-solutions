import Image from "next/image";

const ContactUs = () => {
  return (
    <main className="flex-grow flex flex-col">
      {/* <!-- Hero Section --> */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-body text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            Get in Touch
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-6 tracking-tight leading-tight">
            We&apos;re here to <br />
            <span className="text-primary italic font-normal">secure your world</span>.
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Reach out to HJ Security Solutions for tailored protection services across the UK. Our team of specialists
            is ready to design a solution that fits your precise needs.
          </p>
        </div>
      </section>
      {/* <!-- Bento Grid Layout for Contact Information --> */}
      <section className="px-6 py-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* <!-- Enquiry Form (Main Canvas) --> */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/60 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
            <h2 className="font-headline text-3xl font-semibold text-on-surface mb-2">Send an Enquiry</h2>
            <p className="font-body text-on-surface-variant mb-8 text-sm">
              Select the nature of your inquiry below to ensure it reaches the right department immediately.
            </p>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <label className="cursor-pointer">
                  <input defaultChecked={true} className="peer sr-only" name="enquiry_type" type="radio" value="general" />
                  <div className="flex items-center justify-center py-5 rounded-xl border border-outline-variant text-center transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary pr-1 peer-checked:text-primary leading-none">
                      forum
                    </span>
                    <span className="font-body font-medium text-sm text-on-surface leading-none mt-0.5">General</span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" name="enquiry_type" type="radio" value="commercial" />
                  <div className="flex items-center justify-center py-5 rounded-xl border border-outline-variant text-center transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary pr-1 peer-checked:text-primary leading-none">
                      business_center
                    </span>
                    <span className="font-body font-medium text-sm text-on-surface leading-none mt-0.5">Commercial</span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" name="enquiry_type" type="radio" value="recruitment" />
                  <div className="flex items-center justify-center py-5 rounded-xl border border-outline-variant text-center transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary pr-1 peer-checked:text-primary leading-none">
                      badge
                    </span>
                    <span className="font-body font-medium text-sm text-on-surface leading-none mt-0.5">Recruitment</span>
                  </div>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-on-surface" htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none shadow-sm"
                    id="first_name"
                    placeholder="Jane"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-on-surface" htmlFor="last_name">
                    Last Name
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none shadow-sm"
                    id="last_name"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-on-surface" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none shadow-sm"
                    id="email"
                    placeholder="jane@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-on-surface" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none shadow-sm"
                    id="phone"
                    placeholder="+44 (0) 20 1234 5678"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-body text-sm font-medium text-on-surface" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none shadow-sm resize-none"
                  id="message"
                  placeholder="How can we assist you today?"
                  rows={5}
                ></textarea>
              </div>
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-body font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-md group mt-4"
                type="submit"
              >
                <span>Submit Enquiry</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
          {/* <!-- Secondary Column (Offices & Vetting) --> */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* <!-- Thornton Heath HQ Card --> */}
            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/40 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-on-surface">Thornton Heath HQ</h3>
                  <p className="font-body text-sm text-primary mt-1 font-medium">Head Office</p>
                </div>
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_city</span>
                </div>
              </div>
              <address className="font-body text-on-surface-variant not-italic text-sm leading-relaxed mb-6">
                5 Grange Park Road
                <br />
                Thornton Heath
                <br />
                CR7 8QE
                <br />
                United Kingdom
              </address>
              <div className="space-y-3">
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                  href="tel:+442071234567"
                >
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">
                    call
                  </span>
                  <span className="font-body text-sm font-medium">+44 (0) 207 123 4567</span>
                </a>
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                  href="mailto:info@hjsecuritysolutions.com"
                >
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">
                    mail
                  </span>
                  <span className="font-body text-sm font-medium">info@hjsecuritysolutions.com</span>
                </a>
              </div>
            </div>
            {/* <!-- Vetting & References Highlight Card --> */}
            <div className="bg-inverse-surface text-inverse-on-surface rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-tertiary opacity-20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary-fixed"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    verified_user
                  </span>
                  <h3 className="font-headline text-xl font-semibold">Vetting &amp; References</h3>
                </div>
                <p className="font-body text-sm text-secondary-fixed mb-6 leading-relaxed">
                  For employment reference requests or vetting inquiries regarding former or current HJ Security
                  Solutions personnel.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary-fixed hover:text-white transition-colors font-body text-sm font-semibold group"
                  href="mailto:vetting@hjsecuritysolutions.com"
                >
                  <span>vetting@hjsecuritysolutions.com</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Full Width Map Section --> */}
      <section className="w-full h-96 mt-8 relative overflow-hidden bg-surface-container-high border-t border-b border-outline-variant/30">
        {/* <!-- Simulated Map Interface using an Image with data-location --> */}
        <Image
          fill
          alt="Map view"
          className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply grayscale-[30%] sepia-[20%] transition-opacity duration-700 hover:opacity-100"
          data-alt="A stylized, warm-toned minimalist map of London and the UK, rendered in a high-end editorial style. The map uses a palette of soft earthy tones, burnt sienna, and warm linen backgrounds. The cartography is clean and modern, devoid of clutter, with subtle golden accents highlighting key locations. The lighting is bright and flat, emphasizing the sophisticated, luxury aesthetic of the Sahara Security brand identity."
          data-location="London, UK"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdaE1yTC1E6shdvkjmBcTjL_zORn4Nbilynz7WuxN3aUDOz9IvpRP9xUqWjGA4d0r40E5kd5_h3_E687R1ZiXMkfCIbGt5SbURo6x6fJYuJXIJVOu3xRg1M_mYC6PIKXEKWgP4gemy0QixrP0Q6dzCVrJZwfxdzlFrOMdC67rl9Y2GhQXYTM2HlTylWKkIdR37MQ9cy-_N_n5v_6LaMfgHAQL_dRLC_hE22GRGbgqDA3vNnbEYgzybYvfkBUpv0kmgupTfI9B432lU"
        />
        {/* <!-- Map Overlay UI --> */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
          <button className="w-10 h-10 bg-surface text-on-surface rounded-lg shadow-sm border border-outline-variant/50 flex items-center justify-center hover:bg-surface-variant hover:text-primary transition-colors focus:outline-none">
            <span className="material-symbols-outlined">add</span>
          </button>
          <button className="w-10 h-10 bg-surface text-on-surface rounded-lg shadow-sm border border-outline-variant/50 flex items-center justify-center hover:bg-surface-variant hover:text-primary transition-colors focus:outline-none">
            <span className="material-symbols-outlined">remove</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
