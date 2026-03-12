export default function ProdusePage() {
  const products = [
    {
      title: "Magnet Standard",
      size: "50 × 50 mm",
      description:
        "Format pătrat, ideal pentru suveniruri accesibile, serii turistice și modele simple cu fotografie sau design minimalist.",
      badge: "Standard",
    },
    {
      title: "Magnet Premium",
      size: "50 × 50 mm",
      description:
        "Format pătrat premium, cu aspect mai elegant și prezentare mai bună pentru magazine, pensiuni și puncte turistice.",
      badge: "Premium",
    },
    {
      title: "Magnet Premium Large",
      size: "80 × 53 mm",
      description:
        "Format dreptunghiular, perfect pentru imagini mai ample, colaje sau cadre reprezentative.",
      badge: "Premium Large",
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
          Alege dintre formatele standard și premium, potrivite pentru fotografii personale,
          suveniruri turistice sau serii personalizate.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.title}
            className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
              {product.badge}
            </div>

            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <div className="mt-2 text-lg font-medium text-neutral-600">
              {product.size}
            </div>

            <div className="mt-5 flex items-center justify-center">
              {product.size === "50 × 50 mm" && (
                <div
                  className="relative flex items-center justify-center rounded-[14px] border border-neutral-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
                  style={{ width: "108px", height: "108px" }}
                >
                  <div className="pointer-events-none absolute inset-x-3 top-2 h-5 rounded-full bg-white/70 blur-md" />
                  <span className="relative z-10 text-sm font-semibold text-neutral-700">
                    50 × 50
                  </span>
                </div>
              )}

              {product.size === "80 × 53 mm" && (
                <div
                  className="relative flex items-center justify-center rounded-[14px] border border-neutral-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
                  style={{ width: "150px", height: "100px" }}
                >
                  <div className="pointer-events-none absolute inset-x-4 top-2 h-5 rounded-full bg-white/70 blur-md" />
                  <span className="relative z-10 text-sm font-semibold text-neutral-700">
                    80 × 53
                  </span>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}