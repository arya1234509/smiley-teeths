import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import BeforeAfterCard from "./ui/BeforeAfterCard";
import { FaTooth } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { GiTooth } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "Teeth Whitening",
    before: "/images/before/b1.jpg",
    after: "/images/after/a1.jpg",
    Icon: FaTooth,
  },
  {
    title: "Dental Implants",
    before: "/images/before/b2.jpg",
    after: "/images/after/a2.jpg",
    Icon: MdMedicalServices,
  },
  {
    title: "Orthodontic Treatment",
    before: "/images/before/b3.jpg",
    after: "/images/after/a3.jpg",
    Icon: GiTooth,
  },
  {
    title: "Teeth Whitening",
    before: "/images/before/b1.jpg",
    after: "/images/after/a1.jpg",
    Icon: FaTooth,
  },
  {
    title: "Dental Implants",
    before: "/images/before/b2.jpg",
    after: "/images/after/a2.jpg",
    Icon: MdMedicalServices,
  },
  {
    title: "Orthodontic Treatment",
    before: "/images/before/b3.jpg",
    after: "/images/after/a3.jpg",
    Icon: GiTooth,
  },
  {
    title: "Teeth Whitening",
    before: "/images/before/b1.jpg",
    after: "/images/after/a1.jpg",
    Icon: FaTooth,
  },
  {
    title: "Dental Implants",
    before: "/images/before/b2.jpg",
    after: "/images/after/a2.jpg",
    Icon: MdMedicalServices,
  },
  {
    title: "Orthodontic Treatment",
    before: "/images/before/b3.jpg",
    after: "/images/after/a3.jpg",
    Icon: GiTooth,
  },
  {
    title: "Teeth Whitening",
    before: "/images/before/b1.jpg",
    after: "/images/after/a1.jpg",
    Icon: FaTooth,
  },
  {
    title: "Dental Implants",
    before: "/images/before/b2.jpg",
    after: "/images/after/a2.jpg",
    Icon: MdMedicalServices,
  },
  {
    title: "Orthodontic Treatment",
    before: "/images/before/b3.jpg",
    after: "/images/after/a3.jpg",
    Icon: GiTooth,
  },
  // Add more items here...
];

export default function SmileTransformations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.firstElementChild as HTMLElement;

    if (!card) return;

    const gap = 32;
    const amount = card.offsetWidth + gap;

    container.scrollTo({
      left: index * amount,
      behavior: "smooth",
    });
  };

  // Keep active dot in sync with scrolling
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const card = container.firstElementChild as HTMLElement;

      if (!card) return;

      const gap = 32;
      const amount = card.offsetWidth + gap;

      setActiveIndex(Math.round(container.scrollLeft / amount));
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-play
  useEffect(() => {
    if (isInteracting) return;

    const id = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const card = container.firstElementChild as HTMLElement;

      if (!card) return;

      const gap = 32;
      const amount = card.offsetWidth + gap;

      const next =
        activeIndex >= data.length - 1 ? 0 : activeIndex + 1;

      container.scrollTo({
        left: next * amount,
        behavior: "smooth",
      });

      setActiveIndex(next);
    }, 2500);

    return () => clearInterval(id);
  }, [activeIndex, isInteracting]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#F6F7FD] to-white py-10">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative  max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Real Patient Stories
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl text-black">
              Smile <span className="text-blue-600">Transformations</span>
            </h2>

            <p className="mt-5 text-lg text-black">
              Every smile tells a story. Explore our real patient results.
            </p>
          </div>

       <button
  className="
  cursor-pointer
    inline-flex
    items-center
    gap-2
    justify-center
    rounded-full
    border
    border-blue-200
    bg-gradient-to-r
    from-blue-50
    to-cyan-50
    px-7
    py-3
    text-sm
    font-semibold
    text-blue-700
    shadow-sm
    transition-all
    duration-300
    hover:border-blue-300
    hover:from-blue-600
    hover:to-cyan-500
    hover:text-white
    hover:shadow-lg
  "
>
  View All Cases
  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
</button>

        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() =>
              setTimeout(() => setIsInteracting(false), 1500)
            }
            onPointerDown={() => setIsInteracting(true)}
            onPointerUp={() =>
              setTimeout(() => setIsInteracting(false), 1500)
            }
            className="
              flex
              gap-8
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              pb-4
              px-2
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="
                  w-[90%]
                  shrink-0
                  snap-start
                  sm:w-[430px]
                  lg:w-[410px]
                "
              >
                <BeforeAfterCard {...item} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-10 flex justify-center gap-3">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "h-2.5 w-8 bg-blue-600"
                    : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
