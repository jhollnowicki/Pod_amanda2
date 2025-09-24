import { useState } from "react";

type Props = {
  placeholderSrc?: string;
  fullSrc?: string;
  alt: string;
  label?: string;
  reason?: string;
  blurClass?: string;
  className?: string;
};

export default function SensitiveImage({
  placeholderSrc,
  fullSrc,
  alt,
  label = "Conteúdo sensível",
  reason = "Clique para visualizar",
  blurClass = "blur-xl",
  className = "",
}: Props) {
  const [revealed, setRevealed] = useState(false);
  const [src, setSrc] = useState(placeholderSrc || fullSrc);

  function reveal() {
    if (!revealed && fullSrc) {
      setSrc(fullSrc);
    }
    setRevealed(true);
  }

  return (
    <figure
      className={`relative overflow-hidden rounded-xl bg-muted shadow-card ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-auto object-cover transition duration-300 ${
          revealed ? "blur-0" : blurClass
        }`}
      />

      {!revealed && (
        <div className="absolute inset-0 grid place-items-center bg-black/60 backdrop-blur-[2px]">
          <div className="mx-4 max-w-sm text-center text-white">
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-xs opacity-90 mb-3">{reason}</p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                reveal();
              }}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold bg-white text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Mostrar
            </button>
          </div>
        </div>
      )}
    </figure>
  );
}
