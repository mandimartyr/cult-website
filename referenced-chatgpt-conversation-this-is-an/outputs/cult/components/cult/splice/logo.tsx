import Image from 'next/image';
export function SpliceLogo({
  compact = false,
  className = '',
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`sp-logo-art ${compact ? 'sp-logo-compact' : 'sp-logo-primary'} ${className}`}
    >
      <Image
        src="/studies/splice-logo-sheet.png"
        alt="SPLICE."
        width={1536}
        height={1024}
        unoptimized
      />
    </span>
  );
}
