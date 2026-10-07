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

const features = [
  {
    title: "Porous Titanium Architecture",
    desc: "3D-printed titanium interbody with 55% porosity.*",
  },
  {
    title: "6° and 12° Lordosis",
    desc: "Two lordotic options across both footprints.",
  },
  {
    title: "In-line Spike + Screw Fixation",
    desc: "Pre-loaded in-line spikes or screws. Both in one tray.",
  },
  {
    title: "Zero-profile Anterior Cervical Plate",
    desc: "",
  },
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

            {/* Bullets */}
            <ul className="flex flex-col gap-3.5 mt-8">
              {AVIA.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 font-sans text-white/90 text-[16px] md:text-[18px]">
                  <span className="w-2 h-2 rounded-full bg-[#2ac4f4] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <PrimaryButton to={contactHref("avia")}>Request Information</PrimaryButton>
            </div>
          </div>

          <div>
            <div className="relative bg-[#0f1520] border border-white/10 rounded-[10px] overflow-hidden p-6 md:p-10 aspect-[4/3] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={cldImage("NASS_HERO_IMAGES-01", 1600)}
                alt="Saber-C® | AVIA™ system render"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(42,196,244,0.25)]"
              />
            </div>
            <SpikeDisclaimer dark className="mt-3 text-center" />
          </div>
        </div>
      </section>

      {/* 2. Feature List + Cervical Spine Vertebra Section */}
      <section className={`bg-white ${sectionPad} overflow-hidden border-b border-black/[0.06]`}>
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {features.map((f) => (
                <div key={f.title} className="py-6 first:pt-4 last:pb-4">
                  <h3 className="font-heading font-bold text-[#0a0e17] text-[20px] md:text-[22px] tracking-tight">
                    {f.title}
                  </h3>
                  {f.desc && (
                    <p className="text-[#64748b] text-[15px] md:text-[16px] mt-2 leading-relaxed">
                      {f.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cervical Vertebra In-Situ Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-[12px] overflow-hidden flex items-center justify-center">
              <img
                src={cldImage("avia-hero-825-338", 1400)}
                alt="Saber-C AVIA implanted into cervical spine"
                className="w-full h-full object-cover object-[center_20%] scale-110 filter drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. System Components: 3 Cards */}
      <section className={`bg-[#f8fafc] ${sectionPad}`}>
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-black/[0.08] rounded-[10px] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-black/[0.08] shadow-sm">
            {/* Card 1: Porous Interbody */}
            <div className="p-8 flex flex-col">
              <div className="relative bg-[#f8fafc] rounded-[8px] aspect-[4/3] mb-6 flex items-center justify-center p-6">
                <img
                  src={cldImage("NASS_HERO_IMAGES-03", 800)}
                  alt="Porous Interbody"
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <h3 className="font-heading font-bold text-[#0a0e17] text-[20px] mb-2">
                Porous Interbody
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                12×15mm & 14×17mm
              </p>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                5–9mm heights · 6° & 12°
              </p>
              <p className="italic text-[#94a3b8] text-[13px] leading-relaxed mt-4">
                *12° interbodies are available only in heights of 6 to 9mm.
              </p>
            </div>

            {/* Card 2: Anterior Cervical Plate */}
            <div className="p-8 flex flex-col">
              <div className="relative bg-[#f8fafc] rounded-[8px] aspect-[4/3] mb-6 flex items-center justify-center p-6">
                <img
                  src={cldImage("NASS_HERO_IMAGES-04", 800)}
                  alt="Anterior Cervical Plate"
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <h3 className="font-heading font-bold text-[#0a0e17] text-[20px] mb-2">
                Anterior Cervical Plate
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                Zero-profile
              </p>
            </div>

            {/* Card 3: Spikes + Screws */}
            <div className="p-8 flex flex-col">
              <div className="relative bg-[#f8fafc] rounded-[8px] aspect-[4/3] mb-6 flex items-center justify-center p-4 gap-3">
                <img
                  src={cldImage("NASS_HERO_IMAGES-07", 500)}
                  alt="Saber-C screw"
                  loading="lazy"
                  className="w-1/2 h-full object-contain filter drop-shadow-sm"
                />
                <img
                  src={cldImage("NASS_HERO_IMAGES-06", 500)}
                  alt="Saber-C spike"
                  loading="lazy"
                  className="w-1/2 h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <h3 className="font-heading font-bold text-[#0a0e17] text-[20px] mb-2">
                Spikes + Screws
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                Spikes: 12mm & 14mm
              </p>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                Screws: 12mm–20mm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. See the System */}
      <section className={`bg-gradient-to-b from-[#070b14] to-[#0c1626] text-white ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading font-bold text-[30px] md:text-[40px] tracking-tight mb-8">
            See the System
          </h2>
          <ClickToPlayVideo
            src={cldVideo(ANIMATION)}
            poster={cldPoster(ANIMATION, 40)}
            title="Saber-C AVIA product animation"
          />
          <SpikeDisclaimer dark className="mt-3 text-center" />
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
                  alt="Zero-Profile multi-level spine construct"
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

      {/* 6. Safety & IFU line */}
      <section className="bg-[#f8fafc] border-t border-black/[0.06] px-6 md:px-12 py-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[#64748b] text-[13px] md:text-[14px] leading-relaxed">
            Please refer to the Saber-C IFU for indications, contraindications, warnings, and precautions.
          </p>
        </div>
      </section>

      {/* 7. Closing call to action */}
      <ClosingCta product="avia" />
    </div>
  );
}
