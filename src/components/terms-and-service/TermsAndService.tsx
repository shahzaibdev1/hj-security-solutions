import Image from "next/image";

const TermsAndService = () => {
  return (
    <main className="max-w-[1280px] mx-auto px-margin py-xl relative">
      {/* <!-- Hero Section --> */}
      <section className="mb-xl relative overflow-hidden rounded-xl bg-surface-container-high">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            alt=""
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
            data-alt="A sophisticated abstract macro photograph showing layers of warm, sun-baked sand and textured stone in off-white and terracotta hues. The lighting is soft and natural, emphasizing a minimalist, high-end corporate aesthetic suitable for an executive security firm. The mood is calm, permanent, and quietly luxurious, perfectly reflecting the 'Sun-Baked Simplicity' theme."
            src="https://lh3.googleusercontent.com/aida/ADBb0uhyaYc9vU9ZomSmtNsFa1iJyYF2h17kF_V0mQJIPC49clH0VF2u6bBskdl-44WXPkJQuMTgDZC2DITSbOIIHZJIkHYB0U_cBDdxl_h9KURi1eerwK9TA-klpY1jhByCUJcFT3LjIWWEj46JyzMR-nQ2zXh7Rva9Cvo_n6r7UGMOMzUXPtbgPcqDt8SK-EeaWkPHZdBTJ-i6KpkvEN56Z1vOwIkFFhLf9Q2QEecpVZXCI0Hl9SkaTZOMIutznS4FtJCxJjep0YM81A"
          />
        </div>
        <div className="relative z-10 px-lg py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="font-display-xl text-display-xl text-on-surface mb-md">Terms of Service</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Effective Date: October 24, 2024. These terms govern the provision of professional security solutions by HJ
            Security Solutions Limited.
          </p>
        </div>
      </section>
      {/* <!-- Terms Content Layout --> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* <!-- Table of Contents (Sticky) --> */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 bg-surface-container rounded-lg p-md border border-outline-variant/30">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-md text-xl">Contents</h3>
            <ul className="space-y-sm font-label-sm text-label-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors block" href="#section-1">
                  1. Definitions
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors block" href="#section-2">
                  2. Service Provision
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors block" href="#section-3">
                  3. Client Obligations
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors block" href="#section-4">
                  4. Liability &amp; Insurance
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors block" href="#section-5">
                  5. Governing Law
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* <!-- Main Legal Document --> */}
        <article className="lg:col-span-9 bg-surface rounded-xl p-lg shadow-[0_4px_24px_rgba(150,68,7,0.03)] border border-outline-variant/20">
          <div className="prose max-w-none text-on-surface-variant font-body-md space-y-md">
            <p className="text-body-lg text-on-surface">
              Welcome to HJ Security Solutions Limited. By engaging our services, you agree to be bound by the following
              Terms and Conditions. Please read them carefully.
            </p>
            <section className="mt-lg" id="section-1">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">1. Definitions</h2>
              <p>In these Terms, unless the context otherwise requires:</p>
              <ul className="list-disc pl-md space-y-sm mt-sm">
                <li>
                  <strong>&quot;Company&quot;</strong> refers to HJ Security Solutions Limited, registered in England
                  and Wales, headquartered in Thornton Heath.
                </li>
                <li>
                  <strong>&quot;Client&quot;</strong> refers to any individual, corporation, or entity engaging the
                  Company for security services.
                </li>
                <li>
                  <strong>&quot;Services&quot;</strong> means the specific security personnel, consultancy, or
                  protection services outlined in the agreed Service Level Agreement (SLA).
                </li>
              </ul>
            </section>
            <section className="mt-lg" id="section-2">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">2. Service Provision</h2>
              <div className="bg-surface-container-low p-md rounded-lg border-l-4 border-primary">
                <p className="mb-sm">
                  <strong>Standard of Care:</strong> The Company shall provide Services with reasonable skill, care, and
                  diligence, strictly adhering to all relevant UK licensing laws and SIA (Security Industry Authority)
                  regulations.
                </p>
                <p>
                  <strong>Personnel:</strong> All deployed operatives are fully vetted, licensed, and trained to the
                  high standards expected of an executive security firm. The Company reserves the right to substitute
                  personnel where necessary to maintain service continuity.
                </p>
              </div>
            </section>
            <section className="mt-lg" id="section-3">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">3. Client Obligations</h2>
              <p>The Client agrees to:</p>
              <ol className="list-decimal pl-md space-y-sm mt-sm">
                <li>Provide accurate and complete information required for the effective delivery of Services.</li>
                <li>Ensure safe access to the premises or locations where Services are to be rendered.</li>
                <li>Promptly settle all invoices in accordance with the payment terms specified in the SLA.</li>
              </ol>
            </section>
            <section className="mt-lg" id="section-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">4. Liability &amp; Insurance</h2>
              <p>
                While the Company maintains comprehensive public and employer&apos;s liability insurance, the Company
                shall not be liable for any indirect, consequential, or economic loss suffered by the Client.
              </p>
              <p className="mt-sm">
                The Company&apos;s total liability under these terms, whether in contract, tort, or otherwise, shall be
                limited to the total fees paid by the Client in the twelve (12) months preceding the claim.
              </p>
            </section>
            <section className="mt-lg border-t border-outline-variant/30 pt-lg" id="section-5">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">5. Governing Law</h2>
              <p>
                These Terms of Service and any dispute or claim arising out of or in connection with them shall be
                governed by and construed in accordance with the law of England and Wales. The courts of England and
                Wales shall have exclusive jurisdiction.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default TermsAndService;
