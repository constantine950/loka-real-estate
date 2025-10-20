import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/home.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-lg font-medium tracking-wider uppercase">
            Find Your Perfect Home
          </h2>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Discover Properties with Loka
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Browse homes, apartments, and land for sale or rent with an easy and
            modern experience.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/listings"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition"
            >
              Explore Listings
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
