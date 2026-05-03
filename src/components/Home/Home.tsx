import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`antialiased selection:bg-primary-container selection:text-on-primary-container ${styles.container}`}
    >
      <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            loading="eager"
            alt="Cinematic Hero"
            className="w-full h-full object-cover opacity-80 mix-blend-multiply filter contrast-125 saturate-50"
            data-alt="A striking cinematic photograph of a high-end, modern corporate building lobby at dusk. The scene is bathed in warm, sun-baked golden hour light that reflects softly off polished warm stone floors. The aesthetic is luxurious and minimalist, dominated by earthy burnt sienna tones and deep charcoal shadows. Security personnel in perfectly tailored dark suits are barely visible in the background, projecting a sense of disciplined, quiet authority. The mood is secure, premium, and serene."
            src="/images/home/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-20">
          <h1 className="font-display-xl text-5xl md:text-7xl lg:text-8xl text-on-surface leading-tight tracking-tight mb-8 drop-shadow-sm">
            Securing What <br />
            <span className="italic text-primary">Matters Most</span>
          </h1>
          <p className="font-body-lg text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed">
            Complete security solutions for people, places, assets, and society across the UK & Ireland. We blend human
            intelligence with advanced technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              className="px-8 py-4 bg-primary text-on-primary font-body-md font-medium rounded-lg text-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"
              href="/services"
            >
              Explore Services
            </Link>
            <Link
              className="px-8 py-4 bg-transparent border border-outline text-on-surface font-body-md font-medium rounded-lg text-lg hover:border-primary hover:text-primary transition-all"
              href="/contact-us"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
