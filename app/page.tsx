import Image from "next/image";

const services = [
  {
    title: "Life & Family: Secure their tomorrow, today.",
    body: "Whether it's protecting your income, covering education, or leaving a lasting legacy, our life plans give your loved ones the confidence to keep moving forward.",
    image: "/emple-service-life.png",
    alt: "Smiling family standing together",
    width: 1240,
    height: 760,
  },
  {
    title: "Health: Be ready for the life's curveballs.",
    body: "Our health and critical illness cover cushions unexpected medical costs, giving you peace of mind to focus on recovery, rebuild strength, and live confidently.",
    image: "/emple-service-health.png",
    alt: "Family with a doctor",
    width: 1240,
    height: 760,
  },
  {
    title: "Pensions: Trusted Retirement Protection",
    body: "emPLE Pension Trust Insurance delivers reliable long-term financial security, helping individuals and organizations protect and grow their retirement benefits.",
    image: "/emple-service-pension.png",
    alt: "Retired woman with friends outdoors",
    width: 1920,
    height: 1240,
  },
];

const reasons = [
  {
    icon: "bolt",
    title: "Fast Claims",
    body: "Most claims settled within 3-5 working days, so you can move forward without delay.",
  },
  {
    icon: "team",
    title: "Reliability",
    body: "Over 95% of claims paid on time, no hidden barriers, no broken promises.",
  },
  {
    icon: "care",
    title: "Trusted by Many",
    body: "Proudly protecting more than 550,000 thousand policyholders nationwide across families, businesses, and communities.",
  },
  {
    icon: "people",
    title: "Customer First",
    body: "Consistently high satisfaction ratings, showing that when we say we put people first, we mean it.",
  },
];

function IconBadge({ label }: { label: string }) {
  const symbol =
    label === "bolt" ? "!" : label === "care" ? "." : label === "team" ? ":" : "+";

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-[#31c95a] text-lg font-black leading-none text-white">
      {symbol}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#3f4550]">
      <header className="border-b border-[#eff1f2] bg-white">
        <div className="mx-auto flex h-[34px] max-w-[1040px] items-center justify-between px-5 sm:px-8">
          <Image
            src="/emple-logo.png"
            alt="emPLE empowering people"
            width={84}
            height={28}
            priority
            className="h-[24px] w-auto object-contain"
          />
          <nav
            aria-label="Product navigation"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase text-[#2f3541] sm:gap-3"
          >
            <a
              href="https://emplelife-ghana.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIFE
            </a>
            <a href="#">HEALTH</a>
            <a href="#">PENSIONS</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-[1040px] px-5 pb-10 pt-7 text-center sm:px-8 lg:pb-12">
        <p className="text-[12px] font-semibold text-[#b4b8c0]">emPLE</p>
        <h1 className="mx-auto mt-4 max-w-[760px] text-[32px] font-bold leading-[1.1] text-[#292749] sm:text-[44px]">
          Protection for today, Possibility for tomorrow
        </h1>
        <p className="mx-auto mt-5 max-w-[850px] text-[12px] font-medium leading-5 text-[#9aa0aa] sm:text-[13px]">
          Insurance isn&apos;t only about protection- it&apos;s about possibility. emPLE
          stands beside you through life&apos;s uncertainties, helping you build the
          future you want, every step of your journey through life.
        </p>
        <a
          href="#products"
          className="mt-5 inline-flex h-10 items-center justify-center rounded-[3px] bg-[#2eb84c] px-8 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#27a944]"
        >
          Explore Our Products
        </a>
      </section>

      <section className="mx-auto max-w-[1040px] px-5 sm:px-8">
        <Image
          src="/emple-hero-family.png"
          alt="Smiling family sitting together"
          width={1664}
          height={1176}
          priority
          className="mx-auto aspect-[1664/1176] w-full max-w-[976px] object-cover"
        />
      </section>

      <section id="products" className="mx-auto max-w-[1040px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="max-w-[330px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.02em] text-[#a0a5ad]">
            Our Services
          </p>
          <h2 className="mt-4 text-[29px] font-bold leading-[1.05] text-[#3c4450] sm:text-[34px]">
            Choose the cover that fits your life
          </h2>
          <p className="mt-5 text-[13px] font-medium leading-5 text-[#9aa0aa]">
            Find a plan that fits your world, from health to home to savings,
            tailored to protect today and power tomorrow.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="bg-[#eefaf0]">
              <Image
                src={service.image}
                alt={service.alt}
                width={service.width}
                height={service.height}
                className="aspect-[31/19] w-full object-cover"
              />
              <div className="min-h-[190px] px-5 pb-7 pt-4">
                <h3 className="text-[19px] font-bold leading-[1.12] text-[#4a535c]">
                  {service.title}
                </h3>
                <p className="mt-8 text-[12px] font-medium leading-[1.35] text-[#66717b]">
                  {service.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#042f12] text-white">
        <div className="mx-auto max-w-[1040px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-[430px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.02em] text-white/80">
              Trust
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight">
              Why choose us?
            </h2>
            <p className="mt-4 text-[12px] font-semibold leading-5 text-white/85">
              Insurance should do more than protect; it should empower you to
              live boldly, every step of the way.
            </p>
          </div>

          <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="max-w-[210px]">
                <IconBadge label={reason.icon} />
                <h3 className="mt-8 text-[18px] font-bold">{reason.title}</h3>
                <p className="mt-12 text-[12px] font-bold leading-5 text-white/85">
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1040px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.25fr] lg:py-20">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.02em] text-[#a0a5ad]">
            The emPLE Way
          </p>
          <h2 className="mt-7 max-w-[430px] text-[35px] font-medium leading-[1.18] text-[#3c4450] sm:text-[40px]">
            Turning Protection into Possibility
          </h2>
        </div>
        <p className="pt-12 text-[13px] font-semibold leading-5 text-[#727982] md:pt-14">
          The emPLE Way is how we bring our promise - Empowering People. Every
          Step of the Way - to life. It&apos;s built on a simple belief: insurance
          should not just protect your life and property; it should fuel your
          hopes and dreams. We design every product, service and interaction to:
        </p>
      </section>

      <footer className="bg-[#042f12] text-white">
        <div className="mx-auto grid max-w-[1040px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_1fr_1fr_1.5fr] lg:py-16">
          <div>
            <h3 className="border-b border-white/40 pb-2 text-[12px] font-bold uppercase">
              Help and Support
            </h3>
            <ul className="mt-4 space-y-2 text-[12px] text-white/85">
              <li>Site Map</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="border-b border-white/40 pb-2 text-[12px] font-bold uppercase">
              Other Links
            </h3>
            <ul className="mt-4 space-y-2 text-[12px] text-white/85">
              <li>emPLE Life</li>
              <li>emPLE Health</li>
              <li>emPLE Pension</li>
            </ul>
          </div>
          <div>
            <h3 className="border-b border-white/40 pb-2 text-[12px] font-bold uppercase">
              Careers
            </h3>
            <p className="mt-8 text-[12px] text-white/85">Join Our Team</p>
          </div>
          <div className="md:pl-16">
            <div className="text-[30px] leading-none">...</div>
            <p className="mt-3 text-[12px] text-white/80">Contact Us</p>
            <p className="mt-1 text-[22px] font-bold">+233 30 263 3933</p>
            <p className="mt-8 text-[12px] font-bold">Email Us</p>
            <p className="mt-2 text-[12px] font-bold">info@emPLE.com.gh</p>
            <p className="mt-7 text-[12px] font-bold">Follow Us</p>
            <div className="mt-3 flex gap-2">
              {["f", "x", "ig", "in", "yt"].map((item) => (
                <span
                  key={item}
                  className="flex h-5 w-5 items-center justify-center rounded-[3px] bg-white text-[9px] font-bold uppercase text-[#042f12]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1040px] px-5 pb-8 sm:px-8">
          <p className="text-[11px] text-white/85">
            Omnipotent House, 10 Dzorwulu Extension (Ns. Road), PMB CT 456,
            Cantonments, Accra, Ghana
          </p>
          <p className="mt-7 text-[11px] font-bold text-white/90">
            Terms of use | Privacy Policy
          </p>
          <p className="mt-7 text-[11px] text-white/25">
            emPLE Ghana (c) 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
