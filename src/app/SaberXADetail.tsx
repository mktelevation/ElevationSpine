import { useState } from "react";
import {
  XA,
  ClosingCta,
  PrimaryButton,
  ProductLockup,
  cldImage,
  contactHref,
  usePageMeta,
} from "./components/site.tsx";

const heroFeatures = [
  {
    title: "Independent Height + Lordosis Expansion",
    desc: "Adjust height and lordosis separately, intra-operatively.",
  },
  {
    title: "3D-Printed Titanium Endplates",
    desc: "Three footprints, three sizes per footprint.",
  },
  {
    title: "Spike + Screw Fixation Options",
    desc: "Choose spikes or screws through the anterior plate.",
  },
  {
    title: "Zero-profile Anterior Lumbar Plate",
    desc: "",
  },
];

const photoRow = [
  {
    caption: "Anterior plate beside the interbody",
    image: "SaberXA-Images-Oct2026-08",
  },
  {
    caption: "Curved spikes, the inline fixation option",
    image: "SaberXA-Images-Oct2026-07",
  },
  {
    caption: "Interbody expanded on the inserter",
    image: "SaberXA-Images-Oct2026-06",
  },
];

const footprints = [
  { id: "26x34", label: "26D × 34W mm" },
  { id: "28x37", label: "28D × 37W mm" },
  { id: "30x40", label: "30D × 40W mm" },
];

const sizingTiers = [
  {
    label: "11mm",
    sub: "Short",
    heightText: "11-14mm",
    heightLeft: "0%",
    heightWidth: "37.5%",
    lordosisText: "6° - 13°",
    lordosisLeft: "0%",
    lordosisWidth: "36.8%",
    barColor: "bg-[#38bdf8]",
  },
  {
    label: "13mm",
    sub: "Medium",
    heightText: "13-16mm",
    heightLeft: "25%",
    heightWidth: "37.5%",
    lordosisText: "12° - 19°",
    lordosisLeft: "31.5%",
    lordosisWidth: "36.8%",
    barColor: "bg-[#0ea5e9]",
  },
  {
    label: "16mm",
    sub: "Tall",
    heightText: "16-19mm",
    heightLeft: "62.5%",
    heightWidth: "37.5%",
    lordosisText: "18° - 25°",
    lordosisLeft: "63.1%",
    lordosisWidth: "36.8%",
    barColor: "bg-[#0284c7]",
  },
];

const specs = [
  {
    title: "Anterior Lumbar Plate",
    image: "NASS_HERO_IMAGES-05",
    lines: ["Zero-profile", "34, 37, 40mm widths"],
  },
  {
    title: "Spikes",
    image: "NASS_HERO_IMAGES-09",
    lines: ["5.0mm diameter", "20, 22.5, 25mm lengths"],
  },
  {
    title: "Screws",
    image: "NASS_HERO_IMAGES-08",
    lines: ["5.0 & 5.5mm diameters", "20-35mm lengths, 2.5mm increments"],
  },
];

const sectionPad = "px-6 md:px-12 lg:px-16 py-20 md:py-24";

function ExpandableInterbodyShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={`bg-gradient-to-b from-[#070b14] to-[#0c1626] text-white ${sectionPad} overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-heading font-bold text-[30px] md:text-[40px] tracking-tight text-white">
              Expandable Interbody Technology
            </h2>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-xl mt-3">
              Independently expand height and lordosis in situ. Expand up to 25 degrees of lordosis.
            </p>
          </div>
          <div className="inline-flex p-1 rounded-[6px] bg-white/5 border border-white/10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className={`px-5 py-2.5 rounded-[4px] font-heading text-[13px] font-semibold transition-all cursor-pointer ${
                !isExpanded ? "bg-[#2ac4f4] text-[#0a0e17] shadow-sm" : "text-white/70 hover:text-white"
              }`}
            >
              Collapsed
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className={`px-5 py-2.5 rounded-[4px] font-heading text-[13px] font-semibold transition-all cursor-pointer ${
                isExpanded ? "bg-[#2ac4f4] text-[#0a0e17] shadow-sm" : "text-white/70 hover:text-white"
              }`}
            >
              Expanded
            </button>
          </div>
        </div>

        {/* Visual showcase: 2 images per state (front view + side view) */}
        <div className="relative rounded-[12px] bg-[#070b14]/90 border border-white/10 overflow-hidden p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Front View Card */}
            <div className="relative rounded-[8px] bg-white/[0.02] border border-white/5 p-6 flex flex-col items-center justify-between min-h-[300px] md:min-h-[360px]">
              <div className="relative w-full flex-1 flex items-center justify-center min-h-[220px]">
                {/* Collapsed Front View */}
                <img
                  src={cldImage("EXPANDABLE_COLLAPSED_FRONT_VIEW_ORTHO", 1000)}
                  alt="Saber-XA collapsed anterior front view"
                  className={`absolute max-w-full max-h-full object-contain transition-all duration-500 ease-in-out ${
                    !isExpanded
                      ? "opacity-100 scale-100 filter drop-shadow-[0_15px_30px_rgba(42,196,244,0.18)]"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                />
                {/* Expanded Front View */}
                <img
                  src={cldImage("EXPANDABLE_EXPANDED_FRONT_VIEW", 1000)}
                  alt="Saber-XA expanded anterior front view"
                  className={`absolute max-w-full max-h-full object-contain transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? "opacity-100 scale-100 filter drop-shadow-[0_15px_30px_rgba(42,196,244,0.28)]"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
              </div>
              <div className="mt-4 pt-3 w-full border-t border-white/5 flex items-center justify-between">
                <span className="font-heading font-semibold text-[14px] text-white/90">
                  Front View
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#2ac4f4]">
                  {isExpanded ? "Expanded" : "Collapsed"}
                </span>
              </div>
            </div>

            {/* Side View Card */}
            <div className="relative rounded-[8px] bg-white/[0.02] border border-white/5 p-6 flex flex-col items-center justify-between min-h-[300px] md:min-h-[360px]">
              <div className="relative w-full flex-1 flex items-center justify-center min-h-[220px]">
                {/* Collapsed Side View */}
                <img
                  src={cldImage("EXPANDABLE_SIDE_VIEW_COLLAPSED", 1000)}
                  alt="Saber-XA collapsed lateral side view"
                  className={`absolute max-w-full max-h-full object-contain transition-all duration-500 ease-in-out ${
                    !isExpanded
                      ? "opacity-100 scale-100 filter drop-shadow-[0_15px_30px_rgba(42,196,244,0.18)]"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                />
                {/* Expanded Side View */}
                <img
                  src={cldImage("EXPANDABLE_EXPANDED_SIDE_VIEW", 1000)}
                  alt="Saber-XA expanded lateral side view"
                  className={`absolute max-w-full max-h-full object-contain transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? "opacity-100 scale-100 filter drop-shadow-[0_15px_30px_rgba(42,196,244,0.28)]"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
              </div>
              <div className="mt-4 pt-3 w-full border-t border-white/5 flex items-center justify-between">
                <span className="font-heading font-semibold text-[14px] text-white/90">
                  Side View
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#2ac4f4]">
                  {isExpanded ? "Expanded" : "Collapsed"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isExpanded ? "bg-[#2ac4f4] animate-pulse" : "bg-white/40"}`} />
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/90">
                State: <strong className="text-[#2ac4f4]">{isExpanded ? "Expanded" : "Collapsed"}</strong>
              </span>
            </div>
            <p className="font-sans text-[12px] text-white/50">
              Front view and side view shown side by side in {isExpanded ? "expanded" : "collapsed"} state
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SizingSection() {
  const [activeFootprint, setActiveFootprint] = useState("26x34");

  return (
    <section className={`bg-white ${sectionPad} border-t border-black/[0.06]`}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading font-extrabold text-[#0a0e17] text-[32px] md:text-[44px] tracking-[0.18em] uppercase mb-4">
          SIZING
        </h2>

        {/* Footprint Selector Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-black/[0.08]">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-mono font-bold uppercase tracking-[0.18em] text-[12px] md:text-[13px] text-[#0891b2]">
              FOOTPRINTS
            </span>
            <span className="text-[#64748b] text-[14px] md:text-[15px]">
              Each footprint comes in three starting heights. Each one expands across its own range.
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {footprints.map((fp) => {
              const isSelected = activeFootprint === fp.id;
              return (
                <button
                  key={fp.id}
                  type="button"
                  onClick={() => setActiveFootprint(fp.id)}
                  className={`px-5 py-2.5 rounded-full font-heading text-[14px] md:text-[15px] font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "border-2 border-[#0284c7] text-[#0284c7] bg-[#0284c7]/5 shadow-sm"
                      : "border border-slate-300 text-slate-700 hover:border-slate-400 bg-white"
                  }`}
                >
                  {fp.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Range Chart */}
        <div className="mt-10 bg-white rounded-[12px] p-4 md:p-8">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-black/[0.06] font-mono text-[12px] uppercase tracking-wider text-[#64748b]">
            <div className="col-span-3 md:col-span-2"></div>
            <div className="col-span-4 md:col-span-5 flex justify-between items-center pr-2">
              <span className="font-bold text-[#0a0e17]">HEIGHT</span>
              <span className="font-semibold text-[#0284c7]">11-19mm</span>
            </div>
            <div className="col-span-5 md:col-span-5 flex justify-between items-center pr-2">
              <span className="font-bold text-[#0a0e17]">LORDOSIS</span>
              <span className="font-semibold text-[#0284c7]">6° - 25°</span>
            </div>
          </div>

          {/* Rows for Heights */}
          <div className="space-y-6">
            {sizingTiers.map((tier) => (
              <div key={tier.label} className="grid grid-cols-12 gap-4 items-center">
                {/* Row Label */}
                <div className="col-span-3 md:col-span-2">
                  <div className="font-heading font-bold text-[#0a0e17] text-[16px] md:text-[18px] leading-tight">
                    {tier.label}
                  </div>
                  <div className="font-sans text-[#64748b] text-[12px] md:text-[13px]">
                    {tier.sub}
                  </div>
                </div>

                {/* Height Track */}
                <div className="col-span-4 md:col-span-5">
                  <div className="bg-[#e2e8f0] h-9 md:h-10 rounded-full relative overflow-hidden flex items-center p-1">
                    <div
                      style={{ left: tier.heightLeft, width: tier.heightWidth }}
                      className={`absolute ${tier.barColor} h-7 md:h-8 rounded-full flex items-center justify-center text-white font-heading font-bold text-[12px] md:text-[13px] shadow-sm transition-all duration-500`}
                    >
                      {tier.heightText}
                    </div>
                  </div>
                </div>

                {/* Lordosis Track */}
                <div className="col-span-5 md:col-span-5">
                  <div className="bg-[#e2e8f0] h-9 md:h-10 rounded-full relative overflow-hidden flex items-center p-1">
                    <div
                      style={{ left: tier.lordosisLeft, width: tier.lordosisWidth }}
                      className={`absolute ${tier.barColor} h-7 md:h-8 rounded-full flex items-center justify-center text-white font-heading font-bold text-[12px] md:text-[13px] shadow-sm transition-all duration-500`}
                    >
                      {tier.lordosisText}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-[13px] text-[#64748b] mt-8">
            Bars run from collapsed to fully expanded.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function SaberXADetail() {
  usePageMeta(
    "Saber-XA™ Expandable ALIF System | Elevation Spine",
    "Saber-XA™ lets surgeons dial in height, lordosis or both through a single inserter."
  );

  return (
    <div className="bg-white font-sans">
      {/* 1. Hero */}
      <section className="atmos overflow-hidden text-white px-6 md:px-12 lg:px-16 pt-36 pb-20 md:pb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ProductLockup lockup={XA.lockup} descriptor={XA.descriptor} as="h1" size="lg" dark />

            {/* Feature card matching mockup */}
            <div className="mt-8 bg-black/40 border border-white/10 rounded-[10px] overflow-hidden divide-y divide-white/10 backdrop-blur-sm max-w-[560px]">
              {heroFeatures.map((f) => (
                <div key={f.title} className="p-4 md:py-3.5 md:px-5">
                  <h3 className="font-heading font-bold text-white text-[15px] md:text-[16px]">
                    {f.title}
                  </h3>
                  {f.desc && (
                    <p className="text-white/70 text-[13px] md:text-[14px] mt-0.5">
                      {f.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <PrimaryButton to={contactHref("xa")}>Request Information</PrimaryButton>
            </div>
          </div>

          <div className="relative bg-[#0f1520] border border-white/10 rounded-[10px] overflow-hidden p-6 md:p-10 aspect-[4/3] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img
              src={cldImage("NASS_HERO_IMAGES-02", 1600)}
              alt="Saber-XA™ expandable ALIF system render"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(42,196,244,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* 2. Expandable Interbody sequence */}
      <ExpandableInterbodyShowcase />

      {/* 3. Sizing Range Section */}
      <SizingSection />

      {/* 4. Photo row */}
      <section className={`bg-white ${sectionPad}`}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photoRow.map((p) => (
              <figure key={p.caption}>
                <div className="lift relative bg-[#0f1520] rounded-[8px] aspect-[16/10] overflow-hidden">
                  <img
                    src={cldImage(p.image, 900)}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="font-heading font-semibold text-[#0a0e17] text-[15px] mt-3">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Specifications: 3 cards */}
      <section className="bg-white px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specs.map((s) => (
              <div
                key={s.title}
                className="lift bg-white border border-black/[0.08] hover:border-[#2ac4f4]/40 rounded-[10px] overflow-hidden flex flex-col p-6 shadow-sm"
              >
                <div className="relative bg-[#f8fafc] rounded-[8px] aspect-[4/3] mb-5 flex items-center justify-center p-6">
                  <img
                    src={cldImage(s.image, 700)}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <h3 className="font-heading font-bold text-[#0a0e17] text-[19px] md:text-[20px] mb-2">
                  {s.title}
                </h3>
                {s.lines.map((l) => (
                  <p key={l} className="text-[#64748b] text-[14px] md:text-[15px] leading-relaxed">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Indications and Safety box */}
      <section className="bg-white px-6 md:px-12 lg:px-16 py-12 border-t border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto bg-[#f8fafc] border-l-4 border-l-[#0891b2] border border-black/[0.08] rounded-[6px] p-6 md:p-8 shadow-sm">
          <h3 className="font-mono font-bold uppercase tracking-[0.15em] text-[12px] md:text-[13px] text-[#0891b2] mb-4">
            INDICATIONS AND SAFETY
          </h3>
          <ul className="space-y-2.5 text-[#334155] text-[13px] md:text-[14px] leading-relaxed list-disc list-inside">
            <li>
              Indicated for intervertebral fusion in patients with degenerative disc disease at one or two contiguous levels, L1 to S1.
            </li>
            <li>
              All interbody constructs require FDA-cleared supplemental fixation.
            </li>
            <li>
              Refer to the Saber-XA IFU for full indications, contraindications, warnings and precautions.
            </li>
          </ul>
        </div>
      </section>

      {/* 8. Closing call to action */}
      <ClosingCta product="xa" />
    </div>
  );
}
