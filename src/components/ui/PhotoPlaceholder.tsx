/**
 * V0.5 image placeholder — holds the exact aspect ratio so layout/rhythm can be
 * judged without publishing consent-pending photos. At V1 each instance is
 * replaced by <Image> of the optimised AVIF/WebP asset named in the manifest.
 */
export function PhotoPlaceholder({
  ratio = "4 / 5",
  label,
  tint = "#1b1814",
  className = "",
}: {
  ratio?: string;
  label: string;
  tint?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-lg border border-line ${className}`}
      style={{
        aspectRatio: ratio,
        background: `radial-gradient(120% 100% at 60% 25%, ${tint} 0%, #0c0b0a 100%)`,
      }}
    >
      <span className="px-4 text-center font-sans text-[12px] uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
    </div>
  );
}
