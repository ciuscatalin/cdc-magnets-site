import Image from "next/image";
export default function HomePage() {
  const highlights = [
    "Design curat și prezentare premium",
    "Potriviți pentru familie, evenimente și turism",
    "Formate standard și premium disponibile",
    "Personalizare pentru comenzi individuale sau colaborări",
  ];

  const previewGallery = [
  {
    title: "Magnet familie",
    image: "/images/magnet-familie-generatii.png",
  },
  {
    title: "Magnet turistic",
    image: "/images/magnet-bai.png",
  },
  {
    title: "Magnet nuntă",
    image: "/images/magnet-nunta-cuplu.png",
  },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden border-b bg-neutral-50">
  		  <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-neutral-100" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white px-4 py-1 text-sm font-medium text-neutral-700 shadow-sm">
              CDC Crafts · Magneți personalizați
            </div>

            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              Magneți personalizați pentru suveniruri, evenimente și fotografii speciale
            </h1>   

            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-700 md:text-lg">
              Realizați în mai multe formate, potriviți pentru familie, botez, nuntă,
              suveniruri turistice sau comenzi personalizate pentru magazine și evenimente.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/produse"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-neutral-800"
              >
                Vezi produsele
              </a>

              <a
                href="/galerie"
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100"
              >
                Vezi galeria
              </a>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="w-full max-w-md">
              <div className="mt-6 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-square bg-neutral-100">
                  <Image
                    src="/images/magnet-nunta-cuplu.png"
                    alt="Magnet personalizat familie"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-2 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                    Exemplu real
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Magnet personalizat
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Fotografiile preferate pot fi transformate în magneți potriviți pentru familie, cadouri sau evenimente speciale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Navigare rapidă
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Descoperă site-ul
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/produse"
            className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl font-semibold">Produse</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Vezi dimensiunile disponibile și alege formatul potrivit pentru magnetul tău personalizat.
            </p>
          </a>

          <a
            href="/galerie"
            className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl font-semibold">Galerie</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Descoperă exemple reale de magneți realizați pentru familie, botez, nuntă și suveniruri turistice.
            </p>
          </a>

          <a
            href="/contact"
            className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Contactează-mă pentru comenzi personalizate, colaborări și oferte pentru magazine sau evenimente.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:px-10 lg:px-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Galerie preview
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
              Exemple de magneți realizați
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            Câteva exemple reale de magneți personalizați, pentru familie, evenimente și suveniruri.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {previewGallery.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
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
                <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/galerie"
            className="inline-flex rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-neutral-800"
          >
            Vezi galeria completă
          </a>
        </div>
      </section>
    </div>
  );
}