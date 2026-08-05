import Image from "next/image";

export default function Description(){
    return(
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16  mb-24">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute left-0 top-0 h-full w-full rounded-full bg-[#dfeff5]" />
            <div className="absolute left-5 top-7 h-[90%] w-[90%] rounded-full bg-[#64bfd9]" />
            <div className="absolute left-7 top-5 h-[90%] w-[90%] rounded-full bg-[#f4f4f4]" />
            <div className="relative overflow-hidden rounded-full border-8 border-white shadow-soft">
              <Image
                src="/background-home.jpg"
                alt="Clinic"
                width={700}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="px-8">
            <h2 className="font-display text-[38px] leading-tight text-[#1f2c3c] lg:text-[44px] ">
              We Care For
              <br />
              Your Dental Health
            </h2>
            <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-slate-500">
              We will probably instruct and teach the exceptionally imperative estimation of oral wellbeing and what every single patient can do to keep his or her teeth solid during their lifetime. We are committed to offering our patients great dentistry in a minding and delicate way.
            </p>
            <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-slate-500">
              Our best-in-class dental innovation, and in particular our proceeding with an expert training program for every one of the individuals from our dental group has a noteworthy influence in achieving that objective.
            </p>

            <button className="mt-8 rounded-[3px] bg-[#2ea3cc] px-8 py-3.5 text-[13px] font-semibold tracking-[0.12em] text-white shadow-md transition hover:bg-[#2496be]">
              READ MORE
            </button>
          </div>
        </div>
     
    )
}