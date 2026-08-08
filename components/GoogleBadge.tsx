"use client";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
interface GooglePatientsBadgeProps {
  googleReviewsUrl: string;
  avatars?: string[];
  count?: string;
  label?: string;
}
const defaultAvatars = [
  "/images/after/a2-v2.png",
  "/images/after/a2-v2.png",
  "/images/after/a3.jpg",
  "/images/after/a4.jpg",
];
export default function GooglePatientsBadge({
  googleReviewsUrl,
  avatars = defaultAvatars,
  count = "2.5K+",
  label = "Happy Patients",
}: GooglePatientsBadgeProps) {
  return (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${count} ${label} - View Google Reviews`}
      className=" group relative inline-flex items-center gap-[8px] cursor-pointer select-none  mt-6"
    >
      {" "}
      {/* Patient avatars */}{" "}
      <div className="flex items-center">
        {" "}
        {avatars.slice(0, 4).map((avatar, index) => (
          <div
            key={avatar + index}
            className=" relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full border-[2px] border-white bg-gray-200 shadow-[0_1px_4px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5 "
            style={{ marginLeft: index === 0 ? 0 : "-9px", zIndex: 10 - index }}
          >
            {" "}
            <Image
              src={avatar}
              alt=""
              fill
              sizes="38px"
              className="object-cover"
            />{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Text */}{" "}
      <div className="flex flex-col justify-center">
        {" "}
        <div className=" whitespace-nowrap text-[21px] font-semibold leading-[0.95] tracking-[-0.8px] text-white ">
          {" "}
          {count}{" "}
        </div>{" "}
        <div className=" mt-[3px] whitespace-nowrap text-[11px] font-medium leading-none tracking-[-0.2px] text-white/95 ">
          {" "}
          {label}{" "}
        </div>{" "}
      </div>{" "}
      <FaGoogle
        className=" absolute -right-[4px] -top-[4px] h-[8px] w-[8px] opacity-0 transition-opacity duration-300 group-hover:opacity-70 "
        aria-hidden="true"
      />{" "}
    </a>
  );
}
