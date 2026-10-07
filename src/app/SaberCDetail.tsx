import {
  AVIA,
  ClickToPlayVideo,
  ClosingCta,
  PrimaryButton,
  ProductLockup,
  SpikeDisclaimer,
  cldImage,
  cldPoster,
  cldVideo,
  contactHref,
  usePageMeta,
} from "./components/site.tsx";

const ANIMATION = "SaberC-FinalAnimation_na701a";

const specs = [
  { label: "Footprints", value: ["12 x 15 mm", "14 x 17 mm"] },
  { label: "Heights", value: ["5–9 mm*"] },
  { label: "Lordosis", value: ["6° and 12°"] },
  { label: "Screws", value: ["12, 14, 16, 18, 20 mm"] },
  { label: "Spikes", value: ["Standard and Long"] },
];

const sectionPad = "px-6 md:px-12 lg:px-16 py-20 md:py-24";

export default function SaberCDetail() {
  usePageMeta(
    "Saber-C® | AVIA™ ACDF Fixation System | Elevation Spine",
    "Saber-C® | AVIA™ is an anterior cervical fixation system combining porous 3D-printed titanium, plate-level stability, and spike or screw fixation."
  );

  return (
    <div className="bg-white font-sans">
      {/* 1. Hero */}
      <section className="atmos overflow-hidden text-white px-6 md:px-12 lg:px-16 pt-36 pb-20 md:pb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ProductLockup lockup={AVIA.lockup} descriptor={AVIA.descriptor} as="h1" size="lg" dark />

            {/* Backdrop bullet points */}
            <ul className="flex flex-col gap-3 mt-8">
              {AVIA.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 font-sans text-white/90 text-[16px] md:text-[18px]">
                  <span className="w-2 h-2 rounded-[2px] bg-[#2ac4f4] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <PrimaryButton to={contactHref("avia")}>Request Information</PrimaryButton>
            </div>
          </div>

          <div>
            <div className="relative bg-[#0f1520] border border-white/10 rounded-[10px] overflow-hidden p-6 aspect-[4/3] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={cldImage("SaberCA-Images-Oct2026-01", 1600)}
                alt="Saber-C® | AVIA™ labeled system diagram"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(42,196,244,0.2)]"
              />
            </div>
            <SpikeDisclaimer dark className="mt-3 text-center" />
          </div>
        </div>
      </section>

      {/* 2. System Overview: Three image cards with chip text as caption */}
      <section className={`bg-white ${sectionPad}`}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-heading font-bold text-[#0a0e17] text-[30px] md:text-[40px] tracking-tight mb-10">
            System Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Porous titanium architecture (A2) */}
            <figure>
              <div className="lift relative bg-[#0f1520] rounded-[8px] aspect-[4/3] overflow-hidden p-6 flex items-center justify-center gap-4">
                <img
                  src={cldImage("SaberCA-Images-Oct2026-04", 600)}
                  alt="Porous titanium spacer 12x15"
                  loading="lazy"
                  className="w-1/2 h-full object-contain"
                />
                <img
                  src={cldImage("SaberCA-Images-Oct2026-05", 600)}
                  alt="Porous titanium spacer 14x17"
                  loading="lazy"
                  className="w-1/2 h-full object-contain"
                />
              </div>
              <figcaption className="font-heading font-bold text-[#0a0e17] text-[16px] mt-3">
                Porous titanium architecture
              </figcaption>
            </figure>

            {/* Card 2: Spike + screw fixation options (A3) */}
            <figure>
              <div className="lift relative bg-[#0f1520] rounded-[8px] aspect-[4/3] overflow-hidden p-6 flex items-center justify-center gap-4">
                <img
                  src={cldImage("SaberCA-Images-Oct2026-06", 500)}
                  alt="Screw"
                  loading="lazy"
                  className="w-1/3 h-full object-contain"
                />
                <img
                  src={cldImage("SaberCA-Images-Oct2026-07", 500)}
                  alt="Standard spike"
                  loading="lazy"
                  className="w-1/3 h-full object-contain"
                />
                <img
                  src={cldImage("SaberCA-Images-Oct2026-08", 500)}
                  alt="Long spike"
                  loading="lazy"
                  className="w-1/3 h-full object-contain"
                />
              </div>
              <figcaption className="font-heading font-bold text-[#0a0e17] text-[16px] mt-3">
                Spike + screw fixation options
              </figcaption>
            </figure>

            {/* Card 3: Zero-profile anterior cervical plate (A4) */}
            <figure>
              <div className="lift relative bg-[#0f1520] rounded-[8px] aspect-[4/3] overflow-hidden p-6 flex items-center justify-center gap-4">
                <img
                  src={cldImage("SaberCA-Images-Oct2026-02", 600)}
                  alt="Blue 12x15 plate"
                  loading="lazy"
                  className="w-1/2 h-full object-contain"
                />
                <img
                  src={cldImage("SaberCA-Images-Oct2026-03", 600)}
                  alt="Gold 14x17 plate"
                  loading="lazy"
                  className="w-1/2 h-full object-contain"
                />
              </div>
              <figcaption className="font-heading font-bold text-[#0a0e17] text-[16px] mt-3">
                Zero-profile anterior cervical plate
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 3. See the System */}
      <section className={`bg-gradient-to-b from-[#070b14] to-[#0c1626] text-white ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading font-bold text-[30px] md:text-[40px] tracking-tight mb-8">See the System</h2>
          <ClickToPlayVideo
            src={cldVideo(ANIMATION)}
            poster={cldPoster(ANIMATION, 40)}
            title="Saber-C AVIA product animation"
          />
          <SpikeDisclaimer dark className="mt-3 text-center" />
        </div>
      </section>

      {/* 4. Specifications: 5 boxes */}
      <section className={`bg-[#f8fafc] ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading font-bold text-[#0a0e17] text-[30px] md:text-[40px] tracking-tight mb-10">
            Specifications
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 bg-white border border-black/[0.08] rounded-[8px] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-black/[0.08]">
            {specs.map((s) => (
              <div key={s.label} className="p-6 md:p-8 transition-colors duration-500 hover:bg-[#2ac4f4]/[0.04]">
                <p className="font-mono font-semibold uppercase tracking-[0.15em] text-[12px] text-[#0891b2] mb-2">
                  {s.label}
                </p>
                {s.value.map((val) => (
                  <p key={val} className="font-heading font-bold text-[#0a0e17] text-[18px] md:text-[20px] leading-snug">
                    {val}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <p className="italic text-[#64748b] text-[13px] leading-relaxed mt-4">
            *12° interbodies available in 6–9 mm heights only. When used with spikes, supplemental fixation is required.
          </p>
        </div>
      </section>

      {/* 5. Bottom three cards */}
      <section className={`bg-white ${sectionPad} border-t border-black/[0.05]`}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Zero-Profile */}
            <article>
              <div className="relative bg-[#0f1520] rounded-[8px] aspect-[4/3] overflow-hidden mb-5 flex items-center justify-center p-4">
                <img
                  src={cldImage("avia-hero-825-338", 900)}
                  alt="Zero-Profile"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading font-bold text-[#0a0e17] text-[22px] mb-2">Zero-Profile</h3>
              <p className="text-[#4a5568] text-[15px] md:text-[16px] leading-relaxed">
                Spikes and screw heads sit flush with the anterior surface of the implant.
              </p>
            </article>

            {/* Card 2: Fixation Options */}
            <article>
              <div className="relative bg-[#0f1520] rounded-[8px] aspect-[4/3] overflow-hidden mb-5 grid grid-cols-2 gap-2 p-2">
                <div className="relative h-full overflow-hidden rounded-[4px] bg-[#070b14] flex flex-col items-center justify-center">
                  <img
                    src={cldImage("avia-beauty-09-implant-construct-spikes-lateral", 600)}
                    alt="Spike fixation construct"
                    loading="lazy"
                    className="w-full h-full object-contain p-2"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/75 text-white/90 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm">
                    Spikes
                  </span>
                </div>
                <div className="relative h-full overflow-hidden rounded-[4px] bg-[#070b14] flex flex-col items-center justify-center">
                  <img
                    src={cldImage("avia-beauty-10-implant-construct-screws-lateral", 600)}
                    alt="Screw fixation construct"
                    loading="lazy"
                    className="w-full h-full object-contain p-2"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/75 text-white/90 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm">
                    Screws
                  </span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-[#0a0e17] text-[22px] mb-2">Fixation Options</h3>
              <p className="text-[#4a5568] text-[15px] md:text-[16px] leading-relaxed">
                Spike and screw fixation from one system, with straight and angled instruments for screws.
              </p>
            </article>

            {/* Card 3: Benefits of In-Line Spike Fixation */}
            <article>
              <div className="lift relative bg-[#0f1520] rounded-[8px] aspect-[4/3] overflow-hidden mb-5 flex flex-col justify-between p-4">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-heading font-semibold text-white/70 text-[11px] mb-1 text-center">
                      Competitive screw fixation
                    </span>
                    <img
                      src={cldImage("SaberXA-Images-Oct2026-12", 600)}
                      alt="Competitive screw fixation"
                      loading="lazy"
                      className="w-full h-[140px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-heading font-semibold text-[#2ac4f4] text-[11px] mb-1 text-center">
                      Saber-C in-line spike fixation
                    </span>
                    <img
                      src={cldImage("SaberXA-Images-Oct2026-13", 600)}
                      alt="Saber-C in-line spike fixation"
                      loading="lazy"
                      className="w-full h-[140px] object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-heading font-bold text-[#0a0e17] text-[22px] mb-2">
                Benefits of In-Line Spike Fixation
              </h3>
              <p className="text-[#4a5568] text-[15px] md:text-[16px] leading-relaxed">
                Less invasive. Reduced surgical steps. Less challenging.
              </p>
            </article>
          </div>

          <SpikeDisclaimer className="mt-8 text-center" />
        </div>
      </section>

      {/* Safety & IFU line */}
      <section className="bg-[#f8fafc] border-t border-black/[0.06] px-6 md:px-12 py-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[#64748b] text-[13px] md:text-[14px] leading-relaxed">
            Please refer to the Saber-C IFU for indications, contraindications, warnings, and precautions.
          </p>
        </div>
      </section>

      {/* Closing call to action */}
      <ClosingCta product="avia" />
    </div>
  );
}
