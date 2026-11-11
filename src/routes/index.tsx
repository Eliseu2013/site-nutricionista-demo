import { createFileRoute } from "@tanstack/react-router";

// DADOS FICTÍCIOS — este site é uma versão de demonstração para portfólio.
const WHATSAPP =
  "https://wa.me/5521900000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Rio%20de%20Janeiro";
// Imagem ilustrativa (substitua por uma foto própria ou livre de direitos)
const PHOTO = "/placeholder-profissional.svg";
const AVATAR = PHOTO;
const FACADE = "/placeholder-fachada.svg";
const TITLE = "Nutricionista | Dra. Ana Exemplo (Demo)";
const DESC =
  "Site de demonstração de uma nutricionista fictícia. Atendimento humanizado, personalizado e baseado em ciência.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Nutricionista Ana Exemplo (Demo)",
  description: "Nutricionista fictícia. Atendimento humanizado e personalizado.",
  image: "[URL da foto publicada no site]",
  telephone: "+55-21-90000-0000",
  url: "[domínio a definir]",
  hasMap: MAPS,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Exemplo, 123",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    postalCode: "00000-000",
    addressCountry: "BR",
  },
  areaServed: "Rio de Janeiro",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "3", bestRating: "5" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: PHOTO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: PHOTO },
    ],
    // Canonical: [domínio a definir]
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

const ext = { target: "_blank", rel: "noopener" } as const;

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <p className="label-caps flex items-center gap-3 text-terra">
      <span>{n}</span>
      <span className="h-px w-10 bg-terra" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.030-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.480-.89-.79-1.49-1.77-1.66-2.070-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.430 9.430 0 0 1-1.45-5.030c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.380 9.380 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.330 11.330 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.37 0-3.03-1.18-5.89-3.34-8.04z" />
    </svg>
  );
}

// Depoimentos FICTÍCIOS, escritos só para demonstração.
const reviews = [
  {
    before: "Fui muito bem recebida desde a primeira consulta. A Dra. Ana explica tudo com calma e ",
    mark: "monta o plano junto comigo",
    after: ", sem cobrança e sem dieta impossível de seguir.",
    cls: "md:col-span-7 md:row-span-2 md:self-start -rotate-[1.5deg]",
  },
  {
    before: "Atendimento ",
    mark: "acolhedor e sem julgamentos",
    after: ". Saí da consulta entendendo o porquê de cada orientação.",
    cls: "md:col-span-5 md:mt-10 rotate-1",
  },
  {
    before: "Profissional atenciosa e organizada. O acompanhamento é ",
    mark: "próximo e baseado em ciência",
    after: ". Recomendo!",
    cls: "md:col-span-4 md:col-start-8 md:-mt-2 -rotate-[0.5deg]",
  },
];
const pillars = [
  ["Escuta antes de tudo.", "Um atendimento humanizado, com escuta atenta e sem julgamentos."],
  ["Plano feito para você.", "Orientação personalizada, que se atenta aos pequenos detalhes e respeita o seu ritmo."],
  ["Ciência e ética.", "Um compromisso ético baseado na ciência, sem modismos."],
  ["Apoio nos dias difíceis.", "Incentivo para continuar, inclusive nos momentos de mais dificuldade."],
];

function Index() {
  return (
    <>
      <header className="border-b border-rule bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#topo" className="flex items-center gap-3">
            <img src={AVATAR} alt="Ilustração da profissional" width={44} height={44} className="h-11 w-11 rounded-full border border-rule object-cover" />
            <span>
              <span className="block font-display text-xl font-semibold text-leaf">Ana Exemplo</span>
              <span className="label-caps block text-muted-foreground">Nutricionista · Demo</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#atendimento" className="hidden py-3 hover:text-terra md:inline">Atendimento</a>
            <a href="#depoimentos" className="hidden py-3 hover:text-terra md:inline">Depoimentos</a>
            <a href="#onde-fica" className="hidden py-3 hover:text-terra md:inline">Onde fica</a>
            <a href={WHATSAPP} {...ext} className="btn-leaf text-sm">Agendar pelo WhatsApp</a>
          </nav>
        </div>
      </header>

      <main id="topo">
        {/* Hero */}
        <section className="ruled border-b border-rule">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[3fr_2fr] md:items-center md:py-24">
            <div>
              <p className="label-caps text-terra">Nutricionista · Rio de Janeiro</p>
              <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.02] tracking-tight md:text-[5.5rem]">
                Nutrição com <em className="highlight font-normal italic">escuta atenta</em> — e sem julgamentos.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed">
                Atendimento humanizado e personalizado, que respeita o seu processo e tem compromisso ético com a ciência. Consultório fictício no Rio de Janeiro.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href={WHATSAPP} {...ext} className="btn-leaf">Agendar minha consulta pelo WhatsApp</a>
                <a href="#onde-fica" className="py-3 font-medium underline underline-offset-4 hover:text-terra">Ver horários e endereço ↓</a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <figure className="relative w-64 -rotate-2 border border-rule bg-bone p-4 pt-8 md:w-[360px]">
                <span className="label-caps absolute -top-4 left-6 border border-rule bg-paper px-3 py-2 text-leaf">Consultório</span>
                <img
                  src={PHOTO}
                  alt="Ilustração de consultório de nutrição"
                  width={408}
                  height={408}
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="mt-3 border-t border-rule pt-3 font-display text-lg italic text-leaf">Ana Exemplo, nutricionista (fictícia)</figcaption>
              </figure>
              <p className="mt-6 border border-rule bg-bone px-4 py-2 text-sm font-semibold">
                <span className="text-terra">★</span> 5,0 · avaliações de exemplo
              </p>
            </div>
          </div>
        </section>

        {/* Faixa de prova */}
        <section aria-label="Resumo" className="border-b border-rule bg-sage">
          <ul className="mx-auto flex max-w-6xl flex-col divide-y divide-rule px-5 text-sm font-medium md:flex-row md:divide-x md:divide-y-0">
            {["Atendimento humanizado", "Plano personalizado", "Seg a sex, 10h–19h · Sáb, 9h–14h", "Rio de Janeiro"].map((t) => (
              <li key={t} className="py-4 md:flex-1 md:px-6 md:first:pl-0">{t}</li>
            ))}
          </ul>
        </section>

        {/* 01 */}
        <section id="atendimento" className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel n="01">Como é o atendimento</SectionLabel>
              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">Um consultório feito de escuta.</h2>
              <p className="mt-6 text-lg leading-relaxed">
                Quatro princípios guiam cada consulta.
              </p>
            </div>
            <ol className="md:col-span-6 md:col-start-7">
              {pillars.map(([t, d], i) => (
                <li key={t} className="flex gap-6 border-t border-rule py-6 last:border-b">
                  <span className="font-display text-5xl italic leading-none text-terra">{i + 1}</span>
                  <p className="text-lg leading-relaxed"><strong className="font-semibold text-leaf">{i + 1}. {t}</strong> {d}</p>
                </li>
              ))}
              <p className="mt-4 text-sm text-muted-foreground">Conteúdo de exemplo.</p>
            </ol>
          </div>
        </section>

        {/* 02 */}
        <section className="border-y border-rule bg-sage">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionLabel n="02">Consultas</SectionLabel>
              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">Consulta de nutrição individual</h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed">Cada consulta começa pela sua história, sua rotina e seus objetivos, e o plano vem depois.</p>
            </div>
            <div className="border-l border-leaf pl-6 md:col-span-4 md:col-start-9 md:self-end">
              <p className="text-sm italic text-muted-foreground">
                Atendimento presencial e online. (Texto de exemplo.)
              </p>
              <a href={WHATSAPP} {...ext} className="btn-leaf mt-6">Tirar dúvidas pelo WhatsApp</a>
            </div>
          </div>
        </section>

        {/* 03 */}
        <section id="depoimentos" className="ruled bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionLabel n="03">O que dizem os pacientes</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">Quem passou pela consulta, conta.</h2>
            <div className="mt-14 grid gap-10 md:grid-cols-12">
              {reviews.map((r) => (
                <blockquote key={r.mark} className={`border border-rule bg-bone p-7 ${r.cls}`}>
                  <p className="tracking-[0.2em] text-terra" aria-label="5 estrelas">★★★★★</p>
                  <p className="mt-4 font-display text-xl leading-relaxed text-ink">
                    “{r.before}<mark className="highlight bg-transparent text-ink">{r.mark}</mark>{r.after}”
                  </p>
                  <footer className="label-caps mt-6 border-t border-rule pt-4 text-muted-foreground">Depoimento fictício</footer>
                </blockquote>
              ))}
            </div>
            <a href={MAPS} {...ext} className="mt-14 inline-block py-3 font-semibold text-leaf underline underline-offset-4 hover:text-terra">
              Ver no mapa →
            </a>
          </div>
        </section>

        {/* 04 */}
        <section id="onde-fica" className="border-t border-rule bg-sage">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel n="04">Onde fica e horários</SectionLabel>
              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">No Rio de Janeiro.</h2>
              <div className="mt-8 flex gap-4">
                <figure className="shrink-0">
                  <img src={FACADE} alt="Ilustração de fachada" width={80} height={92} loading="lazy" className="h-[92px] w-20 overflow-hidden border border-rule bg-bone object-cover text-[0.6rem]" />
                  <figcaption className="mt-1 w-20 text-[0.65rem] leading-tight text-muted-foreground">Rua Exemplo, 123</figcaption>
                </figure>
                <address className="not-italic text-lg leading-relaxed">
                  Rua Exemplo, 123 — Rio de Janeiro – RJ (endereço fictício)
                </address>
              </div>
              <p className="label-caps mt-10 text-terra">Horários</p>
              <table className="mt-3 w-full text-left">
                <tbody>
                  {[["Segunda a sexta", "10h às 19h"], ["Sábado", "9h às 14h"], ["Domingo", "fechado"]].map(([d, h]) => (
                    <tr key={d} className="border-b border-rule">
                      <th scope="row" className="py-3 font-medium">{d}</th>
                      <td className="py-3 text-right">{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-8">
                Telefone/WhatsApp:{" "}
                <a href="tel:+5521900000000" className="inline-block py-3 font-semibold text-leaf underline underline-offset-4">(21) 90000-0000</a>
              </p>
              <a href={MAPS} {...ext} className="btn-leaf mt-4">Como chegar</a>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <iframe
                title="Mapa do Rio de Janeiro"
                src="https://www.google.com/maps?q=Rio%20de%20Janeiro&output=embed"
                loading="lazy"
                width={600}
                height={520}
                className="h-[420px] w-full border border-rule md:h-full md:min-h-[520px]"
              />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-leaf text-paper">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-paper md:text-6xl">
              Vamos conversar sobre a sua alimentação, <em className="font-normal italic">no seu ritmo?</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg">Mande uma mensagem e combine o melhor horário para a sua consulta.</p>
            <a href={WHATSAPP} {...ext} className="btn-terra mt-10">Chamar no WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule bg-paper pb-24 md:pb-0">
        <div className="mx-auto max-w-6xl space-y-2 px-5 py-10 text-sm">
          <p>Site de demonstração para portfólio · Profissional, endereço e telefone fictícios</p>
          <p className="text-muted-foreground">Desenvolvido por Eliseu Fernandes</p>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        {...ext}
        className="btn-leaf fixed bottom-4 right-4 z-50 gap-2 md:hidden"
        aria-label="Agendar pelo WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" /> Agendar
      </a>
    </>
  );
}
