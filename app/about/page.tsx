export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-teal-600 mb-6">About Loka</h1>
      <p className="text-gray-600 leading-relaxed text-lg">
        Loka is a modern real estate platform designed to make buying, selling,
        and renting properties effortless. Our goal is to connect people with
        their dream homes using technology, transparency, and trust.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            We aim to simplify the real estate process by providing a
            user-friendly platform that helps people find properties that match
            their lifestyle, budget, and preferences — all in one place.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To redefine the way people discover and experience properties across
            Nigeria and beyond — making every search seamless, smart, and
            satisfying.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          Meet the Team
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our team is made up of passionate developers, designers, and real
          estate experts working together to bring the best property search
          experience to life.
        </p>
      </div>
    </main>
  );
}
