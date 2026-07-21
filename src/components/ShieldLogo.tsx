export function ShieldLogo({ size = 45 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
      <defs>
        <linearGradient id="shg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0600FE" />
          <stop offset="100%" stopColor="#48FFD4" />
        </linearGradient>
      </defs>
      <path
        d="M20 2 L34 8 V19 C34 27.5 28 33.5 20 38 C12 33.5 6 27.5 6 19 V8 Z"
        fill="url(#shg)"
      />
    </svg>
  );
}
