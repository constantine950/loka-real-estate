import Image from "next/image";
import Link from "next/link";

export default function ListingsPage() {
  const listings = [
    {
      id: 1,
      title: "Modern Family Home",
      location: "Lekki, Lagos",
      price: "$450,000",
      image: "/list1.avif",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Victoria Island, Lagos",
      price: "$320,000",
      image: "/list2.avif",
    },
    {
      id: 3,
      title: "Cozy Beach House",
      location: "Ilashe, Lagos",
      price: "$600,000",
      image: "/list3.avif",
    },
  ];

  return (
    <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">
        Featured Listings
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((home) => (
          <div
            key={home.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={home.image}
                alt={home.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {home.title}
              </h2>
              <p className="text-gray-500">{home.location}</p>
              <p className="text-teal-600 font-bold mt-2">{home.price}</p>
              <Link href={`/listings/${home.id}`}>
                <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
