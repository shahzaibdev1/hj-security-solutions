import Image from "next/image";

import "./Services.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-headline text-5xl lg:text-7xl font-medium tracking-tight text-on-surface mb-6 leading-tight">
              Professional Security Services
            </h1>
            <p className="font-body text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
              At HJ Security Solutions Limited, we provide professional and reliable security personnel to support a
              wide range of industries and environments across the UK. Our services are designed to offer visible
              protection, reduce risk, and give our clients complete peace of mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-[#a55523] transition-colors shadow-sm"
                href="#services"
              >
                Explore Services
              </a>
              <Link
                className="inline-flex items-center justify-center border border-outline text-on-surface px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-surface-variant transition-colors"
                href="/contact-us"
              >
                Consult an Expert
              </Link>
            </div>
          </div>
        </div>
        {/*<!-- Abstract Decoration -->*/}
        <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-30 pointer-events-none hidden lg:block">
          <Image
            fill
            alt="Abstract architectural lines"
            className="w-full h-full object-cover object-center mix-blend-multiply"
            data-alt="A warm-toned architectural abstract photograph featuring smooth, sweeping structural lines in golden and desert hues. The lighting creates deep, soft shadows and bright highlights that emphasize the geometric curves. The style is modern, minimalist, and editorial, perfectly complementing a sun-baked simplicity aesthetic with burnt sienna undertones."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUrrcMgM15O70ebFRqzqaYc9y6JUwSCSwCEj8oI7VdpbmzU4nIvw1u7eau7qbQK_iwZMjtou0KtINH7NIyhiS7N1YcxafI-qv-C1NS8QHyM76YXuzIHGAhuhoH-l6XYocR4ct3WJfgstkdwJLdFrrG0EVZL8x3AZ4n6Phw6kdyA-ZaK3BwOimemYSdTeZTa0ql504v3VODNlMkf9oM7UHW4gJKgBPpREKEXW0WSICzXdSJpqWb9qr-ZnUYgXUChJHc-nyx2yaWNjoN"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
      </section>
      {/*<!-- Services Grid (Bento/Editorial Style) -->*/}
      <section className="py-20 bg-surface-container-low" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            {/*<!-- Door Supervisors (Large Block) -->*/}
            <article className="col-span-1 md:col-span-2 lg:col-span-2 bg-surface rounded-xl p-8 lg:p-12 border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
              <div>
                <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl" data-icon="meeting_room">
                    meeting_room
                  </span>
                </div>
                <h2 className="font-headline text-3xl lg:text-4xl text-on-surface mb-4">Door Supervisors</h2>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                  We supply SIA-licensed door supervisors for venues including bars, clubs, and entertainment spaces.
                  Our staff are trained to manage entry points, handle crowd control, and maintain a safe and
                  professional environment.
                </p>
              </div>
              <div>
                <Link
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-[#a55523] group/link"
                  href="/contact-us"
                >
                  Request Quote
                  <span
                    className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            {/*<!-- Event Security -->*/}
            <article className="bg-surface rounded-xl p-8 border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col">
              <div className="w-10 h-10 bg-surface-variant text-on-surface rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-xl" data-icon="celebration">
                  celebration
                </span>
              </div>
              <h2 className="font-headline text-2xl text-on-surface mb-3">Event Security</h2>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                We provide security personnel for private and public events, ensuring the smooth running of operations
                while maintaining safety for guests, staff, and organisers.
              </p>
              <Link
                className="inline-flex items-center gap-2 text-on-surface font-semibold hover:text-primary text-sm group/link mt-auto"
                href="/contact-us"
              >
                Request Quote
                <span
                  className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </Link>
            </article>
            {/*<!-- Corporate Security -->*/}
            <article className="bg-surface rounded-xl p-8 border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col">
              <div className="w-10 h-10 bg-surface-variant text-on-surface rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-xl" data-icon="business">
                  business
                </span>
              </div>
              <h2 className="font-headline text-2xl text-on-surface mb-3">Corporate Security</h2>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                Our corporate security services are designed to protect offices, commercial buildings, and business
                premises with professional on-site security presence.
              </p>
              <Link
                className="inline-flex items-center gap-2 text-on-surface font-semibold hover:text-primary text-sm group/link mt-auto"
                href="/contact-us"
              >
                Request Quote
                <span
                  className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </Link>
            </article>
            {/*<!-- Construction Site Security (Large Block with Image) -->*/}
            <article className="col-span-1 md:col-span-2 lg:col-span-2 bg-inverse-surface text-inverse-on-surface rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col md:flex-row group">
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-2xl" data-icon="construction">
                      construction
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl lg:text-4xl text-white mb-4">Construction Site Security</h2>
                  <p className="font-body text-white/80 leading-relaxed mb-8">
                    We help protect construction sites from theft, vandalism, and unauthorised access through trained
                    security officers and effective site monitoring.
                  </p>
                </div>
                <div>
                  <Link
                    className="inline-flex items-center gap-2 text-primary-container font-semibold hover:text-white transition-colors group/link"
                    href="/contact-us"
                  >
                    Request Quote
                    <span
                      className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  fill
                  alt="Construction Site Security"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  data-alt="A macro photograph of a sleek, modern security camera lens reflecting warm, golden light. The composition is highly editorial, focusing on the geometric precision and premium materials of the technology. The color palette relies on deep blacks, warm charcoal, and burnt sienna reflections, creating a sophisticated and secure atmosphere fitting a luxury brand."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaicFEiPj4eW6lkdU_SSOBdkEj4zLx2XXu_D9Bv8kzC4bgUZPp0gzF33woEQGh3A6usAt3RPPrrO_0X2aStu5tKPzz4iYnpkQsb4wV1NfvzNWetdjRAF-Fu0_G280Yfohyz1wWTmHaMfvg7uq1iDZUZwED4M8szBzysJP_CsZFInRRigueCe3Enk3wchHb0ELOjav6b7LnGPIL-YE1iKL_U6sNEjWlYiR-T2XO_p4_ZVdNqk5l52dkzsXM2niUlXgTq-a5UQl3W_be"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-transparent to-transparent hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent md:hidden"></div>
              </div>
            </article>
          </div>
          {/*<!-- Bottom Row -->*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
            {/*<!-- Static Guarding -->*/}
            <article className="bg-surface rounded-xl p-8 border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col md:flex-row gap-8">
              <div className="flex-grow">
                <div className="w-10 h-10 bg-surface-variant text-on-surface rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-xl" data-icon="shield">
                    shield
                  </span>
                </div>
                <h2 className="font-headline text-2xl text-on-surface mb-3">Static Guarding</h2>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  We offer static guarding services for premises that require a constant security presence, ensuring
                  assets and property remain protected at all times.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-on-surface font-semibold hover:text-primary text-sm group/link mt-auto"
                  href="/contact-us"
                >
                  Request Quote
                  <span
                    className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            {/*<!-- Mobile Patrols -->*/}
            <article className="bg-surface rounded-xl p-8 border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col md:flex-row gap-8">
              <div className="flex-grow">
                <div className="w-10 h-10 bg-surface-variant text-on-surface rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-xl" data-icon="directions_car">
                    directions_car
                  </span>
                </div>
                <h2 className="font-headline text-2xl text-on-surface mb-3">Mobile Patrols (Optional)</h2>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  Where required, we can provide mobile patrol services to monitor multiple sites or larger premises
                  during agreed time intervals.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-on-surface font-semibold hover:text-primary text-sm group/link mt-auto"
                  href="/contact-us"
                >
                  Request Quote
                  <span
                    className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          </div>
          {/*<!-- Closing Statement -->*/}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="font-headline text-2xl md:text-3xl text-on-surface leading-relaxed">
              At HJ Security Solutions Limited, all personnel are carefully selected and trained to deliver dependable,
              professional service that meets the specific needs of each client.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
