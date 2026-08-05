"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Description from "../components/Description";
import InfoCard from "../components/InfoCard";
import Socials from "../components/Socials";
import Image from "next/image";
import Link from "next/link";
import { FaTooth, FaChevronDown, FaBars } from "react-icons/fa";

const nav = ["HOME", "SERVICES", "DOCTORS", "BLOG", "SHOP", "PAGES"];

export default function Home() {
  const landingRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);


useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Background
    tl.from(bgRef.current, {
      opacity: 0,
      scale: 1.08,
      duration: 1,
      ease: "power2.out",
    });

    // Navbar container
 tl.fromTo(
  navRef.current,
  {
    autoAlpha: 0,
    y: -18,
    scale: 0.985,
    filter: "blur(6px)",
  },
  {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.95,
    ease: "power2.out",
    clearProps: "filter",
  },
  "-=0.7"
);

    // Navbar links stagger
tl.fromTo(
  navLinksRef.current?.children,
  {
    autoAlpha: 0,
    y: 14,
    filter: "blur(8px)",
  },
  {
    autoAlpha: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.85,
    ease: "power2.out",
    stagger: {
      each: 0.12,
      from: "start",
      ease: "power2.inOut",
    },
    clearProps: "filter",
  },
  "-=0.6"
);

    // Hero text
   tl.fromTo(
  heroRef.current?.children,
  {
    autoAlpha: 0,
    y: 24,
    filter: "blur(8px)",
  },
  {
    autoAlpha: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power2.out",
    stagger: {
      each: 0.14,
      from: "start",
      ease: "power1.inOut",
    },
    clearProps: "filter",
  },
  "-=0.25"
);



  }, landingRef);

  return () => ctx.revert();
}, []);

return (
    <div
      ref={landingRef}
      className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-transparent"
    >
      <div ref={bgRef} className="fixed inset-0 -z-10">
        <Image
          src="/background-home.jpg"
          alt="background-home"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(290deg,#0000000A_0%,#000000_100%)] opacity-90" />
      </div>

      <div ref={navRef} className="absolute top-0 left-0 right-0 z-10">
        <Socials />
        <header className="border-b-gray-100/10 border-b w-full">
          <div className="mx-auto flex max-w-[1200px] gap-26 items-center justify-between px-5 py-5 text-white">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="TruSmile Home"
            >
              <FaTooth className="text-xl text-white" />

              <span className="text-3xl font-semibold tracking-[0.12em] leading-none">
                TRU<span className="text-[#56b5da]">SMILE</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={navLinksRef}
              className="hidden items-center gap-8 lg:flex"
              aria-label="Main navigation"
            >
              {nav.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className="group flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] transition hover:text-[#56b5da]"
                >
                  {item}

                  {index < nav.length - 1 && (
                    <FaChevronDown
                      size={8}
                      className="opacity-60 transition group-hover:text-[#56b5da]"
                    />
                  )}
                </Link>
              ))}

              <Link
                href="#schedule"
                className="rounded-sm   bg-white px-5 py-3 text-[12px] font-semibold tracking-[0.18em] text-slate-900 shadow-md transition hover:bg-[#56b5da] hover:text-white"
              >
                VIEW SCHEDULE
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-md p-2 lg:hidden"
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </header>
      </div>

      {/* Hero content */}
      <div
        ref={heroRef}
        className="relative z-10 flex min-h-screen w-full items-center"
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10 lg:px-20">
          <div className="text-left  md:mt-0">
            <p className="text-sm font-light  uppercase tracking-[0.25em] text-white/80 md:text-base">
              Dental Care For
            </p>

            <h1 className="mt-3 text-4xl  font-light leading-[1.05] tracking-wide text-white md:text-7xl 2xl:text-8xl">
              YOUR <span className="font-semibold">NEW</span> <br />
              <span className="text-[#56b5da] font-semibold">SMILE</span>
            </h1>
          </div>
        </div>
      </div>

      {/* info card */}
      <div className="bottom-0  grid gap-px overflow-hidden rounded-sm shadow-soft backdrop-blur-sm lg:grid-cols-3">
        <InfoCard
          title="Working Hours"
          subtitle="MON - SAT"
          value="9am - 8pm"
          icon={<FaTooth size={22} />}
        />
        <InfoCard
          title="Book an Appointment"
          subtitle="Schedule your visit"
          value=""
          icon={<FaTooth size={22} />}
          center
        />
        <InfoCard
          title="Emergency Service"
          subtitle="EMERGENCY LINE 24/7"
          value="1-990-888-777"
          icon={<FaTooth size={22} />}
        />
      </div>

      <section className="mt-24 relative z-40 min-h-screen bg-white pt-40 w-full">
        <Description />
      </section>
    </div>
  );
}
