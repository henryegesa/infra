export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-lg">Henry Maloba</span>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#publications" className="hover:underline">
              Research
            </a>
            <a href="mailto:youremail@example.com" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-white text-black px-6 py-24 flex flex-col items-center">
        {/* HERO */}
        <section className="max-w-3xl text-center space-y-6 mt-10">
          <h1 className="text-4xl font-semibold tracking-tight">
            Designing the next architecture of money
          </h1>

          <p className="text-lg text-neutral-600">
            Researching how liquidity, timing, and flow-based systems reshape finance,
            policy, and economic resilience.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-10 flex gap-4">
          <a
            href="#publications"
            className="px-6 py-3 bg-black text-white rounded-full inline-flex items-center justify-center"
          >
            View Research Portfolio
          </a>
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 border border-black rounded-full inline-flex items-center justify-center"
          >
            Contact Henry
          </a>
        </div>

        {/* CORE IDEA */}
        <section className="mt-24 max-w-4xl space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            Money is not just stored. It is sequenced.
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed">
            Modern financial systems often fail at the micro-timing layer—when incomes and
            obligations collide out of order. My work focuses on modeling, sequencing, and
            optimizing liquidity flows to build more resilient financial systems across
            borders, institutions, and populations.
          </p>
        </section>

        {/* RESEARCH AGENDA */}
        <section className="mt-24 max-w-5xl space-y-10">
          <h2 className="text-2xl font-semibold text-center">
            Research Agenda
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Liquidity Sequencing</h3>
              <p className="text-neutral-700 leading-relaxed">
                Studying how timing functions as a form of capital and how misaligned
                liquidity flows create systemic fragility across households and institutions.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Cross-Border Infrastructure</h3>
              <p className="text-neutral-700 leading-relaxed">
                Designing architectures that reduce friction, shorten settlement, and
                increase transparency between monetary zones.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">System Design for Economic Stability</h3>
              <p className="text-neutral-700 leading-relaxed">
                Exploring how technology, policy, and institutional structures can be
                aligned to engineer resilience rather than assume it.
              </p>
            </div>
          </div>
        </section>

        {/* APPLIED WORK */}
        <section className="mt-24 max-w-5xl space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Applied Work
          </h2>

          <p className="text-center max-w-3xl mx-auto text-neutral-700 leading-relaxed">
            I apply liquidity-based thinking to real-world systems—payment networks, payroll engines,
            credit algorithms, and cross-border flows—to understand how economic stability can be
            engineered rather than assumed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-left">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Liquidity Sequencing Models</h3>
              <p className="text-neutral-700 leading-relaxed">
                Modeling income–obligation synchronization, flow-timing constraints,
                and liquidity stress propagation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Cross-Border Settlement Design</h3>
              <p className="text-neutral-700 leading-relaxed">
                Designing wallet-based settlement structures optimized for speed, transparency,
                and multi-currency interoperability.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Liquidity-Centered Credit Algorithms</h3>
              <p className="text-neutral-700 leading-relaxed">
                Building credit models that account for timing precision, income stability,
                and short-duration liquidity patterns.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Transactional Flow Optimization</h3>
              <p className="text-neutral-700 leading-relaxed">
                Analyzing transaction sequences, routing logic, and wallet mechanics to reduce
                delays, volatility, and systemic fragility.
              </p>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section
          id="publications"
          className="mt-24 max-w-5xl space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center">
            Selected Research &amp; Writing
          </h2>

          <div className="space-y-4 text-left max-w-3xl mx-auto text-neutral-800">
            <div>
              <h3 className="font-semibold">
                Rewriting the Geography of Money: A Three-Pillar Framework for Programmable Liquidity
              </h3>
              <p className="text-sm text-neutral-600">
                Journal article examining how programmable liquidity reshapes the structure and logic of
                modern payment systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Designing Low-Cost Payment Networks in Mature Financial Markets
              </h3>
              <p className="text-sm text-neutral-600">
                Working paper on engineering payment infrastructure that reduces settlement cost while
                maintaining regulatory robustness.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Engineering an M-PESA for the U.S. Market
              </h3>
              <p className="text-sm text-neutral-600">
                Conceptual and architectural analysis of mobile-money inspired systems in advanced
                financial ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-24 max-w-3xl space-y-4 mb-24">
          <h2 className="text-2xl font-semibold text-center">
            About Henry
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed text-center">
            Practitioner–scholar working at the intersection of payments, liquidity, and system design.
            My work focuses on how timing, flow-based architecture, and cross-border infrastructure can
            be engineered to improve financial resilience for households, firms, and institutions.
          </p>
        </section>
      </main>
    </>
  );
}
