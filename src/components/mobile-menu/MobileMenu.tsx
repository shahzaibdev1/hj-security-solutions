import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <div
      className={`bg-background text-on-background font-body-md antialiased min-h-screen fixed inset-0 z-40 transition-opacity duration-300 ease-in ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="fixed inset-0 z-40 bg-surface-variant/80 backdrop-blur-sm"></div>
      <nav
        className={`bg-[#e5e1d8] w-full rounded-r-lg h-dvh max-h-dvh w-4/5 fixed top-0 left-0 z-50 flex flex-col p-8 pb-12 gap-6 shadow-2xl shadow-stone-900/10 overflow-y-auto transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-6 tonal layering with Stone and Off-White shifts">
          <div className="font-serif text-[#c2652a] text-sm font-bold uppercase tracking-widest">
            HJ Security Solutions
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors scale-95 active:duration-75">
            <span className="material-symbols-outlined text-[28px]" data-icon="close" onClick={onClose}>
              close
            </span>
          </button>
        </div>
        <div className="flex h-full flex-col w-4/5">
          <ul className="flex-1 flex flex-col gap-2 mt-4 font-serif Newsreader text-2xl leading-relaxed">
            <li className="flex items-center gap-4 py-3 group cursor-pointer text-[#c2652a] font-bold border-l-4 border-[#c2652a] pl-4 hover:translate-x-2 transition-transform duration-300 Active items use subtle inset stroke appearance">
              <span
                className="material-symbols-outlined text-[28px] fill text-[#c2652a]"
                data-icon="home"
                data-weight="fill"
              >
                home
              </span>
              <span>Home</span>
            </li>
            <li className="flex items-center gap-4 py-3 group cursor-pointer text-stone-700 pl-4 hover:text-[#c2652a] hover:translate-x-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-[28px] text-[#c2652a]" data-icon="shield">
                shield
              </span>
              <span>Services</span>
            </li>
            <li className="flex items-center gap-4 py-3 group cursor-pointer text-stone-700 pl-4 hover:text-[#c2652a] hover:translate-x-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-[28px] text-[#c2652a]" data-icon="military_tech">
                military_tech
              </span>
              <span>Specialist</span>
            </li>
            <li className="flex items-center gap-4 py-3 group cursor-pointer text-stone-700 pl-4 hover:text-[#c2652a] hover:translate-x-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-[28px] text-[#c2652a]" data-icon="work">
                work
              </span>
              <span>Careers</span>
            </li>
            <li className="flex items-center gap-4 py-3 group cursor-pointer text-stone-700 pl-4 hover:text-[#c2652a] hover:translate-x-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-[28px] text-[#c2652a]" data-icon="menu_book">
                menu_book
              </span>
              <span>Insights</span>
            </li>
            <li className="flex items-center gap-4 py-3 group cursor-pointer text-stone-700 pl-4 hover:text-[#c2652a] hover:translate-x-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-[28px] text-[#c2652a]" data-icon="contact_support">
                contact_support
              </span>
              <span>Contact</span>
            </li>
          </ul>

          <div className="mt-auto pt-6 border-t border-outline-variant/30 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Image
                width={48}
                height={48}
                alt="HJ HQ"
                className="w-12 h-12 rounded-full object-cover shadow-sm"
                data-alt="A sophisticated macro shot of a sleek brushed metal surface reflecting warm, golden hour sunlight. The texture conveys strength, precision, and an authoritative yet luxurious executive security aesthetic. A subtle burnt orange tint permeates the deep stone-grey shadows."
                src="https://lh3.googleusercontent.com/aida/ADBb0uhyaYc9vU9ZomSmtNsFa1iJyYF2h17kF_V0mQJIPC49clH0VF2u6bBskdl-44WXPkJQuMTgDZC2DITSbOIIHZJIkHYB0U_cBDdxl_h9KURi1eerwK9TA-klpY1jhByCUJcFT3LjIWWEj46JyzMR-nQ2zXh7Rva9Cvo_n6r7UGMOMzUXPtbgPcqDt8SK-EeaWkPHZdBTJ-i6KpkvEN56Z1vOwIkFFhLf9Q2QEecpVZXCI0Hl9SkaTZOMIutznS4FtJCxJjep0YM81A"
              />
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  HQ Address
                </span>
                <span className="font-body-md text-body-md text-on-surface">Thornton Heath HQ</span>
              </div>
            </div>
            <button className="w-full bg-[#c2652a] text-white font-label-sm text-label-sm py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm ring-1 ring-inset ring-white/20 uppercase tracking-widest">
              <span>Request Quote</span>
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
