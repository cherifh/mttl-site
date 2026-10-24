type ShippingRouteProps = {
  className?: string;
};

const PORTS: Array<[number, number]> = [
  [160, 460],
  [520, 430],
  [900, 320],
  [1140, 180],
];

const ROUTE_PATH =
  "M 160 460 C 320 500, 420 420, 520 430 S 760 380, 900 320 S 1080 220, 1140 180";

/**
 * Animated shipping-lane motif: a dashed route from Conakry out to open
 * water, with pulsing port markers and a small vessel that travels the
 * lane on a loop.
 */
export default function ShippingRoute({ className = "" }: ShippingRouteProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d={ROUTE_PATH}
        stroke="#2DD4BF"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeDasharray="3 10"
        fill="none"
        className="animate-dash-flow"
      />
      <path
        d="M -40 160 C 180 120, 360 220, 560 170 S 900 90, 1260 140"
        stroke="#FF7A59"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeDasharray="2 9"
        fill="none"
        className="animate-dash-flow"
        style={{ animationDirection: "reverse", animationDuration: "9s" }}
      />

      {PORTS.map(([cx, cy], i) => (
        <g key={`${cx}-${cy}`}>
          <circle
            cx={cx}
            cy={cy}
            r={4}
            fill={i === 0 ? "#FF7A59" : "#2DD4BF"}
          />
          <circle
            cx={cx}
            cy={cy}
            r={4}
            fill="none"
            stroke={i === 0 ? "#FF7A59" : "#2DD4BF"}
            strokeWidth="1.5"
            className="animate-ping-slow"
            style={{ transformOrigin: `${cx}px ${cy}px`, animationDelay: `${i * 0.6}s` }}
          />
        </g>
      ))}

      {/* Vessel travelling the main lane on a loop */}
      <g>
        <circle r="5" fill="#F7F5F0" fillOpacity="0.95">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path={ROUTE_PATH}
            rotate="auto"
          />
        </circle>
      </g>
    </svg>
  );
}
