export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-300">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            Hai să discutăm despre magneții tăi
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 md:text-base">
            Pentru comenzi personalizate, colaborări sau informații despre produse,
            mă poți contacta direct prin WhatsApp, Instagram, telefon sau email.
          </p>

          <div className="mt-6">
            <a
              href="https://wa.me/40748401702?text=Buna,%20sunt%20interesat%20de%20magneți%20personalizați."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-green-600"
            >
              Scrie pe WhatsApp
            </a>
          </div>
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
    </div>
  );
}