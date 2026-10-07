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

const overviewCards = [
  {
    num: "01",
    title: "Independent expansion",
    body: "Height, lordosis, or both at once, in situ, through one inserter with three color-coded drivers. The interbody self-locks when expanded.",
  },
  {
    num: "02",
    title: "Spike or screw fixation",
    body: "In-line spikes (5.0 mm) or screws (Ø5.0 and 5.5 mm), with straight and angled instruments.",
  },
  {
    num: "03",
    title: "Zero-profile plate",
    body: "Anterior lumbar plate in 34, 37 and 40 mm widths. It can also be placed alone as supplemental fixation.",
  },
  {
    num: "04",
    title: "3D-printed endplates",
    body: "Additively manufactured titanium with a 9 µm roughened surface and vertical cavities for graft.",
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

const sizingData = [
  { footprint: "34W x 26D mm", height: "11–14 mm", lordosis: "6°–13°", plate: "34W x 11H mm", color: "text-[#0284c7]" },
  { footprint: "34W x 26D mm", height: "13–16 mm", lordosis: "12°–19°", plate: "34W x 13H mm", color: "text-[#0284c7]" },
  { footprint: "34W x 26D mm", height: "16–19 mm", lordosis: "18°–25°", plate: "34W x 16H mm", color: "text-[#0284c7]" },
  { footprint: "37W x 28D mm", height: "11–14 mm", lordosis: "6°–13°", plate: "37W x 11H mm", color: "text-[#d97706]" },
  { footprint: "37W x 28D mm", height: "13–16 mm", lordosis: "12°–19°", plate: "37W x 13H mm", color: "text-[#d97706]" },
  { footprint: "37W x 28D mm", height: "16–19 mm", lordosis: "18°–25°", plate: "37W x 16H mm", color: "text-[#d97706]" },
  { footprint: "40W x 30D mm", height: "11–14 mm", lordosis: "6°–13°", plate: "40W x 11H mm", color: "text-[#9333ea]" },
  { footprint: "40W x 30D mm", height: "13–16 mm", lordosis: "12°–19°", plate: "40W x 13H mm", color: "text-[#9333ea]" },
  { footprint: "40W x 30D mm", height: "16–19 mm", lordosis: "18°–25°", plate: "40W x 16H mm", color: "text-[#9333ea]" },
];

const specs = [
  {
    title: "Anterior Lumbar Plate",
    image: "SaberXA-Images-Oct2026-09",
    lines: ["Footprints: 34, 37, 40 mm"],
  },
  {
    title: "Spikes",
    image: "SaberXA-Images-Oct2026-10",
    lines: ["Diameter: 5.0 mm", "Lengths: 20, 22.5, 25 mm"],
  },
  {
    title: "Screws",
    image: "SaberXA-Images-Oct2026-11",
    lines: ["Diameters: 5.0 and 5.5 mm", "Lengths: 20–35 mm, 2.5 mm increments"],
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
              className={`px-4 py-2 rounded-[4px] font-heading text-[13px] font-semibold transition-all cursor-pointer ${
                !isExpanded ? "bg-[#2ac4f4] text-[#0a0e17] shadow-sm" : "text-white/70 hover:text-white"
              }`}
            >
              Collapsed
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className={`px-4 py-2 rounded-[4px] font-heading text-[13px] font-semibold transition-all cursor-pointer ${
                isExpanded ? "bg-[#2ac4f4] text-[#0a0e17] shadow-sm" : "text-white/70 hover:text-white"
              }`}
            >
              Expanded
            </button>
          </div>
        </div>

        {/* Visual showcase */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[10px] bg-[#070b14]/90 border border-white/10 overflow-hidden flex items-center justify-center p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="relative w-full max-w-[700px] h-full flex items-center justify-center">
            {/* Collapsed Image */}
            <img
              src={cldImage("SaberXA-Images-Oct2026-02", 1400)}
              alt="Saber-XA collapsed interbody"
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                !isExpanded ? "opacity-100 scale-100 filter drop-shadow-[0_15px_30px_rgba(42,196,244,0.15)]" : "opacity-0 scale-95 pointer-events-none"
              }`}
            />
            {/* Expanded Image */}
            <img
              src={cldImage("SaberXA-Images-Oct2026-03", 1400)}
              alt="Saber-XA expanded interbody"
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                isExpanded ? "opacity-100 scale-100 filter drop-shadow-[0_15px_30px_rgba(42,196,244,0.25)]" : "opacity-0 scale-105 pointer-events-none"
              }`}
            />
          </div>

          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-[4px] border border-white/10">
            <span className={`w-2 h-2 rounded-full ${isExpanded ? "bg-[#2ac4f4] animate-pulse" : "bg-white/40"}`} />
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/90">
              State: <strong className="text-[#2ac4f4]">{isExpanded ? "Expanded" : "Collapsed"}</strong>
            </span>
          </div>
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
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed mt-6 max-w-[560px]">
              Saber-XA lets surgeons dial in height, lordosis or both through a single inserter.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <PrimaryButton to={contactHref("xa")}>Request Information</PrimaryButton>
            </div>
          </div>
          <div className="relative bg-[#0f1520] border border-white/10 rounded-[10px] overflow-hidden p-6 aspect-[4/3] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img
              src={cldImage("SaberXA-Images-Oct2026-01", 1600)}
              alt="Saber-XA™ interbody with spikes"
              className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(42,196,244,0.2)]"
            />
          </div>
        </div>
      </section>

      {/* 2. Expandable Interbody sequence */}
      <ExpandableInterbodyShowcase />

      {/* 3. System Overview: 4 numbered cards */}
      <section className={`bg-white ${sectionPad}`}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-heading font-bold text-[#0a0e17] text-[30px] md:text-[40px] tracking-tight mb-10">
            System Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewCards.map((c) => (
              <div
                key={c.num}
                className="bg-[#f8fafc] border-t-2 border-t-[#0891b2] border-x border-b border-black/[0.06] rounded-[8px] p-6 md:p-8 flex flex-col shadow-sm"
              >
                <span className="font-heading font-bold text-[28px] md:text-[32px] text-[#0891b2] tracking-tight mb-3">
                  {c.num}
                </span>
                <h3 className="font-heading font-bold text-[#0a0e17] text-[18px] mb-3">
                  {c.title}
                </h3>
                <p className="font-sans text-[#4a5568] text-[14px] md:text-[15px] leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          {/* Photo row under the cards (3 photos: X3, X4, X5) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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

      {/* 4. Sizing Table */}
      <section className={`bg-[#f8fafc] ${sectionPad} border-t border-black/[0.06]`}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading font-bold text-[#0a0e17] text-[26px] md:text-[34px] tracking-tight mb-8">
            Nine sizes cover 11 to 19 mm heights and 6° to 25° lordosis
          </h2>
          <div className="bg-white border border-black/[0.08] rounded-[8px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/[0.08] bg-[#f1f5f9]">
                    <th className="py-4 px-6 font-mono font-semibold text-[12px] uppercase tracking-wider text-[#0891b2]">
                      Footprint
                    </th>
                    <th className="py-4 px-6 font-mono font-semibold text-[12px] uppercase tracking-wider text-[#0891b2]">
                      Height
                    </th>
                    <th className="py-4 px-6 font-mono font-semibold text-[12px] uppercase tracking-wider text-[#0891b2]">
                      Lordosis
                    </th>
                    <th className="py-4 px-6 font-mono font-semibold text-[12px] uppercase tracking-wider text-[#0891b2]">
                      Plate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.05] font-sans text-[14px] md:text-[15px]">
                  {sizingData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#2ac4f4]/[0.03] transition-colors">
                      <td className={`py-3.5 px-6 font-heading font-bold ${row.color}`}>
                        {row.footprint}
                      </td>
                      <td className="py-3.5 px-6 text-[#1a2535]">
                        {row.height}
                      </td>
                      <td className="py-3.5 px-6 text-[#1a2535]">
                        {row.lordosis}
                      </td>
                      <td className="py-3.5 px-6 text-[#475569]">
                        {row.plate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Specifications: 3 cards */}
      <section className={`bg-white ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading font-bold text-[#0a0e17] text-[30px] md:text-[40px] tracking-tight mb-10">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specs.map((s) => (
              <div
                key={s.title}
                className="lift bg-white border border-black/[0.08] hover:border-[#2ac4f4]/40 rounded-[8px] overflow-hidden flex flex-col shadow-sm"
              >
                <div className="relative bg-[#0f1520] aspect-[4/3] p-4 flex items-center justify-center">
                  <img
                    src={cldImage(s.image, 700)}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-[#0a0e17] text-[18px] mb-2">{s.title}</h3>
                  {s.lines.map((l) => (
                    <p key={l} className="text-[#4a5568] text-[14px] leading-relaxed">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Indications and Safety box */}
      <section className="bg-[#f8fafc] px-6 md:px-12 lg:px-16 py-12 border-t border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto bg-white border-l-4 border-l-[#0891b2] border border-black/[0.08] rounded-[6px] p-6 md:p-8 shadow-sm">
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

      {/* 7. Closing call to action */}
      <ClosingCta product="xa" />
    </div>
  );
}
