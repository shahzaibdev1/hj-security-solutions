import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <main className="flex-grow pt-xl pb-xl max-w-[1280px] mx-auto px-8 w-full">
      <header className="mb-lg max-w-3xl">
        <h1 className="font-display-xl text-display-xl text-on-surface mb-sm">Privacy Policy</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          HJ Security Solutions Limited is committed to protecting and respecting your privacy in accordance with UK
          data protection laws, including the UK GDPR.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
        <div className="md:col-span-8 space-y-lg">
          <section className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">person</span>
              Information We Collect
            </h2>
            <p className="text-on-surface-variant mb-md">
              We may collect and process personal data that you provide to us directly, such as your name, contact
              details, and any other information relevant to the services we provide.
            </p>
          </section>
          <section className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">settings</span>
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-md text-on-surface-variant space-y-xs">
              <li>Respond to enquiries</li>
              <li>Provide and manage services</li>
              <li>Communicate updates</li>
              <li>Improve operations</li>
            </ul>
          </section>
          <section className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">gavel</span>
              Lawful Basis
            </h2>
            <p className="text-on-surface-variant">
              Our processing is based on legitimate business interests, contractual necessity, or your consent.
            </p>
          </section>
          <section className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">share</span>
              Data Sharing
            </h2>
            <p className="text-on-surface-variant">
              We do not sell data. We share only with trusted partners necessary for service delivery.
            </p>
          </section>
          <section className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">security</span>
              Data Security
            </h2>
            <p className="text-on-surface-variant">
              We implement appropriate technical and organisational measures to ensure a level of security appropriate
              to the risk.
            </p>
          </section>
          <section className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">schedule</span>
              Data Retention
            </h2>
            <p className="text-on-surface-variant">
              We retain personal data only as long as necessary for the purposes it was collected.
            </p>
          </section>
          <section className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">fact_check</span>
              Your Rights
            </h2>
            <p className="text-on-surface-variant">
              You have rights to access, correct, delete, or object to the processing of your personal data.
            </p>
          </section>
        </div>
        <div className="md:col-span-4">
          <div className="sticky top-md bg-surface-container-low p-md rounded-xl border border-surface-variant">
            <Image
              fill
              alt="Abstract architectural security concept"
              className="w-full h-48 object-cover rounded-lg mb-md  brightness-50 z-[-1]"
              data-alt="A sophisticated, sun-baked minimalist architectural abstract. Warm off-white and soft stone-colored geometric shapes interlock, illuminated by sharp, bright sunlight creating crisp shadows. A hint of deep terracotta orange is visible in a subtle reflection, perfectly matching the UI's quiet luxury executive security aesthetic."
              src="/images/privacy-policy/privacy-policy.png"
            />
            <h3 className="font-headline-md text-headline-md text-inverse-on-surface mb-sm z-10">Contact Us</h3>
            <p className="text-inverse-on-surface mb-md font-body-sm z-10">
              If you have any questions about this privacy policy or our privacy practices, please contact us.
            </p>
            <button className="w-full bg-[#c2652a] text-white z-10 font-label-sm text-label-sm py-sm px-md rounded border border-transparent shadow-[inset_0_2px_0_rgba(255,255,255,0.2)] hover:bg-[#a05220] transition-colors flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined text-[16px]">mail</span> Contact via Website
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
