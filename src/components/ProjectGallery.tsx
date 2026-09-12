import { useEffect, useState } from "react";

export const ProjectGallery = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!hasMultiple) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="gallery">
      <div className="galleryMain">
        {hasMultiple && (
          <button
            className="galleryNav prev"
            onClick={prev}
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>
        )}
        <img src={images[index]} alt={`Projektbild ${index + 1}`} />
        {hasMultiple && (
          <button
            className="galleryNav next"
            onClick={next}
            aria-label="Nächstes Bild"
          >
            ›
          </button>
        )}
        {hasMultiple && (
          <span className="galleryCounter">
            {index + 1} / {images.length}
          </span>
        )}
      </div>

      {images.length > 0 && (
        <div className="galleryThumbs">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`galleryThumb ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Bild ${i + 1} anzeigen`}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
