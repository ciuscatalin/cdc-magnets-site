export default function CdcCraftsMagnetsSite() {
  const products = [
	  {
		title: "Magnet Standard",
		size: "50 × 50 mm",
		ratio: "1 / 1",
		description:
		  "Format pătrat, ideal pentru suveniruri accesibile, serii turistice și modele simple cu fotografie sau design minimalist.",
		badge: "Standard",
	  },
	  {
		title: "Magnet Premium",
		size: "50 × 50 mm",
		ratio: "1 / 1",
		description:
		  "Format pătrat premium, cu aspect mai elegant și prezentare mai bună pentru magazine, pensiuni și puncte turistice.",
		badge: "Premium",
	  },
	  {
		title: "Magnet Premium Large",
		size: "80 × 53 mm",
		ratio: "80 / 53",
		description:
		  "Format dreptunghiular, perfect pentru imagini mai ample, colaje sau cadre reprezentative.",
		badge: "Premium Large",
	  },
	];

  const highlights = [
	  "Producție locală și control al calității",
	  "Loturi mici sau producție în serie",
	  "Personalizare pentru firme, magazine și evenimente",
	  "Ideal pentru suveniruri, branding și cadouri",
	];

  const gallery = [
	  {
		title: "Portret",
		subtitle: "Magnet cu fotografie tip portret",
		image:
		  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
	  },
	  {
		title: "Turistic",
		subtitle: "Destinații turistice și centre balneare",
		image:
		  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
	  },
	  {
		title: "Business",
		subtitle: "Magnet personalizat pentru firme și branding",
		image:
		  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
	  },
	];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
		<section className="relative overflow-hidden border-b bg-white">
			<div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-200" />
			<div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:px-10 lg:px-12">
			  <div className="flex flex-col justify-center">
				<div className="mb-4 inline-flex w-fit items-center rounded-full border border-neutral-300 bg-white px-4 py-1 text-sm shadow-sm">
				  CDC Crafts · Magneți suvenir
				</div>
				<h1 className="max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
				  Magneți personalizați pentru Beclean și Băile Figa
				</h1>
				<p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
				  Pagină de prezentare pentru magneți suvenir realizați local, în formate standard și premium.
				  Potriviți pentru magazine, pensiuni, recepții și puncte turistice.
				</p>
				<div className="mt-7 flex flex-wrap gap-3">
				  <a
					href="#produse"
					className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
				  >
					Vezi produsele
				  </a>
				  <a
					href="#contact"
					className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100"
				  >
					Contact
				  </a>
				</div>
			  </div>

			  <div className="grid gap-4 sm:grid-cols-2">
				<div className="rounded-[2rem] bg-neutral-900 p-5 text-white shadow-xl">
				  <div className="mb-8 text-sm uppercase tracking-[0.2em] text-neutral-300">
					Formate disponibile
				  </div>

				  <div className="flex flex-wrap gap-6">
					<div className="flex flex-col items-center">
					  <div className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white/10 text-center">
						<div>
						  <div className="text-sm text-neutral-300">Standard</div>
						  <div className="text-lg font-semibold">50 × 50</div>
						</div>
					  </div>
					</div>

					<div className="flex flex-col items-center">
					  <div className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white/10 text-center">
						<div>
						  <div className="text-sm text-neutral-300">Premium</div>
						  <div className="text-lg font-semibold">50 × 50</div>
						</div>
					  </div>
					</div>

					<div className="flex flex-col items-center">
					  <div
						className="flex w-36 items-center justify-center rounded-xl bg-white/10 text-center"
						style={{ aspectRatio: "80 / 53" }}
					  >
						<div>
						  <div className="text-sm text-neutral-300">Premium Large</div>
						  <div className="text-lg font-semibold">80 × 53</div>
						</div>
					  </div>
					</div>
				  </div>
				</div>

				<div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-lg">
				  <div className="mb-5 text-sm uppercase tracking-[0.2em] text-neutral-500">
					Avantaje
				  </div>
				  <div className="space-y-3">
					{highlights.map((item) => (
					  <div
						key={item}
						className="rounded-2xl bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-700"
					  >
						{item}
					  </div>
					))}
				  </div>
				</div>
			  </div>
			</div>
		</section>

		<section id="produse" className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
			<div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Produse</p>
					<h2 className="mt-2 text-3xl font-bold tracking-tight">Dimensiuni disponibile</h2>
				</div>
				<p className="max-w-2xl text-sm leading-6 text-neutral-600 md:text-base">
					Prezentare simplă și clară pentru parteneri sau clienți care vor să vadă rapid diferențele dintre modelele disponibile.
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

				  <h3 className="text-2xl font-semibold">{product.title}</h3>
				  <div className="mt-2 text-lg font-medium text-neutral-600">{product.size}</div>

				  <div className="mt-4 flex justify-center">
					<div
					  className="rounded-lg bg-neutral-200 shadow-inner"
					  style={{ width: "120px", aspectRatio: product.ratio }}
					/>
				  </div>

				  <p className="mt-4 text-sm leading-7 text-neutral-600">
					{product.description}
				  </p>
				</div>
			  ))}
			</div>
		</section>

		<section className="border-y bg-white">
			<div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
				<div className="mb-8">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Galerie</p>
					<h2 className="mt-2 text-3xl font-bold tracking-tight">Exemple de stil</h2>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{gallery.map((item) => (
					<div key={item.title} className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 shadow-sm">
						<div className="aspect-square overflow-hidden">
							<img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 hover:scale-105"
						/>
						</div>
						<div className="p-5">
							<h3 className="text-xl font-semibold">{item.title}</h3>
							<p className="mt-2 text-sm text-neutral-600">{item.subtitle}</p>
						</div>
					</div>
					))}
				</div>
			</div>
		</section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-300">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Hai să discutăm despre magneții tăi</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 md:text-base">
              Pot realiza modele pentru suveniruri turistice, serii personalizate, colaborări cu pensiuni,
              magazine sau comenzi speciale pentru evenimente.
            </p>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="space-y-5 text-sm leading-7 text-neutral-700">
              <div>
                <div className="font-semibold text-neutral-900">Instagram</div>
                <div>@3d_prints_cdc</div>
              </div>
              <div>
                <div className="font-semibold text-neutral-900">Telefon</div>
                <div>0748 401 702</div>
              </div>
              <div>
                <div className="font-semibold text-neutral-900">Email</div>
                <div>ciuscatalin@gmail.com</div>
              </div>
              <div>
                <div className="font-semibold text-neutral-900">Locație</div>
                <div>Beclean, Bistrița-Năsăud</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
