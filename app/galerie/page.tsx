import Image from "next/image";

export default function GaleriePage() {
  const galleryItems = [
    {
      title: "Generații în Familie",
      category: "Familie",
      image: "/images/magnet-familie-generatii.png",
    },
    {
      title: "Botez bebe",
      category: "Botez",
      image: "/images/magnet-botez-bebe.png",
    },
    {
      title: "Familie în natură",
      category: "Familie",
      image: "/images/magnet-familie-natura.png",
    },
    {
      title: "Colaj Stațiune Balneară",
      category: "Turistic",
      image: "/images/magnet-bai.png",
    },
    {
      title: "Lac Sărat",
      category: "Turistic",
      image: "/images/magnet-piscina.png",
    },
    {
      title: "Nuntă cuplu",
      category: "Nuntă",
      image: "/images/magnet-nunta-cuplu.png",
    },
  ]; 

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
          Exemple reale de magneți personalizați realizați pentru familie, botez, nuntă și modele turistice.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-neutral-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-3 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                {item.category}
              </div>

              <h2 className="text-xl font-semibold text-neutral-900">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}