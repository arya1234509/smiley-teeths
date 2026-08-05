import { FaChevronRight } from "react-icons/fa";

export default function InfoCard({
  title,
  subtitle,
  value,
  icon,
  center = false,
}: {
  title: string;
  subtitle: string;
  value: string;
  icon: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className="flex items-stretch bg-white/8 px-6 py-6 text-white backdrop-blur-[2px]">
      <div className="flex-1">
        <h3 className="font-display text-[22px] leading-[1.05]">{title}</h3>
        <p className="mt-4 text-[11px] tracking-[0.18em] text-white/80">
          {subtitle}
        </p>
        {value ? (
          <div className="mt-2 text-[18px] font-semibold">{value}</div>
        ) : (
          <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-white/85">
            <span className="rounded-full bg-white/15 p-2">
              <FaChevronRight size={15} />
            </span>
            Book now
          </div>
        )}
      </div>
      <div className="flex w-10 items-start justify-end pt-1 text-white/70">
        {icon}
      </div>
    </div>
  );
}