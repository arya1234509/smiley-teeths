"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

interface Props {
  before: string;
  after: string;
  title: string;
  Icon: IconType;
}

export default function BeforeAfterCard({
  before,
  after,
  title,
  Icon,
}: Props) {

  const mounted = useMounted();

if (!mounted) {
  return (
    <p>Loading...</p>
  );
}


  return (
    <article className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,.06)]">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
   
          <ReactCompareSlider
       
            changePositionOnHover={false}
            onlyHandleDraggable={false}
          
            itemOne={
              <div className="relative h-full w-full">
                <ReactCompareSliderImage
                  src={before}
                  alt={`${title} Before`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-slate-700 shadow">
                  Before
                </div>
              </div>
            }
            itemTwo={
              <div className="relative h-full w-full">
                <ReactCompareSliderImage
                  src={after}
                  alt={`${title} After`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-slate-700 shadow">
                  After
                </div>
              </div>
            }
          />
        
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 border-t border-slate-100 px-5 py-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="text-lg text-blue-600" />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Drag to compare treatment results.
          </p>
        </div>
      </div>
    </article>
  );
}

import { useSyncExternalStore } from "react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}