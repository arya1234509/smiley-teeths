import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  // "/background-home.jpg",
  "/images/owner-headshot.png",
  "/images/owner.jpg",
];


export default function Description() {
const [current, setCurrent] = useState(0);

  useEffect(() => {
  const id = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3500);

  return () => clearInterval(id);
}, []);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 py-10">
      <div className="relative mx-auto w-full max-w-[520px]">
       

       <div className="relative overflow-hidden rounded-4xl border-8 border-white shadow-soft">
  {images.map((image, index) => (
    <Image
      key={image}
      src={image}
      alt="Global Dental Clinic"
      width={700}
      height={700}
      priority={index === 0}
      className={`absolute  h-full w-full object-cover transition-opacity ease-in-out duration-900 ${
        current === index ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}

  {/* Keeps the container height */}
  <div className="aspect-4/3" />
</div>

      </div>

      <div className="px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2ea3cc]">
          About Our Clinic
        </span>

        <h2 className="mt-4 font-display text-[38px] leading-tight text-[#1f2c3c] lg:text-[44px]">
          Welcome to <br />
          <span className="text-blue-400 uppercase">Global Dental</span>
        </h2>

        <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-slate-600">
          At <strong>Global Dental</strong>, your smile is our highest
          priority. Our experienced team is dedicated to helping you achieve
          and maintain a healthy, confident smile through personalized dental
          care tailored to your needs.
        </p>

        <p className="mt-5 max-w-[520px] text-[15px] leading-8 text-slate-600">
          Every dental procedure at our clinic is performed with a gentle,
          pain-free approach using modern technology and advanced treatment
          techniques to ensure your comfort throughout every visit.
        </p>

        <p className="mt-5 max-w-[520px] text-[15px] leading-8 text-slate-600">
          We are committed to providing comprehensive dental care in a safe,
          welcoming environment while following strict sterilization, safety,
          and infection control protocols for your complete peace of mind.
        </p>

        <button className="my-8 rounded-[3px] cursor-pointer  bg-[#2ea3cc] px-8 py-3.5 text-[13px] font-semibold tracking-[0.12em] text-white shadow-md transition hover:bg-[#2496be]">
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
}
