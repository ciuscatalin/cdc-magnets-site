import Image from "next/image";

export default function ProdusePage() {
  const products = [
    {
      title: "Magnet Standard",
      size: "50 × 50 mm",
      description:
        "Format pătrat, ideal pentru suveniruri accesibile, serii turistice și modele simple cu fotografie sau design minimalist.",
      badge: "Standard",
      preview: "/images/50x50_standard/m4.png",
    },
    {
      title: "Magnet Premium",
      size: "50 × 50 mm",
      description:
        "Format pătrat premium, cu aspect mai elegant și prezentare mai bună pentru magazine, pensiuni și puncte turistice.",
      badge: "Premium",
      preview: "/images/50x50/m2.png",
    },
    {
      title: "Magnet Premium Large",
      size: "80 × 53 mm",
      description:
        "Format dreptunghiular, perfect pentru imagini mai ample, colaje sau cadre reprezentative.",
      badge: "Premium Large",
      preview: "/images/80x53/m9.png",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Produse
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Dimensiuni disponibile
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
          Alege dintre formatele standard și premium, potrivite pentru fotografii
          personale, suveniruri turistice sau serii personalizate.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.title}
            className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-4 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
              {product.badge}
            </div>

            <h2 className="text-2xl font-semibold text-neutral-900">
              {product.title}
            </h2>

            <div className="mt-2 text-lg font-medium text-neutral-600">
              {product.size}
            </div>

            <div className="mt-6 flex items-center justify-center">
              <div
                className={`relative overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] ${
                  product.size === "80 × 53 mm"
                    ? "h-[150px] w-[230px]"
                    : "h-[210px] w-[210px]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] ring-1 ring-inset ring-white/40" />

                <Image
                  src={product.preview}
                  alt={product.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute right-3 top-3 z-20 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {product.size}
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-neutral-600">
              {product.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-[2rem] bg-neutral-50 p-8 md:p-10">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Cum comanzi
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
            Comandă simplu, în 3 pași
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            Procesul este rapid și ușor, indiferent dacă dorești un magnet pentru
            familie, un cadou personalizat sau o comandă pentru evenimente și
            colaborări.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
              1
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900">
              Trimiți fotografia sau ideea
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Poți trimite o fotografie, un design, un colaj sau doar ideea de la
              care vrei să pornim.
            </p>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
              2
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900">
              Alegi formatul potrivit
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Stabilim împreună dimensiunea, tipul magnetului și varianta potrivită
              pentru comandă.
            </p>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
              3
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900">
              Primești magnetul personalizat
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              După confirmare, magnetul este realizat și pregătit pentru livrare
              sau predare.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}