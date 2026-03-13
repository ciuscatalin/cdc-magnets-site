"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GaleriePage() {
  const galleryItems = [
    {
      title: "Generații în Familie",
      category: "Familie",
      size: "50x50",
      image: "/images/50x50/m1.png",
    },
    {
      title: "Botez bebe",
      category: "Botez",
      size: "50x50",
      image: "/images/50x50/m2.png",
    },
    {
      title: "Nuntă cuplu",
      category: "Nuntă",
      size: "50x50",
      image: "/images/50x50/m3.png",
    },
    {
      title: "Mamă și copil",
      category: "Familie",
      size: "50x50",
      image: "/images/50x50/m4.png",
    },
    {
      title: "Lac natural",
      category: "Turistic",
      size: "50x50",
      image: "/images/50x50/m5.png",
    },
    {
      title: "Stațiune balneară",
      category: "Turistic",
      size: "50x50",
      image: "/images/50x50/m6.png",
    },
    {
      title: "Apus montan",
      category: "Peisaj",
      size: "80x53",
      image: "/images/80x53/m1.png",
    },
    {
      title: "Familie portret",
      category: "Familie",
      size: "80x53",
      image: "/images/80x53/m2.png",
    },
    {
      title: "Nuntă la apus",
      category: "Nuntă",
      size: "80x53",
      image: "/images/80x53/m3.png",
    },
    {
      title: "Cuplu în natură",
      category: "Nuntă",
      size: "80x53",
      image: "/images/80x53/m5.png",
    },
    {
      title: "Oraș european",
      category: "Oraș",
      size: "80x53",
      image: "/images/80x53/m6.png",
    },
    {
      title: "Stradă istorică",
      category: "Oraș",
      size: "80x53",
      image: "/images/80x53/m7.png",
    },
    {
      title: "Dealuri și lumină",
      category: "Peisaj",
      size: "80x53",
      image: "/images/80x53/m8.png",
    },
    {
      title: "Siluetă la apus",
      category: "Nuntă",
      size: "80x53",
      image: "/images/80x53/m9.png",
    },
    {
      title: "Răsărit peste nori",
      category: "Peisaj",
      size: "80x53",
      image: "/images/80x53/m10.png",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.size === filter);

  const closeModal = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Galerie
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Exemple de magneți realizați
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
          Exemple reale de magneți personalizați realizați pentru familie,
          botez, nuntă și modele turistice, disponibile în formatele 50 × 50 mm
          și 80 × 53 mm.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => {
            setFilter("all");
            setSelectedIndex(null);
          }}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            filter === "all"
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"
          }`}
        >
          Toate
        </button>

        <button
          onClick={() => {
            setFilter("50x50");
            setSelectedIndex(null);
          }}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            filter === "50x50"
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"
          }`}
        >
          50 × 50
        </button>

        <button
          onClick={() => {
            setFilter("80x53");
            setSelectedIndex(null);
          }}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            filter === "80x53"
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"
          }`}
        >
          80 × 53
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <button
            key={`${item.size}-${item.image}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`relative overflow-hidden bg-neutral-100 ${
                item.size === "80x53" ? "aspect-[80/53]" : "aspect-square"
              }`}
            >
              <span className="absolute right-3 top-3 z-10 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {item.size === "50x50" ? "50×50 mm" : "80×53 mm"}
              </span>

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                  {item.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-neutral-900">
                {item.title}
              </h2>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 p-4 md:p-8"
          onClick={closeModal}
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-2 top-2 z-50 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Închide
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Imaginea anterioară"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Imaginea următoare"
                >
                  ›
                </button>
              </>
            )}

            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {filteredItems[selectedIndex].category}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    {filteredItems[selectedIndex].title}
                  </h2>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
                  {filteredItems[selectedIndex].size === "50x50"
                    ? "50 × 50 mm"
                    : "80 × 53 mm"}
                </span>
              </div>

              <div
                className={`relative w-full overflow-hidden rounded-3xl bg-white/5 shadow-2xl ${
                  filteredItems[selectedIndex].size === "80x53"
                    ? "aspect-[80/53]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={filteredItems[selectedIndex].image}
                  alt={filteredItems[selectedIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <p className="mt-4 text-center text-sm text-white/70">
                {selectedIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}