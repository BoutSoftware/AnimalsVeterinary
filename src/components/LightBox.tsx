"use client";

import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export default function LightBox({ galleryImage }: { galleryImage: GalleryImage }) {
  const [showing, setShowing] = useState(false);

  const handleClose = () => {
    setShowing(false);
  };

  if (!showing)
    return (
      <button
        key={galleryImage.src}
        type="button"
        onClick={() => setShowing(true)}
        className="group overflow-hidden rounded-3xl border border-blue-200 bg-white text-left shadow-sm transition hover:-tranblue-y-1 hover:shadow-xl"
      >
        <img
          src={galleryImage.src}
          alt={galleryImage.alt}
          // fill
          loading="lazy"
          className="object-cover aspect-video transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="flex items-center justify-between gap-3 p-4">
          <div>
            <p className="text-sm font-semibold text-blue-950">{galleryImage.label}</p>
            <p className="text-sm text-blue-500">Toca para ampliar</p>
          </div>
          <span className="material-symbols-outlined text-[20px] text-red-600">open_in_full</span>
        </div>
      </button>
    );

  if (showing)
    return (
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-60 flex items-center justify-center bg-blue-950/90 px-4 py-6 backdrop-blur-sm"
        onClick={handleClose}
      >
        <div className="relative w-full max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-950/80 text-white transition hover:bg-blue-950"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
          <div className="relative aspect-16/10 w-full bg-blue-100">
            <img src={galleryImage.src} alt={galleryImage.alt} sizes="100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <p className="text-sm font-semibold text-blue-950">{galleryImage.label}</p>
          </div>
        </div>
      </div>
    )
}
