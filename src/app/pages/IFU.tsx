import { useState } from "react";
import { Link } from "react-router";
import { FileText, Download, ExternalLink, ShieldCheck, Eye, Phone, Mail, ChevronRight, FileCheck2 } from "lucide-react";
import { AVIA, XA, usePageMeta, cldImage } from "../components/site.tsx";

interface IfuDoc {
  id: string;
  productTitle: string;
  systemName: string;
  docNumber: string;
  revision: string;
  clearedFor: string;
  description: string;
  fileUrl: string;
  originalFilename: string;
  fileSize: string;
  productHref: string;
  render: string;
}

const ifuDocuments: IfuDoc[] = [
  {
    id: "saber-c",
    productTitle: AVIA.lockup,
    systemName: AVIA.descriptor,
    docNumber: "LBL-SC0119",
    revision: "Rev. E",
    clearedFor: "Anterior Cervical Interbody Fusion (C2–T1)",
    description:
      "Official Instructions for Use including comprehensive indications, contraindications, warnings, precautions, compatibility, sterilization, and surgical application guidelines for the Saber-C® | AVIA™ ACDF Fixation System.",
    fileUrl: "/ifu/saber-c-avia-ifu.pdf",
    originalFilename: "LBL-SC0119 Rev. E Elevation Spine IFU.pdf",
    fileSize: "448 KB",
    productHref: AVIA.href,
    render: AVIA.render,
  },
  {
    id: "saber-xa",
    productTitle: XA.lockup,
    systemName: XA.descriptor,
    docNumber: "651-40001",
    revision: "Rev. A, Appendix A",
    clearedFor: "Expandable Anterior Lumbar Interbody Fusion (L1–S1)",
    description:
      "Official Instructions for Use covering complete indications, contraindications, warnings, precautions, height and lordosis expansion parameters, and supplemental fixation guidelines for the Saber-XA™ Expandable ALIF System.",
    fileUrl: "/ifu/saber-xa-ifu.pdf",
    originalFilename: "651-40001 Rev A, APPENDIX A - SABER-XA IFU.pdf",
    fileSize: "351 KB",
    productHref: XA.href,
    render: XA.render,
  },
];

export default function IFU() {
  usePageMeta(
    "Instructions for Use (eIFU) | Elevation Spine",
    "Access and download official Instructions for Use (IFU) for Elevation Spine's Saber-C® AVIA™ and Saber-XA™ spinal fusion systems."
  );

  const [activePreview, setActivePreview] = useState<string | null>(null);

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* 1. Header Banner */}
      <section className="atmos text-white pt-36 pb-20 px-6 md:px-12 lg:px-16 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#2ac4f4] font-mono text-[12px] uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            Electronic Instructions for Use (eIFU)
          </div>
          <h1 className="font-heading font-bold text-[36px] md:text-[54px] tracking-tight leading-[1.08] max-w-3xl">
            Instructions for Use
          </h1>
          <p className="font-sans text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mt-4">
            Official product labeling and Instructions for Use (IFU) documents for healthcare professionals. View online or download PDF documents below.
          </p>
        </div>
      </section>

      {/* 2. Document Cards */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto space-y-10">
          {ifuDocuments.map((doc) => (
            <div
              key={doc.id}
              id={doc.id}
              className="bg-white border border-black/[0.08] rounded-[12px] p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:border-[#2ac4f4]/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Product Thumbnail & Quick Info */}
                <div className="lg:col-span-4 flex flex-col">
                  <div className="relative bg-[#0f1520] rounded-[8px] aspect-[4/3] p-6 flex items-center justify-center overflow-hidden border border-black/[0.06] mb-4">
                    <img
                      src={cldImage(doc.render, 800)}
                      alt={doc.productTitle}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_20px_rgba(42,196,244,0.2)]"
                    />
                  </div>
                  <Link
                    to={doc.productHref}
                    className="inline-flex items-center gap-1.5 font-heading font-semibold text-[13px] text-[#0891b2] hover:text-[#0a0e17] transition-colors"
                  >
                    Explore {doc.productTitle} System Page <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Document Details & Actions */}
                <div className="lg:col-span-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0891b2]/10 text-[#0891b2]">
                        {doc.docNumber}
                      </span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                        {doc.revision}
                      </span>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-600 flex items-center gap-1 ml-auto">
                        <FileCheck2 className="w-3.5 h-3.5" /> Current Active
                      </span>
                    </div>

                    <h2 className="font-heading font-bold text-[#0a0e17] text-[26px] md:text-[32px] tracking-tight mt-2">
                      {doc.productTitle}
                    </h2>
                    <p className="font-mono font-semibold uppercase tracking-[0.16em] text-[12px] text-[#0891b2] mb-4">
                      {doc.systemName}
                    </p>

                    <p className="text-[#4a5568] text-[14px] md:text-[15px] leading-relaxed mb-6">
                      {doc.description}
                    </p>

                    <div className="bg-[#f8fafc] rounded-[8px] p-4 border border-black/[0.05] grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] mb-6">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748b] block">
                          Indication Summary
                        </span>
                        <strong className="text-[#1a2535] font-medium">{doc.clearedFor}</strong>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748b] block">
                          Document Format / Size
                        </span>
                        <strong className="text-[#1a2535] font-medium">PDF ({doc.fileSize})</strong>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/[0.06]">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-lift inline-flex items-center gap-2 bg-[#2ac4f4] hover:bg-[#6ecff4] text-[#0a0e17] font-heading font-bold text-[14px] px-6 py-3 rounded-[4px] shadow-[0_4px_16px_rgba(42,196,244,0.3)] transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      View Document (PDF)
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                    </a>

                    <a
                      href={doc.fileUrl}
                      download={doc.originalFilename}
                      className="btn-lift inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-slate-400 text-[#0a0e17] font-heading font-bold text-[14px] px-6 py-3 rounded-[4px] shadow-sm transition-all"
                    >
                      <Download className="w-4 h-4 text-[#0891b2]" />
                      Download PDF
                    </a>

                    <button
                      type="button"
                      onClick={() => setActivePreview(activePreview === doc.id ? null : doc.id)}
                      className="inline-flex items-center gap-1.5 text-[#0891b2] hover:text-[#0a0e17] font-heading font-semibold text-[13px] px-3 py-2 cursor-pointer transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      {activePreview === doc.id ? "Hide Preview" : "Inline Preview"}
                    </button>
                  </div>

                  {/* Inline PDF Preview Frame */}
                  {activePreview === doc.id && (
                    <div className="mt-6 pt-6 border-t border-black/[0.06]">
                      <div className="relative w-full h-[600px] rounded-[8px] overflow-hidden border border-black/10 bg-slate-900 shadow-inner">
                        <iframe
                          src={`${doc.fileUrl}#view=FitH`}
                          title={`${doc.productTitle} IFU Preview`}
                          className="w-full h-full border-none"
                        />
                      </div>
                      <p className="font-mono text-[11px] text-[#64748b] mt-2 text-right">
                        Showing PDF preview: {doc.originalFilename}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Paper Copy Request Notice (FDA Compliance) */}
      <section className="bg-white border-t border-black/[0.06] px-6 md:px-12 lg:px-16 py-14">
        <div className="max-w-[1200px] mx-auto bg-[#f8fafc] border-l-4 border-l-[#0891b2] border border-black/[0.08] rounded-[8px] p-6 sm:p-8 md:p-10 shadow-sm">
          <h3 className="font-heading font-bold text-[#0a0e17] text-[20px] md:text-[22px] mb-3">
            Paper Copy Request Notice
          </h3>
          <p className="font-sans text-[#334155] text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-3xl">
            In compliance with FDA electronic labeling regulations, healthcare professionals within the United States may request a free printed paper copy of any Instruction for Use (IFU) document. Paper copies will be dispatched within seven (7) calendar days of request at no charge.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-[14px]">
            <a
              href="mailto:info@elevationspine.com?subject=IFU%20Paper%20Copy%20Request"
              className="inline-flex items-center gap-2 font-heading font-semibold text-[#0891b2] hover:text-[#0a0e17] transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@elevationspine.com
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-2 text-[#4a5568]">
              <Phone className="w-4 h-4 text-[#0891b2]" />
              (800) 807-6010
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
