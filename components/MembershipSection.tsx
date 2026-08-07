import Image from "next/image";
import { FaCheckCircle, FaUsers } from "react-icons/fa";

export default function MembershipSection() {
  const benefits = [
    "2 Regular Cleanings Per Year",
    "X-rays & Exams",
    "15% Off All Treatments",
    "No Insurance? No Problem!",
  ];

  const perks = [
    "No annual maximums",
    "No waiting periods",
    "Cancel anytime",
    "Immediate benefits",
  ];

  return (
    <section className="bg-[#f7f9fd] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid overflow-hidden rounded-[28px] bg-white shadow-xl lg:grid-cols-[0.95fr_1.4fr]">
          {/* Left */}
          <div className="flex flex-col justify-center p-10 lg:p-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3b82f6]">
              Join & Save
            </span>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900">
              Smile Membership
              <br />
              Plan
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-500">
              Affordable dental care made easy. Enjoy exclusive benefits with
              our in-house membership plan designed for individuals and
              families.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#2563eb]" />
                  <span className="text-[15px] text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 cursor-pointer w-fit rounded-xl bg-[#2563eb] px-7 py-3 font-semibold text-white transition hover:bg-[#1d4ed8]">
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center bg-[#f8fbff] p-6">
            <div className="grid w-full gap-6 md:grid-cols-[260px_1fr]">
              {/* Pricing Card */}
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Only
                </span>

                <div className="mt-2 flex items-start">
                  <span className="text-5xl font-bold text-slate-900">₹119</span>
                  <span className="mt-4 ml-2 text-slate-500">/month</span>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  Individual Plan
                </p>

                <ul className="mt-8 space-y-4">
                  {perks.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#2563eb]" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex justify-center">
                  <div className="rounded-full bg-blue-50 p-5 text-[#2563eb]">
                    <FaUsers size={34} />
                  </div>
                </div>
              </div>

              {/* Family Image */}
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/chair.png"
                  alt="Family smiling"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
