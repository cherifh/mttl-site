type PortBadgeProps = {
  className?: string;
};

/**
 * Modern replacement for the old wax-stamp motif: a radar-style emblem
 * that reads as "cleared / tracked", built from a slow-spinning dashed
 * ring, a pulsing halo, and an anchor mark — gradient-tinted to match
 * the Port Horizon palette.
 */
export default function PortBadge({ className = "" }: PortBadgeProps) {
  return (
    // Positioning/animation utilities passed in via `className` (e.g.
    // "absolute right-6 top-10") live on this outer element; the inner
    // element below owns its own fixed "relative" containing block so
    // the two never collide in the cascade.
    <div className={className} aria-hidden="true">
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full border border-mint/50 animate-ping-slow" />
        <div
          className="absolute inset-2 rounded-full border border-dashed border-mustard/60 animate-spin"
          style={{ animationDuration: "18s" }}
        />
        <div className="absolute inset-4 rounded-full glass shadow-glow" />
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            <linearGradient id="port-badge-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#E6A317" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="18" fill="none" stroke="url(#port-badge-gradient)" strokeWidth="2" />
          {/* anchor glyph */}
          <circle cx="50" cy="38" r="3.4" fill="none" stroke="#F7F5F0" strokeWidth="2" />
          <line x1="50" y1="41" x2="50" y2="64" stroke="#F7F5F0" strokeWidth="2" />
          <line x1="39" y1="50" x2="61" y2="50" stroke="#F7F5F0" strokeWidth="2" />
          <path d="M 40 58 C 40 66, 44 70, 50 70 C 56 70, 60 66, 60 58" stroke="#F7F5F0" strokeWidth="2" fill="none" />
        </svg>
        <span className="sr-only">Reconnu des douanes — Conakry</span>
      </div>
    </div>
  );
}
