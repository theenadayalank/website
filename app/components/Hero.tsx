import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center bg-slate-800 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/img/header-bg.jpg')" }}
      />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4">
          What We think, We Become.
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8">
          Are you ready to know my cup of coffee??? ☕
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="#about"
            className="inline-block rounded-full bg-primary px-8 py-3 font-medium text-white shadow-lg hover:bg-primary-dark transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
          >
            Getting Started
          </Link>
          <a
            href="/Theenadayalan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-white/80 px-8 py-3 font-medium text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
