import Image from "next/image";
import Link from "next/link";

const Careers = () => {
  return (
    <main>
      {/* <!-- Careers Hero --> */}
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-high">
          <Image
            fill
            alt="Background image of professionals in a corporate setting"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
            data-alt="A cinematic, wide-angle shot of a diverse team of security professionals in a modern, light-filled corporate atrium. The scene is bathed in warm, sun-baked natural light filtering through large glass windows, emphasizing a luxurious, warm-minimalist aesthetic. The color palette features rich earthy tones, soft warm linens, and deep burnt sienna accents, projecting professionalism, excellence, and a high-end editorial feel."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBhThdGd-VohA3g2CZIm8-3AU38-YWkuWWdhiHzOt_K52PSeSgI7BJ0CmIVF-kLsxzq7w0Lv85jn-VHNAEZ2MOe-5bBcuftF1DqUl8u29Q7NMD5BibIRT64LoGSv3v-Cbhtq77w_YXdBZrimfwYZahapBt7i0G31dIM3i9_Hnq6BR5JdgKXVvJq20KJoW-qKfInhh4NEhLgEOKnZ6x-e56yXJegTL3ylSHX8hF4N83IbvIVdAeP4MNYxXTOptY_9p7TPd5BB4pYF4G"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="font-body text-primary uppercase tracking-[0.2em] font-bold text-sm mb-6 block">
            Careers at HJ Security Solutions
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-background mb-8 leading-tight tracking-tight">
            Join the Frontline of <br />
            <i className="text-primary font-normal">Excellence</i>
          </h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We don&apos;t just offer jobs; we forge careers in security and service. Discover your path in a culture
            defined by discipline, respect, and continuous growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-body font-medium hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-[0_2px_16px_rgba(58,48,42,0.1)] w-full sm:w-auto text-center"
              href="/contact-us"
            >
              Contact Us
            </Link>
            <a
              className="border border-outline-variant text-on-background px-8 py-4 rounded-lg font-body font-medium hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto text-center bg-surface/50 backdrop-blur-sm"
              href="#pathways"
            >
              Explore Pathways
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Reasons to Join/Employee Benefits Bento Grid --> */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 md:w-2/3">
            <h2 className="font-headline text-4xl md:text-5xl text-on-background mb-6 tracking-tight">
              Why Choose HJ Security Solutions
            </h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Beyond competitive remuneration, we invest heavily in the holistic well-being and professional advancement
              of our personnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            {/* <!-- Benefit 1: Large Span --> */}
            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant/30 flex flex-col justify-between group hover:shadow-[0_2px_32px_rgba(194,101,42,0.08)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "300px", fontVariationSettings: '"FILL" 1' }}
                >
                  workspace_premium
                </span>
              </div>
              <div className="z-10">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-6"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  school
                </span>
                <h3 className="font-headline text-2xl md:text-3xl text-on-background mb-4">Unmatched Training</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Access to our proprietary academy. We fund specialized certifications, close protection courses, and
                  continuous professional development tailored to your trajectory.
                </p>
              </div>
            </div>
            {/* <!-- Benefit 2 --> */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/30 flex flex-col group hover:shadow-[0_2px_32px_rgba(194,101,42,0.08)] transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">health_and_safety</span>
              <h3 className="font-headline text-2xl text-on-background mb-4">Comprehensive Care</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Premium private healthcare, mental wellness support programs, and robust family-oriented benefits
                ensuring you&apos;re protected off-duty.
              </p>
            </div>
            {/* <!-- Benefit 3 --> */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/30 flex flex-col group hover:shadow-[0_2px_32px_rgba(194,101,42,0.08)] transition-all duration-500">
              <span
                className="material-symbols-outlined text-primary text-3xl mb-6"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                trending_up
              </span>
              <h3 className="font-headline text-2xl text-on-background mb-4">Clear Progression</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Transparent promotion criteria. Over 70% of our management team began their journey on the frontline. We
                promote on merit, always.
              </p>
            </div>
            {/* <!-- Benefit 4: Image/Graphic --> */}
            <div className="md:col-span-2 relative rounded-xl overflow-hidden min-h-[300px]">
              <Image
                fill
                alt="Team collaborating"
                className="absolute inset-0 w-full h-full object-cover"
                data-alt="A warm, editorial style photograph of three security professionals in sharp, minimalist uniforms reviewing documents in a well-lit, contemporary briefing room. The lighting is soft and golden, highlighting a burnt sienna accent wall in the background. The atmosphere conveys deep focus, camaraderie, and high-end corporate culture, entirely aligned with a luxurious warm-minimalist aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4y8g3wJo-H9E1ESUqgCQmdSnzAodFg_N4YC2-ydl9ZXHC4pkEutD4KE3P9pAMq0yz8q3AeDqylgBRkcPCCWG2_10INZJ-UPk-_dN1tj9_fGugWoLSPnzG97KrF6np-if85gam16qtN2hOlBwpv6Nfp7o66V3Bf5GwH3EW66LgYikIsq018w0_LygtsLNAvxEIh4RwDsRcUjWGMDJq9kUoVTQ8AxeJ0Gd0cG38-2rZ0CEeKMuq0PQl8Dvi59cgXJo4zntjrcrw1JKr"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                <h3 className="font-headline text-2xl md:text-3xl text-on-primary mb-2">A Culture of Respect</h3>
                <p className="font-body text-surface-container-low max-w-2xl text-sm">
                  We operate on trust and mutual respect. You are not a number; you are a vital component of the HJ
                  Security Solutions family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pathways & Apprenticeships --> */}
      <section className="py-32 bg-surface-container-high border-y border-outline-variant/50" id="pathways">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="font-body text-primary uppercase tracking-widest font-bold text-xs mb-4 block">
              Your Trajectory
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-background mb-6 tracking-tight">
              Pathways to Leadership
            </h2>
            <p className="font-body text-on-surface-variant text-lg">
              Whether you are transitioning from military service, beginning an apprenticeship, or stepping into a
              senior role, we have a structured path designed for your success.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative">
            {/* <!-- Line connecting --> */}
            <div className="hidden md:block absolute top-[55%] left-0 w-full h-px bg-outline-variant/50 -translate-y-1/2 z-0"></div>
            {/* <!-- Step 1 --> */}
            <div className="flex-1 relative z-10">
              <div className="bg-surface w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
                <span className="font-headline text-2xl text-primary">01</span>
              </div>
              <h3 className="font-headline text-2xl text-on-background mb-4 text-center md:text-left">
                Apprenticeships
              </h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed text-center md:text-left">
                Earn while you learn. Our industry-leading apprenticeship schemes offer practical experience alongside
                formal qualifications, providing a solid foundation for a long-term career.
              </p>
            </div>
            {/* <!-- Step 2 --> */}
            <div className="flex-1 relative z-10">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-[0_4px_24px_rgba(194,101,42,0.3)]">
                <span className="font-headline text-2xl text-on-primary">02</span>
              </div>
              <h3 className="font-headline text-2xl text-on-background mb-4 text-center md:text-left">
                Veteran Transition
              </h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed text-center md:text-left">
                We value the discipline and skills acquired in the armed forces. Our bespoke transition programs
                translate military experience into corporate security excellence.
              </p>
            </div>
            {/* <!-- Step 3 --> */}
            <div className="flex-1 relative z-10">
              <div className="bg-surface w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
                <span className="font-headline text-2xl text-primary">03</span>
              </div>
              <h3 className="font-headline text-2xl text-on-background mb-4 text-center md:text-left">
                Executive Track
              </h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed text-center md:text-left">
                For experienced professionals, our executive track focuses on strategic management, risk consultancy,
                and operational leadership across our global portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Role Categories --> */}
      <section className="py-32 bg-surface" id="roles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="md:w-1/2">
              <h2 className="font-headline text-4xl md:text-5xl text-on-background mb-4 tracking-tight">
                Current Opportunities
              </h2>
              <p className="font-body text-on-surface-variant">
                Explore roles across our diverse specialist divisions.
              </p>
            </div>
            {/* <a
              className="text-primary font-body font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
              href="#"
            >
              View All Listings
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a> */}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a className="block group" href="#">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_2px_16px_rgba(58,48,42,0.08)]">
                <div>
                  <span
                    className="material-symbols-outlined text-primary mb-6"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    security
                  </span>
                  <h3 className="font-headline text-xl text-on-background mb-2">Corporate Guarding</h3>
                  <p className="font-body text-on-surface-variant text-sm mb-6">
                    Frontline roles ensuring the safety of premium corporate environments.
                  </p>
                </div>
                <div className="text-sm font-body text-primary font-medium flex justify-between items-center">
                  <span>12 Open Roles</span>
                  <span className="material-symbols-outlined text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    arrow_forward
                  </span>
                </div>
              </div>
            </a>
            <a className="block group" href="#">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_2px_16px_rgba(58,48,42,0.08)]">
                <div>
                  <span
                    className="material-symbols-outlined text-primary mb-6"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    directions_car
                  </span>
                  <h3 className="font-headline text-xl text-on-background mb-2">Close Protection</h3>
                  <p className="font-body text-on-surface-variant text-sm mb-6">
                    Specialist roles requiring advanced training for high-net-worth individuals.
                  </p>
                </div>
                <div className="text-sm font-body text-primary font-medium flex justify-between items-center">
                  <span>4 Open Roles</span>
                  <span className="material-symbols-outlined text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    arrow_forward
                  </span>
                </div>
              </div>
            </a>
            <a className="block group" href="#">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_2px_16px_rgba(58,48,42,0.08)]">
                <div>
                  <span
                    className="material-symbols-outlined text-primary mb-6"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    support_agent
                  </span>
                  <h3 className="font-headline text-xl text-on-background mb-2">Operations &amp; Control</h3>
                  <p className="font-body text-on-surface-variant text-sm mb-6">
                    Nerve center positions managing logistics, monitoring, and crisis response.
                  </p>
                </div>
                <div className="text-sm font-body text-primary font-medium flex justify-between items-center">
                  <span>8 Open Roles</span>
                  <span className="material-symbols-outlined text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    arrow_forward
                  </span>
                </div>
              </div>
            </a>
            <a className="block group" href="#">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_2px_16px_rgba(58,48,42,0.08)]">
                <div>
                  <span
                    className="material-symbols-outlined text-primary mb-6"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    corporate_fare
                  </span>
                  <h3 className="font-headline text-xl text-on-background mb-2">Management &amp; HQ</h3>
                  <p className="font-body text-on-surface-variant text-sm mb-6">
                    Strategic roles in HR, Finance, and Client Relationship Management.
                  </p>
                </div>
                <div className="text-sm font-body text-primary font-medium flex justify-between items-center">
                  <span>5 Open Roles</span>
                  <span className="material-symbols-outlined text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    arrow_forward
                  </span>
                </div>
              </div>
            </a>
          </div> */}

          <p className="font-body text-on-surface-variant text-center">
            Contact us to learn more about our opportunities.
          </p>
          <div className="flex justify-center mt-8">
            <Link
              className="mx-auto inline-block bg-primary text-on-primary px-10 py-4 rounded-lg font-body font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 shadow-lg"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section className="py-24 bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, var(--tw-colors-primary) 0%, transparent 70%)",
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl mb-6 text-surface-bright tracking-tight">
            Ready to stand with us?
          </h2>
          <p className="font-body text-surface-variant/80 text-lg mb-10 max-w-2xl mx-auto">
            Take the next step in your career. Review our current openings and begin your application process today.
            Excellence awaits.
          </p>
          <Link
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-lg font-body font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 shadow-lg"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Careers;
