export default function MachineGraphic({
  accent = "#c8481f",
  tone = "dark",
  className,
}: {
  accent?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const bodyFill = tone === "dark" ? "#2b2620" : "#e9e6de";
  const bladeXs = [48, 61, 74, 87, 100, 113, 126, 139, 152];

  return (
    <svg viewBox="0 0 200 160" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="70" width="160" height="14" rx="3" fill="#9aa3aa" />
      <rect x="35" y="35" width="130" height="42" rx="4" fill={bodyFill} stroke={accent} strokeWidth="1.5" />
      <g stroke={accent} strokeWidth="2">
        {bladeXs.map((x) => (
          <line key={x} x1={x} y1="42" x2={x} y2="70" />
        ))}
      </g>
      <rect x="140" y="40" width="24" height="30" rx="3" fill="none" stroke="#9aa3aa" strokeWidth="1.5" />
      <circle cx="152" cy="55" r="6" fill={accent} />
      <rect x="24" y="86" width="8" height="10" fill="#6b737a" />
      <rect x="168" y="86" width="8" height="10" fill="#6b737a" />
    </svg>
  );
}
