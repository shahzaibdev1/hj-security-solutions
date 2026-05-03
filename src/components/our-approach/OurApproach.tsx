import Image from "next/image";

const OurApproach = () => {
  return (
    <main>
      {/* <!-- Hero Section --> */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-surface-container text-on-surface-variant font-label text-xs tracking-widest uppercase mb-6">
            Our Methodology
          </span>
          <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-tight tracking-tight mb-8">
            Understanding. Planning. <br />
            <span className="text-primary italic">Delivering.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body max-w-2xl mx-auto leading-relaxed">
            At HJ Security Solutions Limited, our approach is built on understanding, planning, and delivering effective
            security support. We listen closely and assess your unique needs to provide exactly the right personnel.
          </p>
        </div>
        {/* <!-- Abstract decorative element --> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
      </section>
      {/* <!-- Bento Grid: Core Philosophy --> */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* <!-- Consultation (Large Card) --> */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant/50 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">forum</span>
              <h2 className="text-3xl font-headline text-on-surface mb-4">1. Consultation</h2>
              <p className="text-on-surface-variant font-body leading-relaxed sm:max-w-[85%] lg:max-w-[78%]">
                We begin by listening closely to your concerns, objectives, and operational requirements. Understanding
                your environment is the critical first step to providing effective, tailored security support.
              </p>
            </div>
            {/* <!-- Decorative Image --> */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full bg-gradient-to-br from-primary to-transparent blur-2xl"></div>
          </div>
          {/* <!-- Assessment (Tall Card) --> */}
          <div className="md:col-span-4 bg-inverse-surface text-inverse-on-surface rounded-xl p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6">plagiarism</span>
              <h2 className="text-2xl font-headline mb-4">2. Assessment</h2>
              <p className="text-surface-variant/80 font-body text-sm leading-relaxed mb-8 flex-grow">
                Our experts conduct a thorough assessment of your specific needs, evaluating risks and vulnerabilities
                to ensure we design a security plan that perfectly matches your operational landscape.
              </p>
            </div>
          </div>
          {/* <!-- Deployment (Medium Card) --> */}
          <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/50 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">group</span>
            <h3 className="text-xl font-headline text-on-surface mb-3">3. Deployment</h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed">
              We provide the right personnel for the job. Our team is carefully selected and deployed based on the exact
              specifications and requirements developed during the assessment phase.
            </p>
          </div>
          {/* <!-- Ongoing Support (Medium Card) --> */}
          <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/50 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">support_agent</span>
            <h3 className="text-xl font-headline text-on-surface mb-3">4. Ongoing Support</h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed">
              Security is dynamic. We offer continuous support, regular reviews, and responsive management to adapt to
              changing needs and ensure enduring, effective protection.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Feature Split Section --> */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container relative">
              <Image
                fill
                alt="Security professionals in a modern corporate setting"
                className="w-full h-full object-cover"
                data-alt="A meticulously composed photograph of professional security personnel in a sophisticated, modern corporate lobby. The environment features warm, sun-baked lighting reflecting off sleek architectural surfaces, embodying a luxurious and disciplined aesthetic. The color palette is dominated by warm linen background tones, deep burnt sienna accents, and rich, earthy neutral colors. The mood is calm, authoritative, and securely ordered, perfectly aligning with a premium corporate identity."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVyi5kRLcXRv1WEEMml5da11zcMeu2PrOMG_Y_F80j6a2G5rsz_fbzFyJjD4QTKS8GWOCjEWu2YZsL64sYS-a9_2b_Yj7szf5imszNydBmKfKWzL3nGoPAAg_lcEcIFd2xqnvKBBikyLtH0AJwf11X0SwV8LqsgmrzUPCNDztSaE8Zzq4bfOl4tCF25AOtD63g4uN7MV0Sn7BxDpKqg6l9Im6O2k5G3Gcza07cd8UQQ7ceV8BbUxC_iLAya31LT-xFRtceGFe4pG10"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-headline text-on-surface mb-6">Providing the Right Personnel</h2>
              <p className="text-on-surface-variant font-body leading-relaxed text-lg">
                We don&apos;t just supply staff; we provide the right people for your specific environment. Through careful
                listening and rigorous assessment, we ensure our security personnel integrate seamlessly with your
                operations.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary-container p-2 rounded text-on-primary-container">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-on-surface mb-1">Tailored Matching</h4>
                  <p className="text-on-surface-variant text-sm font-body">
                    Deploying officers with the specific skills, experience, and temperament required for your unique
                    site.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary-container p-2 rounded text-on-primary-container">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-on-surface mb-1">Continuous Evaluation</h4>
                  <p className="text-on-surface-variant text-sm font-body">
                    Regular performance reviews and ongoing training to maintain exceptional service standards and adapt
                    to new challenges.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary-container p-2 rounded text-on-primary-container">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-on-surface mb-1">Responsive Management</h4>
                  <p className="text-on-surface-variant text-sm font-body">
                    Active oversight and immediate support from our dedicated management team to ensure consistent
                    quality.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurApproach;
