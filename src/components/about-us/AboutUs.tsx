const AboutUs = () => {
  return (
    <main>
      {/* Hero / Company Story */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 z-10">
            <span className="text-primary font-label-sm tracking-widest uppercase text-xs mb-6 block">Our Story</span>
            <h1 className="font-display-xl text-on-background mb-8">
              Professional Security Personnel
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10">
              HJ Security Solutions Limited is a UK-based provider of professional security personnel. Established in 2025 and based in Thornton Heath, we specialise in supplying reliable and trained security staff for a range of industries.
            </p>
            <div className="w-20 h-px bg-outline-variant"></div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative shadow-[0_2px_16px_rgba(27,28,25,0.04)]">
              <img alt="HJ Security Solutions" className="w-full h-full object-cover" data-alt="Professional security personnel in uniform standing confidently." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3IS8NDN7q4BWsj-o88PlR8MwglAKiUJOgpX7PrBBpeK1Q7FTDOVKl3cj0RAdVRwXKT0A8fg7tkIBsqbsbiTZNyrw_tuS1ohg73GLw4m_ieF1rT7la0M4IUMW160e3CN47fxMdixYJhKY9Pzs3c1f42HJo922hxbxwGaqiu7glPiKFlgxcK5eGR0JsQRMf0jlfaIW-mn3OIv2uHsJjfjr9nIaB0zJxnaYCnRsGWCOYYKSW4uCMMv95iXSmp0MCimDxkNH0H13foepX"/>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-low p-8 rounded-lg shadow-[0_2px_16px_rgba(27,28,25,0.04)] border border-outline-variant hidden md:block max-w-1/2">
              <p className="font-headline-md text-xl text-on-surface mb-2">&quot;Professionalism, reliability, and consistency.&quot;</p>
              <p className="font-body-md text-sm text-secondary">— Our core values.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Scale & National Reach */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-headline-lg text-on-background mb-6">Based in Thornton Heath, Serving the UK</h2>
            <p className="font-body-md text-on-surface-variant">We specialise in supplying reliable and trained security staff for a range of industries, ensuring professional coverage wherever it is needed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="bg-surface p-10 rounded-lg border border-outline-variant/60 shadow-[0_2px_16px_rgba(27,28,25,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">location_on</span>
              <h3 className="font-headline-lg text-on-surface mb-2">Thornton Heath</h3>
              <p className="font-label-sm text-secondary uppercase">Headquarters</p>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-surface p-10 rounded-lg border border-outline-variant/60 shadow-[0_2px_16px_rgba(27,28,25,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">event</span>
              <h3 className="font-headline-lg text-on-surface mb-2">2025</h3>
              <p className="font-label-sm text-secondary uppercase">Established</p>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-surface p-10 rounded-lg border border-outline-variant/60 shadow-[0_2px_16px_rgba(27,28,25,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">verified_user</span>
              <h3 className="font-headline-lg text-on-surface mb-2">Professional</h3>
              <p className="font-label-sm text-secondary uppercase">Trained Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Culture & Client Centered */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Leadership */}
          <div>
            <span className="text-tertiary font-label-sm tracking-widest uppercase text-xs mb-6 block">Our Approach</span>
            <h2 className="font-headline-lg mb-8 text-on-background">Reliability and Consistency</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              We specialise in supplying reliable and trained security staff for a range of industries. Our focus on professionalism ensures that our personnel maintain the highest standards of conduct and vigilance.
            </p>
            <p className="font-body-md text-on-surface-variant">
              Established in 2025 and based in Thornton Heath, we are committed to providing consistent and dependable security solutions to our clients across the UK.
            </p>
          </div>
          {/* Client Centered */}
          <div className="relative">
            <div className="bg-surface-container-high p-12 rounded-lg relative z-10 shadow-[0_2px_16px_rgba(27,28,25,0.04)] border border-outline-variant/30">
              <span className="text-primary font-label-sm tracking-widest uppercase text-xs mb-6 block">Industry Coverage</span>
              <h2 className="font-headline-md mb-6 text-on-background">Trained for Your Needs</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">shield</span>
                  <div>
                    <h4 className="font-body-md font-bold text-on-surface mb-1">Professional Personnel</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">Our staff are rigorously trained to handle the specific security challenges of various industries.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">handshake</span>
                  <div>
                    <h4 className="font-body-md font-bold text-on-surface mb-1">Reliable Service</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">We pride ourselves on consistency, ensuring you have the protection you need, when you need it.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary-container rounded-lg -z-10 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-24 bg-inverse-surface text-inverse-on-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg mb-8">Commitment to Excellence.</h2>
              <p className="font-body-md text-secondary-fixed-dim mb-8">
                HJ Security Solutions Limited is dedicated to continuous improvement and maintaining our reputation as a trusted UK-based provider of professional security personnel.
              </p>
              <button className="border border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-fixed font-body-md text-sm font-semibold py-3 px-8 rounded-DEFAULT transition-colors duration-300">Contact Us Today</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img alt="Security Staff" className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 transition-all duration-500" data-alt="Security personnel monitoring cameras." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7BgDQqy_58uLSvCPYPhxNbOnsPPD7WYFKbdIlZEcbAb6nPIwWbluVWQNVG2cWD8j9ar5x81YCQzEvCtpZhL89nzWN9EgbOx84g566bYZHFYmzUDPN3tnTdUkjoAuy4hw4w9YMpAH8WtGN43VR6IH6F5AsD66TK3vFFHbzSaagzZnK2vFD4XAQWkcb2-Ni7zLFbiTSXaO6qdfvybNGx7ZYgLLG3MKCO0payqZRU2Rnr9qEDQ9G8EAufo6nJmG6kGcmPo_sLpnX3FLk"/>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden mt-8">
                <img alt="Training" className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 transition-all duration-500" data-alt="Security staff undergoing professional training." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3uwZ3QsMSwFbSRLhpQPAtUUqNi0CBQ6jpKxmSg-IYTT2eRl0mJyMVKJ5jBJWl_crxsXgbynL1MxqPvR_2arY0j0r-2Rm5aBYoyekZtMNKwOgS4xM3nTLU6nC6mo8ubiioIJugpg35xYnRv0ulUzgwkAG6FeMCWoqzAwbSgx1oaS2b8ZdiUvlbcfj0Vki02kpqlq0AzCjNB-QCcaxOgT0MeAIEMLJ8vfFzgf7OCRERHpsM2FAo2ju_ukxlkeI0NvhPWk48Jqd5W8wX"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
