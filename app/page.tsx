import Navbar from "./_components/Navigation";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-lg font-medium tracking-wide uppercase">
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
            <a
              href="#listings"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition"
            >
              Explore Listings
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
